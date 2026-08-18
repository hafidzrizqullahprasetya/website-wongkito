"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, Flame, Sparkles, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPromo = sessionStorage.getItem("hasSeenPromo");
    if (!hasSeenPromo) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenPromo", "true");
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Container: Flat, Clean, Restrained */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-2xl flex flex-col md:flex-row z-10 animate-fadeInUp">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-50 w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-wk-maroon hover:text-white transition shadow-sm"
          aria-label="Tutup Promo"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LEFT: Image */}
        <div className="md:w-1/2 relative h-56 md:h-auto overflow-hidden bg-wk-dark-maroon">
          <img
            src="https://placehold.co/800x1000/3d0e0e/FFB800?text=PROMO+WONG+KITO"
            alt="Promo Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wk-dark-maroon/80 to-transparent md:hidden" />
        </div>

        {/* RIGHT: Content Section */}
        <div className="md:w-1/2 p-6 sm:p-10 flex flex-col justify-center text-center md:text-left">
          <div className="mb-4">
            <Badge
              variant="gold"
              className="px-3 py-1 text-[11px] font-black uppercase tracking-widest"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1" /> Penawaran Terbatas
            </Badge>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-wk-dark-maroon leading-tight mb-3 uppercase tracking-tight">
            Paket Kebaikan <br />
            <span className="text-wk-gold font-dancing italic normal-case text-3xl sm:text-4xl">
              Hampers Keluarga
            </span>
          </h2>

          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Diskon Khusus
            </span>
            <span className="px-2.5 py-0.5 bg-wk-maroon text-wk-gold text-sm font-black rounded-md font-mono">
              25% OFF
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-6">
            Nikmati momen spesial bersama keluarga dengan paket komplit Pempek
            Wong Kito. 100% ikan tenggiri asli dengan cuko kental autentik.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2.5">
            <Button
              asChild
              variant="gold"
              className="rounded-xl font-black gap-2 shadow-sm flex-1"
              onClick={() => setIsOpen(false)}
            >
              <Link href="#menu">
                <ShoppingBag className="w-4 h-4" /> Pesan Promo
              </Link>
            </Button>
            <Button
              variant="outline"
              className="rounded-xl font-bold border-slate-200 flex-1"
              onClick={() => setIsOpen(false)}
            >
              Nanti Saja
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
