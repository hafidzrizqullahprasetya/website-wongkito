"use client";

/**
 * 🧠 Wong Kito Order Hub — Dashboard Live
 * ----------------------------------------
 * Fitur:
 *  - List order real-time via WebSocket
 *  - Statistik omzet (dari backend)
 *  - Notifikasi suara + popup saat order masuk 🔔
 *  - Tombol "Test Order" buat simulasi (demo)
 *
 * Konfigurasi API ada di file config/orderHub.js
 */
import { useEffect, useState, useCallback, useRef } from "react";

const API_BASE =
  process.env.NEXT_PUBLIC_ORDER_HUB_URL || "http://localhost:8000";
const API_KEY =
  process.env.NEXT_PUBLIC_ORDER_HUB_KEY ||
  "whub_eo1WPn-sYVUHTR4qPFJjR-V_EBSHKaW_";
const DEVICE_KEY =
  process.env.NEXT_PUBLIC_ORDER_HUB_DEVICE_KEY ||
  "wdev_R4Sj8AC5V6f8wG3IdHYCKCSuPb3wAuHR";

const fmtIDR = (n) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n || 0);

const fmtTime = (s) =>
  s
    ? new Date(s).toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "—";

const PLATFORM_BADGE = {
  shopee_food: { label: "ShopeeFood", cls: "bg-orange-100 text-orange-700" },
  gofood: { label: "GoFood", cls: "bg-green-100 text-green-700" },
  grabfood: { label: "GrabFood", cls: "bg-green-100 text-green-800" },
  offline: { label: "Offline", cls: "bg-slate-200 text-slate-700" },
};

const STATUS_BADGE = {
  new: { label: "🆕 Baru", cls: "bg-blue-100 text-blue-700 animate-pulse" },
  preparing: { label: "👩‍🍳 Dimasak", cls: "bg-amber-100 text-amber-700" },
  ready: { label: "✅ Siap", cls: "bg-emerald-100 text-emerald-700" },
  completed: { label: "🏁 Selesai", cls: "bg-slate-200 text-slate-600" },
  cancelled: { label: "❌ Batal", cls: "bg-red-100 text-red-700" },
};

export default function DashboardPage() {
  const [orders, setOrders] = useState([]);
  const [stats, setStats] = useState(null);
  const [wsConnected, setWsConnected] = useState(false);
  const [newOrderPopup, setNewOrderPopup] = useState(null);
  const [soundOn, setSoundOn] = useState(true);
  const [apiKey, setApiKey] = useState(API_KEY);
  const [deviceKey, setDeviceKey] = useState(DEVICE_KEY);
  const [pollerStatus, setPollerStatus] = useState(null);
  const [testSending, setTestSending] = useState(false);
  const audioCtxRef = useRef(null);

  const authHeaders = { "X-API-Key": apiKey };
  const wsUrl = deviceKey
    ? `${API_BASE.replace("http", "ws")}/ws/${deviceKey}`
    : null;

  // ---------- Beep pakai Web Audio (tanpa file audio eksternal) ----------
  const playDing = useCallback(() => {
    if (!soundOn) return;
    try {
      audioCtxRef.current ||= new (
        window.AudioContext || window.webkitAudioContext
      )();
      const ctx = audioCtxRef.current;
      const now = ctx.currentTime;
      [880, 1108.7, 1318.5].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.001, now + i * 0.15);
        gain.gain.exponentialRampToValueAtTime(0.4, now + i * 0.15 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.15 + 0.3);
        osc.connect(gain).connect(ctx.destination);
        osc.start(now + i * 0.15);
        osc.stop(now + i * 0.15 + 0.35);
      });
    } catch (e) {
      /* audio blocked */
    }
  }, [soundOn]);

  // ---------- Load data awal ----------
  const loadAll = useCallback(async () => {
    if (!apiKey) return;
    try {
      const [o, s] = await Promise.all([
        fetch(`${API_BASE}/orders?limit=30`, { headers: authHeaders }).then(
          (r) => r.json(),
        ),
        fetch(`${API_BASE}/stats/summary`, { headers: authHeaders }).then((r) =>
          r.json(),
        ),
      ]);
      Array.isArray(o) && setOrders(o);
      setStats(s);
    } catch (e) {
      console.error("load error", e);
    }
  }, [apiKey]);

  // ---------- Load status poller (sesekali aja, tiap 60s) ----------
  useEffect(() => {
    const load = async () => {
      try {
        const p = await fetch(`${API_BASE}/poller/status`).then((r) =>
          r.json(),
        );
        setPollerStatus(p);
      } catch (e) {}
    };
    load();
    const t = setInterval(load, 60000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    loadAll();
  }, [loadAll]);

  // ---------- WebSocket real-time ----------
  useEffect(() => {
    if (!wsUrl) return;
    let ws;
    let closed = false;
    const connect = () => {
      ws = new WebSocket(wsUrl);
      ws.onopen = () => setWsConnected(true);
      ws.onclose = () => {
        setWsConnected(false);
        if (!closed) setTimeout(connect, 2000); // auto-reconnect
      };
      ws.onmessage = (ev) => {
        const msg = JSON.parse(ev.data);
        if (msg.event === "order.new") {
          playDing();
          setNewOrderPopup(msg.order);
          setTimeout(() => setNewOrderPopup(null), 8000);
          loadAll(); // refresh list + stats
        }
        if (msg.event === "order.status_changed") loadAll();
      };
    };
    connect();
    return () => {
      closed = true;
      ws && ws.close();
    };
  }, [wsUrl, playDing, loadAll]);

  // ---------- Actions ----------
  const testOrder = async () => {
    setTestSending(true);
    try {
      await fetch(`${API_BASE}/demo/new-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          platform: ["shopee_food", "gofood", "offline"][
            Math.floor(Math.random() * 3)
          ],
          customer_name: ["Budi", "Sari", "Joko", "Dewi", "Agus"][
            Math.floor(Math.random() * 5)
          ],
          items: [
            {
              menu_name: "Pempek Kapal Selam",
              qty: Math.ceil(Math.random() * 3),
              unit_price: 15000,
            },
            {
              menu_name: "Tekwan",
              qty: Math.ceil(Math.random() * 2),
              unit_price: 19500,
            },
          ],
        }),
      });
    } finally {
      setTestSending(false);
    }
  };

  const updateStatus = async (id, status) => {
    await fetch(`${API_BASE}/orders/${id}/status`, {
      method: "PATCH",
      headers: { ...authHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    loadAll();
  };

  const listDevices = async () => {
    const d = await fetch(`${API_BASE}/devices`, { headers: authHeaders }).then(
      (r) => r.json(),
    );
    setDevices(d);
  };

  // ---------- UI ----------
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      {/* ===== Popup order baru ===== */}
      {newOrderPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl animate-bounce">
            <div className="text-center">
              <div className="text-5xl mb-2">🔔</div>
              <h2 className="text-2xl font-bold text-slate-900">
                PESANAN BARU!
              </h2>
              <p className="text-slate-500 mb-4">
                {PLATFORM_BADGE[newOrderPopup.platform]?.label} •{" "}
                {newOrderPopup.customer_name}
              </p>
              <ul className="text-left space-y-1 mb-4">
                {newOrderPopup.items.map((it, i) => (
                  <li
                    key={i}
                    className="flex justify-between border-b border-dashed py-1"
                  >
                    <span>
                      {it.qty}× {it.menu_name}
                    </span>
                    <span className="font-mono">
                      {fmtIDR(it.qty * it.unit_price)}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xl font-bold text-emerald-600">
                {fmtIDR(newOrderPopup.total)}
              </p>
              <button
                onClick={() => setNewOrderPopup(null)}
                className="mt-4 w-full rounded-xl bg-slate-900 py-3 text-white font-semibold hover:bg-slate-700"
              >
                OK, Terima ✋
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== Header ===== */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            🍜 Order Hub — Wong Kito
          </h1>
          <p className="text-sm text-slate-500">
            Backend: <code>{API_BASE}</code>{" "}
            <span
              className={`ml-1 inline-block h-2 w-2 rounded-full ${wsConnected ? "bg-emerald-500" : "bg-red-400"}`}
            />
            {wsConnected
              ? "WS live"
              : deviceKey
                ? "WS reconnecting…"
                : "WS off (isi device key)"}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setSoundOn(!soundOn)}
            className="rounded-xl border px-4 py-2 text-sm font-medium hover:bg-white"
          >
            {soundOn ? "🔊 Suara ON" : "🔇 Suara OFF"}
          </button>
          <button
            onClick={testOrder}
            disabled={testSending}
            className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-orange-600 disabled:opacity-50"
          >
            {testSending ? "Mengirim…" : "🔔 Test Order Masuk"}
          </button>
        </div>
      </div>

      {/* ===== Setup API key (kalau belum ada) ===== */}
      {!apiKey && (
        <div className="mb-6 rounded-xl border-2 border-dashed border-amber-300 bg-amber-50 p-4">
          <p className="mb-2 text-sm font-medium text-amber-800">
            Isi API key store:
          </p>
          <input
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="whub_..."
            className="w-full rounded-lg border px-3 py-2 font-mono text-sm"
          />
        </div>
      )}

      {/* ===== Stat cards ===== */}
      {stats && (
        <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Card
            label="Omzet Hari Ini"
            value={fmtIDR(stats.net_income_today)}
            accent="text-emerald-600"
            sub={`${stats.orders_today} order`}
          />
          <Card
            label="Total Omzet"
            value={fmtIDR(stats.total_net_income)}
            accent="text-slate-800"
            sub={`${stats.total_orders} order`}
          />
          <Card
            label="Rata-rata / Order"
            value={fmtIDR(stats.avg_order_value)}
            accent="text-blue-600"
          />
          <Card
            label="Menu Terlaris"
            value={stats.top_menus?.[0]?.menu || "—"}
            accent="text-orange-600"
            sub={
              stats.top_menus?.[0]
                ? `${stats.top_menus[0].total_qty} porsi`
                : ""
            }
            small
          />
        </div>
      )}

      {/* ===== Device key utk WebSocket ===== */}
      <div className="mb-6 rounded-xl border bg-white p-4 shadow-sm">
        <p className="mb-2 text-sm font-semibold text-slate-700">
          🔌 Device key (buat WebSocket real-time)
        </p>
        <input
          value={deviceKey}
          onChange={(e) => setDeviceKey(e.target.value)}
          placeholder="wdev_... (POST /devices dulu, lalu paste di sini)"
          className="w-full rounded-lg border px-3 py-2 font-mono text-sm"
        />
      </div>

      {/* ===== Daftar order ===== */}
      <div className="rounded-xl border bg-white shadow-sm">
        <div className="border-b px-4 py-3">
          <h2 className="font-semibold text-slate-800">
            📦 Order Terbaru ({orders.length})
          </h2>
        </div>
        <div className="divide-y">
          {orders.length === 0 && (
            <p className="p-8 text-center text-slate-400">
              Belum ada order — klik &quot;Test Order Masuk&quot; 🎯
            </p>
          )}
          {orders.map((o) => (
            <div
              key={o.id}
              className="flex flex-wrap items-center gap-3 px-4 py-3 hover:bg-slate-50"
            >
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${PLATFORM_BADGE[o.platform]?.cls || "bg-slate-100"}`}
              >
                {PLATFORM_BADGE[o.platform]?.label || o.platform}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-slate-800">
                  {o.items?.map((i) => `${i.qty}× ${i.menu_name}`).join(", ") ||
                    "—"}
                </p>
                <p className="text-xs text-slate-400">
                  #{o.external_id} • {fmtTime(o.ordered_at)} •{" "}
                  {o.customer_name || "—"}
                </p>
              </div>
              <span className="font-mono text-sm font-semibold text-slate-700">
                {fmtIDR(o.total)}
              </span>
              <select
                value={o.status}
                onChange={(e) => updateStatus(o.id, e.target.value)}
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_BADGE[o.status]?.cls || "bg-slate-100"}`}
              >
                {Object.entries(STATUS_BADGE).map(([k, v]) => (
                  <option key={k} value={k}>
                    {v.label}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ label, value, sub, accent, small }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
        {label}
      </p>
      <p
        className={`mt-1 font-bold ${accent} ${small ? "text-base truncate" : "text-xl"}`}
      >
        {value}
      </p>
      {sub && <p className="mt-0.5 text-xs text-slate-400">{sub}</p>}
    </div>
  );
}
