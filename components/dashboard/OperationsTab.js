"use client";

import { AlertTriangle } from "lucide-react";

export default function OperationsTab({ storeStatus, onToggleBusy }) {
  if (!storeStatus) return null;

  return (
    <div className="space-y-6">
      {/* Emergency Pause Control Card */}
      <div
        className={`rounded-3xl p-8 border transition shadow-sm ${
          storeStatus.is_busy_mode
            ? "bg-rose-50 border-rose-300"
            : "bg-white border-slate-200/80"
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-amber-500/10 text-amber-700">
                <AlertTriangle className="w-6 h-6" />
              </span>
              <h3 className="text-xl font-black text-slate-900">
                Tombol Darurat Dapur Sibuk (Emergency Pause)
              </h3>
            </div>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl">
              Jika dapur sedang kewalahan atau antrean membludak, aktifkan mode
              sibuk untuk menahan pesanan baru ShopeeFood & GoFood secara
              otomatis selama 30 menit tanpa merusak rating performa resto.
            </p>
            {storeStatus.is_busy_mode && (
              <div className="mt-3 inline-block px-3 py-1 rounded-xl bg-rose-600 text-white text-xs font-black">
                SEDANG AKTIF HINGGA: {storeStatus.busy_until}
              </div>
            )}
          </div>

          <button
            onClick={onToggleBusy}
            className={`px-6 py-4 rounded-2xl font-black text-sm transition shadow-md whitespace-nowrap ${
              storeStatus.is_busy_mode
                ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                : "bg-rose-600 hover:bg-rose-700 text-white"
            }`}
          >
            {storeStatus.is_busy_mode
              ? "Matikan Mode Sibuk (Buka Kembali)"
              : "Aktifkan Mode Dapur Sibuk (30 Mnt)"}
          </button>
        </div>
      </div>

      {/* Platform Integration Health Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex items-center justify-between">
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
          <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            OPEN & SYNC
          </span>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-[#00AA13]" />
            <div>
              <h4 className="font-bold text-slate-900 text-sm">
                GoFood Merchant
              </h4>
              <p className="text-xs text-slate-400">GoBiz Restaurant Service</p>
            </div>
          </div>
          <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            OPEN & SYNC
          </span>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-amber-500" />
            <div>
              <h4 className="font-bold text-slate-900 text-sm">
                Dine-in & Kasir Offline
              </h4>
              <p className="text-xs text-slate-400">Kasir Utama Outlet</p>
            </div>
          </div>
          <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            READY
          </span>
        </div>
      </div>
    </div>
  );
}
