"use client";

import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function OperationsTab({ storeStatus, onToggleBusy }) {
  if (!storeStatus) return null;

  return (
    <div className="space-y-6">
      {/* Emergency Pause Control Card */}
      <Card
        className={`p-8 transition ${
          storeStatus.is_busy_mode
            ? "bg-rose-50 border-rose-300"
            : "border-slate-200/80"
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-amber-500/10 text-amber-700">
                <AlertTriangle className="w-6 h-6" />
              </span>
              <CardTitle>
                Tombol Darurat Dapur Sibuk (Emergency Pause)
              </CardTitle>
            </div>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl">
              Jika dapur sedang kewalahan atau antrean membludak, aktifkan mode
              sibuk untuk menahan pesanan baru ShopeeFood & GoFood secara
              otomatis selama 30 menit tanpa merusak rating performa resto.
            </p>
            {storeStatus.is_busy_mode && (
              <Badge variant="destructive" className="mt-3 text-xs px-3 py-1 font-black">
                SEDANG AKTIF HINGGA: {storeStatus.busy_until}
              </Badge>
            )}
          </div>

          <Button
            size="lg"
            variant={storeStatus.is_busy_mode ? "default" : "destructive"}
            onClick={onToggleBusy}
            className="rounded-2xl font-black text-sm whitespace-nowrap shadow-md"
          >
            {storeStatus.is_busy_mode
              ? "Matikan Mode Sibuk (Buka Kembali)"
              : "Aktifkan Mode Dapur Sibuk (30 Mnt)"}
          </Button>
        </div>
      </Card>

      {/* Platform Integration Health Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-[#EE4D2D]" />
            <div>
              <h4 className="font-bold text-slate-900 text-sm">
                ShopeeFood Store
              </h4>
              <p className="text-xs text-slate-400">
                ID: 21436188 (Maguwoharjo)
              </p>
            </div>
          </div>
          <Badge variant="outline" className="text-emerald-700 bg-emerald-50 border-emerald-200">
            OPEN & SYNC
          </Badge>
        </Card>

        <Card className="p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-[#00AA13]" />
            <div>
              <h4 className="font-bold text-slate-900 text-sm">
                GoFood Merchant
              </h4>
              <p className="text-xs text-slate-400">
                GoBiz Restaurant Service
              </p>
            </div>
          </div>
          <Badge variant="outline" className="text-emerald-700 bg-emerald-50 border-emerald-200">
            OPEN & SYNC
          </Badge>
        </Card>

        <Card className="p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-amber-500" />
            <div>
              <h4 className="font-bold text-slate-900 text-sm">
                Dine-in & Kasir Offline
              </h4>
              <p className="text-xs text-slate-400">Kasir Utama Outlet</p>
            </div>
          </div>
          <Badge variant="outline" className="text-emerald-700 bg-emerald-50 border-emerald-200">
            READY
          </Badge>
        </Card>
      </div>
    </div>
  );
}
