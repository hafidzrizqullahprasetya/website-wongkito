"use client";

import { RefreshCw } from "lucide-react";
import { fmtIDR } from "./config";

export default function MenuTab({ menuItems = [], onToggleMenu, onRefresh }) {
  const activeCount = menuItems.filter((m) => m.is_available).length;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-slate-900">
            Sinkronisasi Stok Menu
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Matikan menu di sini — otomatis habis di ShopeeFood dan GoFood
            secara bersamaan.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl">
            {activeCount} Menu Aktif / {menuItems.length} Total
          </span>
          <button
            onClick={onRefresh}
            className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 transition"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded-2xl p-5 border transition shadow-sm flex items-center justify-between gap-3 ${
              item.is_available
                ? "border-slate-200/80"
                : "border-rose-200 bg-rose-50/30 opacity-75"
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-3xl">{item.emoji || "🥟"}</span>
              <div className="min-w-0">
                <h3 className="font-bold text-slate-900 text-sm truncate">
                  {item.name}
                </h3>
                <p className="text-xs font-bold text-wk-maroon font-mono">
                  {fmtIDR(item.price)}
                </p>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  {item.category || "Pempek"}
                </span>
              </div>
            </div>

            {/* Toggle Button */}
            <button
              onClick={() => onToggleMenu(item)}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition shadow-sm ${
                item.is_available
                  ? "bg-emerald-500 text-white hover:bg-emerald-600"
                  : "bg-rose-500 text-white hover:bg-rose-600"
              }`}
            >
              {item.is_available ? "Ready" : "Habis"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
