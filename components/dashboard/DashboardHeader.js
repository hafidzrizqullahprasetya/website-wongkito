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
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
    <header className="bg-wk-dark-maroon text-white sticky top-0 z-40 border-b border-wk-gold/20">
      {/* Top Banner Accent */}
      <div className="bg-black/30 py-1.5 px-4 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-wk-beige/90 font-medium">
            <span className="w-2 h-2 rounded-full bg-wk-gold" />
            <span>
              Pusat Kendali Terintegrasi ShopeeFood, GoFood &amp; Dine-in Outlet
              Maguwoharjo
            </span>
          </div>
          <div className="flex items-center gap-4 text-wk-beige/80">
            <Link
              href="/"
              className="hover:text-wk-gold transition font-bold flex items-center gap-1"
            >
              Buka Website Toko <Sparkles className="w-3 h-3 text-wk-gold" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/assets/img/logo/logo.png"
                alt="Pempek Asli Wong Kito"
                className="max-h-12 sm:max-h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <div className="flex flex-col justify-center">
                <span className="text-white font-extrabold text-base sm:text-lg leading-[1.1] tracking-tighter whitespace-nowrap">
                  Pempek{" "}
                  <span className="font-dancing text-wk-gold italic text-xl mx-0.5">
                    &quot;Asli&quot;
                  </span>{" "}
                  Wong Kito
                </span>
                <span className="text-[10px] font-extrabold text-wk-gold uppercase tracking-widest mt-0.5">
                  Order Hub • Unified OS
                </span>
              </div>
            </Link>
          </div>

          {/* Quick Live Status & Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* WebSocket Status Indicator */}
            <div
              className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border transition ${
                wsConnected
                  ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                  : "bg-rose-500/15 text-rose-300 border-rose-500/30"
              }`}
            >
              <Radio
                className={`w-3.5 h-3.5 ${wsConnected ? "text-emerald-400" : "text-rose-400"}`}
              />
              <span>{wsConnected ? "Live Realtime" : "Reconnecting..."}</span>
            </div>

            {/* Poller Badge */}
            {pollerStatus && (
              <div
                className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${
                  pollerStatus.pollers?.some((p) => p.needs_relogin)
                    ? "bg-rose-500/20 text-rose-200 border-rose-500/40"
                    : "bg-white/10 text-wk-beige border-white/15"
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
            <Button
              variant="outline"
              size="icon"
              onClick={() => setSoundOn(!soundOn)}
              className="rounded-xl bg-white/10 hover:bg-white/20 text-white border-white/20"
              title={
                soundOn ? "Suara Notifikasi Aktif" : "Suara Notifikasi Senyap"
              }
            >
              {soundOn ? (
                <Volume2 className="w-4 h-4 text-wk-gold" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-300" />
              )}
            </Button>

            {/* Demo Simulation Trigger */}
            <Button
              variant="gold"
              onClick={onTestOrder}
              disabled={isTestSending}
              className="gap-2 shadow-sm rounded-xl font-bold"
            >
              <Bell className="w-4 h-4" />
              <span className="hidden sm:inline">
                {isTestSending ? "Mengirim..." : "Simulasi Order Masuk"}
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* ================= NAVIGATION TABS ================= */}
      <div className="border-t border-white/10 bg-black/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-2 overflow-x-auto py-2 scrollbar-none">
            {navItems.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-wk-gold text-wk-dark-maroon font-black shadow-sm"
                      : "text-wk-beige/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                  {tab.count > 0 && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-black bg-rose-600 text-white">
                      {tab.count}
                    </span>
                  )}
                  {tab.unread && (
                    <span className="w-2 h-2 rounded-full bg-wk-gold" />
                  )}
                  {tab.alert && (
                    <Badge
                      variant="destructive"
                      className="text-[10px] px-1.5 py-0"
                    >
                      Sibuk
                    </Badge>
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
