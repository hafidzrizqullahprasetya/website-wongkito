import Link from "next/link";
import {
  Package,
  Utensils,
  Soup,
  Gift,
  Fish,
  Flame,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const categories = [
  {
    icon: Package,
    label: "Paket Komplit",
    count: "6 Pilihan",
    href: "#menu",
    desc: "Paket hemat campur untuk makan sendiri atau ramai-ramai.",
    span: "col-span-1 md:col-span-2",
  },
  {
    icon: Fish,
    label: "Kapal Selam",
    count: "Telur Bebek Utuh",
    href: "#menu",
    desc: "Ikon kuliner Palembang dengan telur bebek utuh gurih.",
    span: "col-span-1 md:col-span-1",
  },
  {
    icon: Utensils,
    label: "Lenjer & Adaan",
    count: "Menu Klasik",
    href: "#menu",
    desc: "Wangi daun bawang, kenyal sempurna dan gurih alami.",
    span: "col-span-1 md:col-span-1",
  },
  {
    icon: Soup,
    label: "Tekwan & Model",
    count: "Kuah Kaldu",
    href: "#menu",
    desc: "Olahan sup hangat kuah udang sedap bertabur sedap malam.",
    span: "col-span-1 md:col-span-2",
  },
  {
    icon: Gift,
    label: "Hampers & Frozen",
    count: "Tahan Kirim",
    href: "#menu",
    desc: "Kemasan vakum beku higienis siap kirim ke seluruh kota.",
    span: "col-span-1 md:col-span-1",
  },
  {
    icon: Flame,
    label: "Cuko Kental Asli",
    count: "Gula Batok",
    href: "#menu",
    desc: "Pedas, manis, asam segar tanpa cuka kimia buatan.",
    span: "col-span-1 md:col-span-2",
  },
];

export default function Category() {
  return (
    <section className="py-16 sm:py-20 bg-[#FDFBF7] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <Badge
              variant="gold"
              className="px-3.5 py-1 text-xs uppercase tracking-widest font-black"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Variasi Menu Autentik
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-wk-dark-maroon tracking-tight uppercase">
              Kategori Pempek Pilihan
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-md">
            Dibuat dari ikan tenggiri segar dengan takaran bumbu pas tanpa
            pengawet.
          </p>
        </div>

        {/* Gapless Bento Grid: Clean White Cards with Refined Border */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 grid-flow-dense">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Link
                key={i}
                href={cat.href}
                className={`group block ${cat.span}`}
              >
                <Card className="p-6 rounded-2xl border-slate-200/80 bg-white hover:border-wk-gold hover:shadow-md transition-all duration-200 h-full flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/40 flex items-center justify-center text-wk-maroon group-hover:bg-wk-maroon group-hover:text-wk-gold transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-black text-wk-dark-maroon bg-amber-100/70 border border-amber-300/60 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {cat.count}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base font-black text-slate-900 group-hover:text-wk-maroon transition-colors uppercase">
                        {cat.label}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-wk-maroon transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
