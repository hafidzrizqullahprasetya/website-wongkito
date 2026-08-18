import Link from "next/link";
import { Flame, Clock, ShoppingBag, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Countdown from "../elements/CountDown";

export default function DealProduct() {
  const endDateTime = new Date();
  endDateTime.setDate(endDateTime.getDate() + 2);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="rounded-3xl bg-gradient-to-br from-wk-dark-maroon via-wk-maroon to-[#4a0d0d] text-white overflow-hidden border-2 border-wk-gold/20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-16">
            {/* Left Column: Visual & Pricing Badge */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative">
                <div className="absolute inset-0 bg-wk-gold/10 rounded-full blur-2xl pointer-events-none" />
                <img
                  src="https://placehold.co/600x600/3d0e0e/FFB800?text=Paket+Spesial+Ampera"
                  alt="Paket Spesial Pempek"
                  className="w-64 sm:w-80 lg:w-96 rounded-3xl object-cover relative z-10 shadow-2xl border border-white/10"
                />
                <div className="absolute -bottom-4 -right-4 bg-wk-gold px-5 py-3 rounded-2xl border-4 border-wk-maroon shadow-lg z-20">
                  <span className="block text-[10px] font-black text-wk-dark-maroon uppercase tracking-wider">
                    Hemat 25%
                  </span>
                  <span className="block text-xl font-black text-wk-dark-maroon font-mono">
                    Rp 49.000
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Deal Details & Call to Action */}
            <div className="lg:col-span-7 space-y-6">
              <Badge
                variant="gold"
                className="px-3.5 py-1 text-xs font-black uppercase tracking-widest"
              >
                <Flame className="w-3.5 h-3.5 mr-1" /> Promo Terbatas Minggu Ini
              </Badge>

              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                Paket Ampera Porsi Jumbo <br />
                <span className="text-wk-gold italic">
                  Isi 20 Biji Mix Komplit
                </span>
              </h2>

              <p className="text-sm sm:text-base text-wk-beige/90 leading-relaxed max-w-xl">
                Kombinasi lengkap Kapal Selam Mini, Lenjer Gurih, Adaan Bawang,
                dan Pempek Kulit Renyah plus 2 botol cuko kental pedas manis.
                Fresh digoreng atau vakum frozen siap simpan.
              </p>

              {/* Countdown Timer */}
              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 max-w-md">
                <div className="flex items-center gap-2 text-xs font-bold text-wk-gold uppercase tracking-wider mb-3">
                  <Clock className="w-4 h-4" /> Berakhir Dalam:
                </div>
                <Countdown endDateTime={endDateTime.getTime()} dark />
              </div>

              {/* CTA Action */}
              <div className="pt-2">
                <Button
                  asChild
                  size="lg"
                  variant="gold"
                  className="rounded-2xl font-black gap-2 shadow-xl"
                >
                  <Link href="#menu">
                    <ShoppingBag className="w-5 h-5" /> Klaim Promo Sekarang
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
