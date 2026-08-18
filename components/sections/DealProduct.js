import Link from "next/link";
import { Flame, Clock, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Countdown from "../elements/CountDown";

export default function DealProduct() {
  const endDateTime = new Date();
  endDateTime.setDate(endDateTime.getDate() + 2);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="rounded-3xl bg-gradient-to-br from-wk-dark-maroon to-wk-maroon text-white overflow-hidden border border-wk-gold/25 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            {/* Left Column: Visual Thumbnail */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative max-w-xs sm:max-w-sm w-full">
                <img
                  src="https://placehold.co/600x600/3d0e0e/FFB800?text=Paket+Spesial+Ampera"
                  alt="Paket Spesial Pempek"
                  className="w-full aspect-square rounded-2xl object-cover border border-white/15 shadow-md"
                />
                <div className="absolute -bottom-3 -right-3 bg-wk-gold px-4 py-2 rounded-xl border-2 border-wk-maroon shadow-md">
                  <span className="block text-[9px] font-black text-wk-dark-maroon uppercase tracking-wider">
                    Hemat 25%
                  </span>
                  <span className="block text-lg font-black text-wk-dark-maroon font-mono leading-none">
                    Rp 49.000
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Deal Details */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div>
                <Badge
                  variant="gold"
                  className="px-3 py-1 text-xs font-black uppercase tracking-widest"
                >
                  <Flame className="w-3.5 h-3.5 mr-1" /> Promo Terbatas Minggu
                  Ini
                </Badge>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                Paket Ampera Porsi Jumbo <br />
                <span className="text-wk-gold italic font-dancing normal-case text-3xl sm:text-4xl">
                  Isi 20 Biji Mix Komplit
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-wk-beige/90 leading-relaxed max-w-xl">
                Kombinasi lengkap Kapal Selam Mini, Lenjer Gurih, Adaan Bawang,
                dan Pempek Kulit Renyah plus 2 botol cuko kental pedas manis.
                Fresh digoreng atau vakum frozen siap simpan.
              </p>

              {/* Countdown Timer */}
              <div className="p-3.5 rounded-xl bg-black/20 border border-white/10 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-bold text-wk-gold uppercase tracking-wider mb-2.5">
                  <Clock className="w-3.5 h-3.5" /> Berakhir Dalam:
                </div>
                <Countdown endDateTime={endDateTime.getTime()} dark />
              </div>

              {/* CTA Action */}
              <div className="pt-2">
                <Button
                  asChild
                  size="lg"
                  variant="gold"
                  className="rounded-xl font-black gap-2 shadow-md"
                >
                  <Link href="#menu">
                    <ShoppingBag className="w-4 h-4" /> Klaim Promo Sekarang
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
