"use client";

import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fmtIDR } from "./config";

export default function MenuTab({ menuItems = [], onToggleMenu, onRefresh }) {
  const activeCount = menuItems.filter((m) => m.is_available).length;

  return (
    <div className="space-y-6">
      <Card className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <CardTitle>Sinkronisasi Stok Menu</CardTitle>
          <p className="text-xs text-slate-500 mt-1">
            Matikan menu di sini, otomatis habis di ShopeeFood dan GoFood secara bersamaan.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="px-3 py-1.5 rounded-xl font-bold">
            {activeCount} Menu Aktif / {menuItems.length} Total
          </Badge>
          <Button
            variant="outline"
            size="icon"
            onClick={onRefresh}
            className="rounded-xl border-slate-200"
          >
            <RefreshCw className="w-4 h-4 text-slate-600" />
          </Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {menuItems.map((item) => (
          <Card
            key={item.id}
            className={`p-5 transition flex items-center justify-between gap-3 ${
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

            {/* Toggle Button shadcn */}
            <Button
              size="sm"
              variant={item.is_available ? "default" : "destructive"}
              onClick={() => onToggleMenu(item)}
              className="rounded-xl font-extrabold px-3 py-1.5 h-auto text-xs"
            >
              {item.is_available ? "Ready" : "Habis"}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
