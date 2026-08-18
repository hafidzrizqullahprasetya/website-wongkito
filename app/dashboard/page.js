"use client";

/**
 * 👑 WONG KITO ORDER HUB — ALL-IN-ONE OPERATING SYSTEM
 * ===================================================
 * Main Container Dashboard (Modular Architecture)
 */

import { useState, useEffect, useCallback, useRef } from "react";
import { API_BASE, API_KEY, DEVICE_KEY } from "@/components/dashboard/config";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import OrderModal from "@/components/dashboard/OrderModal";
import OrdersTab from "@/components/dashboard/OrdersTab";
import MenuTab from "@/components/dashboard/MenuTab";
import ChatTab from "@/components/dashboard/ChatTab";
import FinanceTab from "@/components/dashboard/FinanceTab";
import OperationsTab from "@/components/dashboard/OperationsTab";

export default function OrderHubDashboard() {
  const [activeTab, setActiveTab] = useState("orders"); // orders | menu | chat | finance | operations
  const [orders, setOrders] = useState([]);
  const [stats, setStats] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [channels, setChannels] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [chatInput, setChatInput] = useState("");
  const [financeData, setFinanceData] = useState(null);
  const [storeStatus, setStoreStatus] = useState(null);
  const [pollerStatus, setPollerStatus] = useState(null);
  const [wsConnected, setWsConnected] = useState(false);
  const [newOrderAlert, setNewOrderAlert] = useState(null);
  const [soundOn, setSoundOn] = useState(true);
  const [isTestSending, setIsTestSending] = useState(false);
  const [payoutLoading, setPayoutLoading] = useState(false);
  const [payoutSuccess, setPayoutSuccess] = useState(null);
  const audioCtxRef = useRef(null);

  const authHeaders = { "X-API-Key": API_KEY };
  const wsUrl = DEVICE_KEY
    ? `${API_BASE.replace("http", "ws")}/ws/${DEVICE_KEY}`
    : null;

  // ---------- Audio Chime Alert (Web Audio) ----------
  const playDing = useCallback(() => {
    if (!soundOn) return;
    try {
      audioCtxRef.current ||= new (
        window.AudioContext || window.webkitAudioContext
      )();
      const ctx = audioCtxRef.current;
      const now = ctx.currentTime;
      [880, 1108.7, 1318.5, 1760].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.001, now + i * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.5, now + i * 0.12 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.35);
        osc.connect(gain).connect(ctx.destination);
        osc.start(now + i * 0.12);
        osc.stop(now + i * 0.12 + 0.4);
      });
    } catch (e) {
      console.warn("Audio play restricted:", e);
    }
  }, [soundOn]);

  // ---------- Data Loaders ----------
  const fetchOrdersAndStats = useCallback(async () => {
    try {
      const [oRes, sRes] = await Promise.all([
        fetch(`${API_BASE}/orders?limit=40`, {
          headers: { "X-API-Key": API_KEY },
        }).then((r) => r.json()),
        fetch(`${API_BASE}/stats/summary`, {
          headers: { "X-API-Key": API_KEY },
        }).then((r) => r.json()),
      ]);
      if (Array.isArray(oRes)) setOrders(oRes);
      if (sRes && !sRes.detail) setStats(sRes);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  }, []);

  const fetchMenu = useCallback(async () => {
    try {
      const data = await fetch(`${API_BASE}/menu`, {
        headers: { "X-API-Key": API_KEY },
      }).then((r) => r.json());
      if (Array.isArray(data)) setMenuItems(data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const fetchChat = useCallback(async () => {
    try {
      const data = await fetch(`${API_BASE}/chat/channels`, {
        headers: { "X-API-Key": API_KEY },
      }).then((r) => r.json());
      if (Array.isArray(data)) {
        setChannels(data);
        if (data.length > 0) setSelectedChannel((prev) => prev || data[0]);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const fetchFinance = useCallback(async () => {
    try {
      const data = await fetch(`${API_BASE}/finance/balance`, {
        headers: { "X-API-Key": API_KEY },
      }).then((r) => r.json());
      if (data && !data.detail) setFinanceData(data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const fetchStoreStatus = useCallback(async () => {
    try {
      const [st, poller] = await Promise.all([
        fetch(`${API_BASE}/operations/status`, {
          headers: { "X-API-Key": API_KEY },
        }).then((r) => r.json()),
        fetch(`${API_BASE}/poller/status`).then((r) => r.json()),
      ]);
      if (st && !st.detail) setStoreStatus(st);
      if (poller) setPollerStatus(poller);
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Initial load
  useEffect(() => {
    fetchOrdersAndStats();
    fetchStoreStatus();
    fetchChat();
  }, [fetchOrdersAndStats, fetchStoreStatus, fetchChat]);

  // Tab switch loader
  useEffect(() => {
    if (activeTab === "menu") fetchMenu();
    if (activeTab === "chat") fetchChat();
    if (activeTab === "finance") fetchFinance();
    if (activeTab === "operations") fetchStoreStatus();
  }, [activeTab, fetchMenu, fetchChat, fetchFinance, fetchStoreStatus]);

  // ---------- WebSocket Realtime Connection ----------
  useEffect(() => {
    if (!wsUrl) return;
    let ws;
    let isClosed = false;

    const connect = () => {
      ws = new WebSocket(wsUrl);
      ws.onopen = () => setWsConnected(true);
      ws.onclose = () => {
        setWsConnected(false);
        if (!isClosed) setTimeout(connect, 2000);
      };
      ws.onmessage = (ev) => {
        try {
          const msg = JSON.parse(ev.data);
          if (msg.event === "order.new") {
            playDing();
            setNewOrderAlert(msg.order);
            fetchOrdersAndStats();
            fetchFinance();
          } else if (msg.event === "order.status_changed") {
            fetchOrdersAndStats();
          } else if (msg.event === "menu.stock_updated") {
            fetchMenu();
          } else if (
            msg.event === "store.busy_changed" ||
            msg.event === "store.open_changed"
          ) {
            fetchStoreStatus();
          }
        } catch (e) {
          console.error("WS parse error:", e);
        }
      };
    };

    connect();
    return () => {
      isClosed = true;
      ws && ws.close();
    };
  }, [
    wsUrl,
    playDing,
    fetchOrdersAndStats,
    fetchFinance,
    fetchMenu,
    fetchStoreStatus,
  ]);

  // ---------- Action Handlers ----------
  const handleTestOrder = async () => {
    setIsTestSending(true);
    try {
      await fetch(`${API_BASE}/demo/new-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          platform: ["shopee_food", "gofood", "offline"][
            Math.floor(Math.random() * 3)
          ],
          customer_name: [
            "Budi Santoso",
            "Sari Melati",
            "Joko Susilo",
            "Dewi Lestari",
            "Agus Prasetyo",
          ][Math.floor(Math.random() * 5)],
          items: [
            {
              menu_name: "Pempek Kapal Selam Medium",
              qty: Math.ceil(Math.random() * 2),
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
      setIsTestSending(false);
    }
  };

  const handleUpdateOrderStatus = async (orderId, newStatus) => {
    try {
      await fetch(`${API_BASE}/orders/${orderId}/status`, {
        method: "PATCH",
        headers: { ...authHeaders, "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      fetchOrdersAndStats();
    } catch (e) {
      console.error(e);
    }
  };

  const handleToggleMenu = async (item) => {
    try {
      const res = await fetch(`${API_BASE}/menu/${item.id}/toggle`, {
        method: "PATCH",
        headers: { ...authHeaders, "Content-Type": "application/json" },
        body: JSON.stringify({ is_available: !item.is_available }),
      }).then((r) => r.json());

      if (res.ok) {
        setMenuItems((prev) =>
          prev.map((m) =>
            m.id === item.id ? { ...m, is_available: !item.is_available } : m,
          ),
        );
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleSendMessage = async () => {
    if (!chatInput.trim() || !selectedChannel) return;
    try {
      const text = chatInput;
      setChatInput("");
      const res = await fetch(`${API_BASE}/chat/send`, {
        method: "POST",
        headers: { ...authHeaders, "Content-Type": "application/json" },
        body: JSON.stringify({ channel_id: selectedChannel.id, text }),
      }).then((r) => r.json());

      if (res.ok) {
        setSelectedChannel(res.channel);
        setChannels((prev) =>
          prev.map((c) => (c.id === res.channel.id ? res.channel : c)),
        );
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleTriggerPayout = async () => {
    if (!financeData) return;
    setPayoutLoading(true);
    try {
      const res = await fetch(`${API_BASE}/finance/payout`, {
        method: "POST",
        headers: { ...authHeaders, "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: financeData.total_available_payout,
          bank_name: financeData.bank_destination.bank,
          account_number: financeData.bank_destination.account_no,
        }),
      }).then((r) => r.json());

      if (res.ok) {
        setPayoutSuccess(res);
        fetchFinance();
      }
    } finally {
      setPayoutLoading(false);
    }
  };

  const handleToggleBusy = async () => {
    try {
      const res = await fetch(`${API_BASE}/operations/toggle-busy`, {
        method: "POST",
        headers: { ...authHeaders, "Content-Type": "application/json" },
        body: JSON.stringify({ minutes: 30 }),
      }).then((r) => r.json());
      if (res.ok) setStoreStatus(res.status);
    } catch (e) {
      console.error(e);
    }
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 font-jakarta flex flex-col selection:bg-wk-gold selection:text-wk-dark-maroon">
      {/* 🔔 Modal Popup Pesanan Baru */}
      <OrderModal
        order={newOrderAlert}
        onClose={() => setNewOrderAlert(null)}
        onPrint={handlePrintReceipt}
      />

      {/* 👑 Header Brand & Navigasi Tab */}
      <DashboardHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        orders={orders}
        channels={channels}
        storeStatus={storeStatus}
        pollerStatus={pollerStatus}
        wsConnected={wsConnected}
        soundOn={soundOn}
        setSoundOn={setSoundOn}
        onTestOrder={handleTestOrder}
        isTestSending={isTestSending}
      />

      {/* 📋 Konten Tab Modular */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "orders" && (
          <OrdersTab
            orders={orders}
            stats={stats}
            onRefresh={fetchOrdersAndStats}
            onUpdateStatus={handleUpdateOrderStatus}
            onPrint={handlePrintReceipt}
          />
        )}

        {activeTab === "menu" && (
          <MenuTab
            menuItems={menuItems}
            onToggleMenu={handleToggleMenu}
            onRefresh={fetchMenu}
          />
        )}

        {activeTab === "chat" && (
          <ChatTab
            channels={channels}
            selectedChannel={selectedChannel}
            onSelectChannel={setSelectedChannel}
            chatInput={chatInput}
            setChatInput={setChatInput}
            onSendMessage={handleSendMessage}
          />
        )}

        {activeTab === "finance" && (
          <FinanceTab
            financeData={financeData}
            payoutLoading={payoutLoading}
            payoutSuccess={payoutSuccess}
            setPayoutSuccess={setPayoutSuccess}
            onTriggerPayout={handleTriggerPayout}
          />
        )}

        {activeTab === "operations" && (
          <OperationsTab
            storeStatus={storeStatus}
            onToggleBusy={handleToggleBusy}
          />
        )}
      </main>
    </div>
  );
}
