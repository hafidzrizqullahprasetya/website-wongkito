"use client";

import Link from "next/link";
import {
  ShoppingBag,
  UtensilsCrossed,
  MessageSquare,
  Wallet,
  Store,
  Volume2,
  VolumeX,
  Bell,
  Radio,
} from "lucide-react";

export default function DashboardHeader({
  activeTab,
  setActiveTab,
  orders = [],
  channels = [],
  storeStatus,
  pollerStatus,
  wsConnected,
  soundOn,
  setSoundOn,
  onTestOrder,
  isTestSending,
}) {
  const newOrdersCount = orders.filter((o) => o.status === "new").length;
  const hasUnreadChat = channels.some((c) => c.unread);

  const navItems = [
    {
      id: "orders",
      label: "Antrean Pesanan",
      icon: ShoppingBag,
      count: newOrdersCount,
    },
    {
      id: "menu",
      label: "Sinkronisasi Stok Menu",
      icon: UtensilsCrossed,
    },
    {
      id: "chat",
      label: "Inbox Chat Driver & Pelanggan",
      icon: MessageSquare,
      unread: hasUnreadChat,
    },
    {
      id: "finance",
      label: "Keuangan & Auto-Payout",
      icon: Wallet,
    },
    {
      id: "operations",
      label: "Kendali Operasional Dapur",
      icon: Store,
      alert: storeStatus?.is_busy_mode,
    },
  ];

  return (
    <header className="bg-gradient-to-r from-wk-dark-maroon via-wk-maroon to-[#6B1414] text-white sticky top-0 z-40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Tagline */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-wk-gold to-amber-500 flex items-center justify-center text-wk-dark-maroon font-black text-2xl shadow-md border-2 border-white/30 group-hover:rotate-6 transition-transform">
                WK
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-black tracking-tight text-white">
                    PEMPEK ASLI WONG KITO
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-wk-gold text-wk-dark-maroon tracking-wider uppercase">
                    Order Hub OS
                  </span>
                </div>
                <p className="text-xs text-wk-beige/80 font-medium">
                  Satu Pusat Kontrol ShopeeFood, GoFood & Dapur
                </p>
              </div>
            </Link>
          </div>

          {/* Quick Live Status & Actions */}
          <div className="flex items-center gap-3">
            {/* WebSocket Status Indicator */}
            <div
              className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border transition ${
                wsConnected
                  ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                  : "bg-rose-500/20 text-rose-300 border-rose-500/40"
              }`}
            >
              <Radio
                className={`w-3.5 h-3.5 ${wsConnected ? "animate-pulse text-emerald-400" : "text-rose-400"}`}
              />
              {wsConnected ? "Live Real-time" : "Reconnecting..."}
            </div>

            {/* Poller Badge */}
            {pollerStatus && (
              <div
                className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${
                  pollerStatus.pollers?.some((p) => p.needs_relogin)
                    ? "bg-rose-500/30 text-rose-200 border-rose-500/50"
                    : "bg-white/10 text-wk-beige border-white/20"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    pollerStatus.pollers?.some((p) => p.needs_relogin)
                      ? "bg-rose-400"
                      : "bg-wk-gold"
                  }`}
                />
                <span>Shopee Poller (30s)</span>
              </div>
            )}

            {/* Sound Toggle */}
            <button
              onClick={() => setSoundOn(!soundOn)}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition"
              title={
                soundOn ? "Suara Notifikasi Aktif" : "Suara Notifikasi Senyap"
              }
            >
              {soundOn ? (
                <Volume2 className="w-5 h-5 text-wk-gold" />
              ) : (
                <VolumeX className="w-5 h-5 text-slate-300" />
              )}
            </button>

            {/* Demo Simulation Trigger */}
            <button
              onClick={onTestOrder}
              disabled={isTestSending}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-wk-gold to-amber-400 hover:from-amber-400 hover:to-amber-500 text-wk-dark-maroon font-bold text-sm shadow-md transition transform active:scale-95 disabled:opacity-50"
            >
              <Bell className="w-4 h-4" />
              <span className="hidden sm:inline">
                {isTestSending ? "Mengirim..." : "Simulasi Order Masuk"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ================= NAVIGATION TABS ================= */}
      <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-2 overflow-x-auto py-2.5 scrollbar-none">
            {navItems.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-wk-gold text-wk-dark-maroon shadow-md"
                      : "text-wk-beige/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                  {tab.count > 0 && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-black bg-rose-600 text-white animate-pulse">
                      {tab.count}
                    </span>
                  )}
                  {tab.unread && (
                    <span className="w-2.5 h-2.5 rounded-full bg-wk-gold animate-ping" />
                  )}
                  {tab.alert && (
                    <span className="px-2 py-0.5 rounded-md text-[10px] bg-rose-500 text-white uppercase font-black">
                      Sibuk
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
