"use client";

import { Flame, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PLATFORM_CONFIG, fmtIDR } from "./config";

export default function OrderModal({ order, onClose, onPrint }) {
  if (!order) return null;
  const platform = PLATFORM_CONFIG[order.platform] || PLATFORM_CONFIG.offline;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xl animate-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="bg-wk-dark-maroon p-5 text-white text-center border-b border-wk-gold/20">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-wk-gold text-wk-dark-maroon mb-2 shadow-sm">
            <Flame className="w-6 h-6 fill-wk-dark-maroon" />
          </div>
          <h2 className="text-xl font-black tracking-tight text-white uppercase">
            PESANAN BARU MASUK
          </h2>
          <p className="text-wk-beige/90 text-xs font-medium mt-0.5">
            {platform.label} • #{order.external_id}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 space-y-3.5">
          <div className="bg-amber-50/70 rounded-xl p-3.5 border border-amber-200/60 flex justify-between items-center">
            <div>
              <span className="text-[10px] font-bold text-amber-900 uppercase tracking-wider">
                Pemesan
              </span>
              <p className="text-sm font-bold text-slate-900">
                {order.customer_name || "Pelanggan Online"}
              </p>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-amber-900 uppercase tracking-wider">
                Total
              </span>
              <p className="text-lg font-black text-wk-maroon font-mono">
                {fmtIDR(order.total)}
              </p>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              Rincian Menu:
            </p>
            <div className="divide-y divide-slate-100 max-h-48 overflow-y-auto pr-1">
              {order.items?.map((it, idx) => (
                <div
                  key={idx}
                  className="py-1.5 flex justify-between items-center text-xs sm:text-sm"
                >
                  <span className="font-semibold text-slate-800">
                    <span className="text-wk-maroon font-bold mr-1.5">
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
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-2.5">
          <Button
            variant="gold"
            onClick={() => {
              onPrint?.(order);
              onClose();
            }}
            className="flex-1 rounded-xl font-bold text-xs gap-1.5"
          >
            <Printer className="w-4 h-4" /> Cetak Struk
          </Button>
          <Button
            variant="default"
            onClick={onClose}
            className="flex-1 rounded-xl font-bold text-xs bg-wk-maroon hover:bg-wk-dark-maroon"
          >
            Terima Pesanan
          </Button>
        </div>
      </div>
    </div>
  );
}
