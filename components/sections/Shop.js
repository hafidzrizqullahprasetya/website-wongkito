"use client";

import { Instagram, ArrowUpRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const photos = [
  "https://placehold.co/600x600/3d0e0e/FFB800?text=Goreng+Hangat+1",
  "https://placehold.co/600x600/3d0e0e/FFB800?text=Cuko+Kental+2",
  "https://placehold.co/600x600/3d0e0e/FFB800?text=Tekwan+Segar+3",
  "https://placehold.co/600x600/3d0e0e/FFB800?text=Vakum+Frozen+4",
  "https://placehold.co/600x600/3d0e0e/FFB800?text=Dine+In+5",
  "https://placehold.co/600x600/3d0e0e/FFB800?text=Keluarga+6",
];

export default function Shop() {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge
            variant="gold"
            className="px-3.5 py-1 text-xs uppercase tracking-widest font-black mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Cerita &amp; Suasana
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-black text-wk-dark-maroon tracking-tight uppercase flex items-center justify-center gap-2">
            <Instagram className="w-7 h-7 text-wk-maroon" /> @pempek.wongkito
          </h2>
          <p className="text-sm text-slate-500 font-medium mt-2">
            Ikuti Instagram kami untuk update promo harian, testimoni pelanggan,
            dan menu spesial musiman.
          </p>
        </div>

        {/* Instagram Photos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {photos.map((src, i) => (
            <a
              key={i}
              href="https://instagram.com/pempek.wongkito"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square rounded-2xl overflow-hidden border border-slate-100 shadow-sm"
            >
              <img
                src={src}
                alt={`Wong Kito Instagram ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-wk-dark-maroon/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                <Instagram className="w-8 h-8 text-wk-gold" />
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA link */}
        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            className="rounded-full px-6 py-2.5 font-bold gap-2 text-xs uppercase tracking-wider text-wk-maroon border-wk-maroon/30 hover:bg-wk-maroon hover:text-white transition"
          >
            <a
              href="https://instagram.com/pempek.wongkito"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow Instagram Kami <ArrowUpRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
