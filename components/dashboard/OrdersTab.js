"use client";

import {
  TrendingUp,
  Wallet,
  ShoppingBag,
  Flame,
  RefreshCw,
  Printer,
} from "lucide-react";
import { PLATFORM_CONFIG, STATUS_CONFIG, fmtIDR, fmtTime } from "./config";

export default function OrdersTab({
  orders = [],
  stats,
  onRefresh,
  onUpdateStatus,
  onPrint,
}) {
  return (
    <div className="space-y-8">
      {/* Stat Cards Row */}
      {stats && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:border-wk-gold/50 transition">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">
                Omzet Hari Ini
              </span>
              <TrendingUp className="w-5 h-5 text-emerald-600" />
            </div>
            <p className="text-2xl font-black text-slate-900 font-mono">
              {fmtIDR(stats.net_income_today)}
            </p>
            <p className="text-xs font-semibold text-emerald-600 mt-1">
              {stats.orders_today} Pesanan diterima hari ini
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:border-wk-gold/50 transition">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">
                Total Omzet Bersih
              </span>
              <Wallet className="w-5 h-5 text-wk-maroon" />
            </div>
            <p className="text-2xl font-black text-wk-maroon font-mono">
              {fmtIDR(stats.total_net_income)}
            </p>
            <p className="text-xs font-medium text-slate-500 mt-1">
              {stats.total_orders} Total akumulasi order
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:border-wk-gold/50 transition">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">
                Rata-Rata Tiket / Order
              </span>
              <ShoppingBag className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-2xl font-black text-slate-900 font-mono">
              {fmtIDR(stats.avg_order_value)}
            </p>
            <p className="text-xs font-medium text-slate-500 mt-1">
              Nilai per transaksi
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-amber-200/80 shadow-sm">
            <div className="flex items-center justify-between text-amber-800 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">
                Menu Paling Laris
              </span>
              <Flame className="w-5 h-5 text-amber-600" />
            </div>
            <p className="text-xl font-black text-slate-900 truncate">
              {stats.top_menus?.[0]?.menu || "Tekwan Palembang"}
            </p>
            <p className="text-xs font-bold text-amber-700 mt-1">
              {stats.top_menus?.[0]?.total_qty || 123} porsi terjual
            </p>
          </div>
        </div>
      )}

      {/* Orders Feed */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-black text-slate-900">
              Antrean Pesanan Masuk
            </h2>
            <p className="text-xs text-slate-500">
              Realtime sync dari ShopeeFood, GoFood & Kasir Dine-in Wong Kito
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onRefresh}
              className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 transition"
              title="Segarkan data"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="divide-y divide-slate-100">
          {orders.length === 0 ? (
            <div className="p-16 text-center">
              <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-600 font-bold">
                Belum ada pesanan aktif
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Klik tombol &quot;Simulasi Order Masuk&quot; di kanan atas untuk
                uji coba
              </p>
            </div>
          ) : (
            orders.map((o) => {
              const platform =
                PLATFORM_CONFIG[o.platform] || PLATFORM_CONFIG.offline;
              const status = STATUS_CONFIG[o.status] || STATUS_CONFIG.new;

              return (
                <div
                  key={o.id}
                  className={`p-5 sm:p-6 transition hover:bg-slate-50/80 ${
                    o.status === "new"
                      ? "bg-amber-50/40 border-l-4 border-l-wk-gold"
                      : ""
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* Order Meta & Items */}
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        {/* Platform Badge */}
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold border ${platform.bg} ${platform.text} ${platform.border}`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full ${platform.dot}`}
                          />
                          {platform.label}
                        </span>

                        {/* Order ID & Time */}
                        <span className="text-xs font-mono font-bold text-slate-600">
                          #{o.external_id}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-xs text-slate-500 font-medium">
                          {fmtTime(o.ordered_at)} WIB
                        </span>

                        {o.customer_name && (
                          <>
                            <span className="text-slate-300">•</span>
                            <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">
                              {o.customer_name}
                            </span>
                          </>
                        )}
                      </div>

                      {/* Menu Items List */}
                      <div className="text-sm font-semibold text-slate-900">
                        {o.items?.map((it, idx) => (
                          <span key={idx} className="mr-3">
                            <span className="text-wk-maroon font-bold">
                              {it.qty}×
                            </span>{" "}
                            {it.menu_name}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Total Price & Status Actions */}
                    <div className="flex flex-wrap items-center gap-4 self-end lg:self-center">
                      <div className="text-right">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          Total Bayar
                        </span>
                        <span className="text-lg font-black text-wk-dark-maroon font-mono">
                          {fmtIDR(o.total)}
                        </span>
                      </div>

                      {/* Status Selector */}
                      <div className="flex items-center gap-2">
                        <select
                          value={o.status}
                          onChange={(e) => onUpdateStatus(o.id, e.target.value)}
                          className={`px-3 py-2 rounded-xl text-xs font-bold border cursor-pointer transition shadow-sm outline-none ${
                            o.status === "new"
                              ? "bg-blue-600 text-white border-blue-700 ring-2 ring-blue-300 animate-pulse"
                              : o.status === "preparing"
                                ? "bg-amber-500 text-white border-amber-600"
                                : o.status === "ready"
                                  ? "bg-emerald-600 text-white border-emerald-700"
                                  : "bg-slate-100 text-slate-700 border-slate-200"
                          }`}
                        >
                          {Object.entries(STATUS_CONFIG).map(([k, v]) => (
                            <option
                              key={k}
                              value={k}
                              className="bg-white text-slate-800 font-semibold"
                            >
                              {v.label}
                            </option>
                          ))}
                        </select>

                        {/* Print Receipt Button */}
                        <button
                          onClick={() => onPrint(o)}
                          className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 shadow-sm transition"
                          title="Cetak Struk 58mm"
                        >
                          <Printer className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
