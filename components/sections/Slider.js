"use client";

import Link from "next/link";
import {
  ShoppingBag,
  ArrowRight,
  Award,
  Flame,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Slider() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-wk-dark-maroon via-wk-maroon to-[#4a0d0d] text-white py-24 sm:py-32 lg:py-40">
      {/* Background Radial Glow & Ambient Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.15)_0,transparent_70%)] pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-wk-gold/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-black/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Floating Badge */}
        <div className="inline-flex items-center justify-center mb-6">
          <Badge
            variant="gold"
            className="px-4 py-1.5 text-xs font-black uppercase tracking-widest shadow-xl border border-amber-300/40 animate-in fade-in slide-in-from-bottom-3 duration-700"
          >
            <Flame className="w-3.5 h-3.5 mr-1.5 text-wk-dark-maroon fill-wk-dark-maroon" />{" "}
            100% Ikan Tenggiri Asli Palembang
          </Badge>
        </div>

        {/* H1 Headline — 2-Line Iron Rule with Ultra-wide container */}
        <div className="max-w-5xl mx-auto w-full mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[1.05] tracking-tight uppercase">
            Pempek Autentik Gurih, <br className="hidden sm:inline" />
            <span className="text-wk-gold italic font-dancing normal-case text-5xl sm:text-7xl md:text-8xl font-normal mx-2">
              Cuko Kental
            </span>
            Warisan Asli
          </h1>
        </div>

        {/* Subtitle Paragraph */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-wk-beige/90 font-medium leading-relaxed mb-10">
          Dibuat tanpa bahan pengawet dengan cuko kental gula batok asli
          Linggau. Siap santap hangat di Maguwoharjo, vakum frozen antar kota,
          atau pesan cepat di ShopeeFood &amp; GoFood.
        </p>

        {/* Dual High-Contrast Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Button
            asChild
            size="lg"
            variant="gold"
            className="rounded-2xl font-black text-sm px-8 py-4 shadow-2xl gap-2 hover:scale-105 transition-transform"
          >
            <Link href="#menu">
              <ShoppingBag className="w-5 h-5" /> Pesan Menu Sekarang
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-2xl bg-white/10 hover:bg-white/20 text-white border-white/25 font-bold text-sm px-8 py-4 gap-2"
          >
            <Link href="/dashboard">
              Order Hub Dashboard{" "}
              <ArrowRight className="w-4 h-4 text-wk-gold" />
            </Link>
          </Button>
        </div>

        {/* Cinematic Visual Showcase Image Banner */}
        <div className="max-w-4xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-wk-gold to-amber-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-700" />
          <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black/60 aspect-[16/9] sm:aspect-[21/9]">
            <img
              src="https://placehold.co/1200x600/3d0e0e/FFB800?text=Pempek+Asli+Wong+Kito+Maguwoharjo"
              alt="Pempek Asli Wong Kito"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-wk-dark-maroon/90 via-transparent to-transparent flex items-end p-6 sm:p-8">
              <div className="text-left">
                <span className="text-xs font-black text-wk-gold uppercase tracking-widest block mb-1">
                  Outlet Resmi
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Jalan Gondangan Blok C No. 5, Maguwoharjo, Sleman
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Row */}
        <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-wk-beige/80 text-xs font-bold uppercase tracking-wider">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-wk-gold" /> 100% Halal &amp;
            Alami
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-wk-gold" /> Tanpa Pengawet
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-wk-gold" /> Kemasan Vakum
            Higienis
          </div>
        </div>
      </div>
    </section>
  );
}
