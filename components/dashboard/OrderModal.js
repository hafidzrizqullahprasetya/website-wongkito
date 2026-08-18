"use client";

import { Flame, Printer } from "lucide-react";
import { PLATFORM_CONFIG, fmtIDR } from "./config";

export default function OrderModal({ order, onClose, onPrint }) {
  if (!order) return null;
  const platform = PLATFORM_CONFIG[order.platform] || PLATFORM_CONFIG.offline;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border-4 border-wk-gold overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-wk-dark-maroon to-wk-maroon p-6 text-white text-center relative">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-wk-gold text-wk-dark-maroon mb-3 shadow-lg ring-4 ring-white/20 animate-bounce">
            <Flame className="w-9 h-9" />
          </div>
          <h2 className="text-2xl font-black tracking-tight text-white uppercase">
            PESANAN BARU MASUK!
          </h2>
          <p className="text-wk-beige/90 text-sm font-medium mt-1">
            {platform.label} • #{order.external_id}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 flex justify-between items-center">
            <div>
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                Pemesan
              </span>
              <p className="text-base font-bold text-slate-900">
                {order.customer_name || "Pelanggan Online"}
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                Total Pendapatan
              </span>
              <p className="text-xl font-black text-wk-maroon font-mono">
                {fmtIDR(order.total)}
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Rincian Menu Yang Dipesan:
            </p>
            <div className="divide-y divide-slate-100 max-h-48 overflow-y-auto pr-1">
              {order.items?.map((it, idx) => (
                <div
                  key={idx}
                  className="py-2 flex justify-between items-center text-sm"
                >
                  <span className="font-semibold text-slate-800">
                    <span className="text-wk-maroon font-bold mr-2">
                      {it.qty}×
                    </span>
                    {it.menu_name}
                  </span>
                  <span className="font-mono text-slate-600 font-medium">
                    {fmtIDR(it.qty * it.unit_price)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex gap-3">
          <button
            onClick={() => {
              onPrint?.(order);
              onClose();
            }}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-wk-gold text-wk-dark-maroon font-bold rounded-2xl hover:bg-amber-400 transition shadow-sm"
          >
            <Printer className="w-5 h-5" /> Cetak Struk
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-3.5 bg-wk-maroon text-white font-bold rounded-2xl hover:bg-wk-dark-maroon transition shadow-md"
          >
            Terima Pesanan ✋
          </button>
        </div>
      </div>
    </div>
  );
}
