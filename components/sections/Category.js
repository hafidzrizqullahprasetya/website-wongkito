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
    accent: "from-amber-500/10 to-transparent",
  },
  {
    icon: Fish,
    label: "Kapal Selam",
    count: "Telur Bebek Utuh",
    href: "#menu",
    desc: "Ikon kuliner Palembang dengan telur bebek utuh gurih.",
    span: "col-span-1 md:col-span-1",
    accent: "from-wk-maroon/10 to-transparent",
  },
  {
    icon: Utensils,
    label: "Lenjer & Adaan",
    count: "Menu Klasik",
    href: "#menu",
    desc: "Wangi daun bawang, kenyal sempurna dan gurih alami.",
    span: "col-span-1 md:col-span-1",
    accent: "from-amber-500/10 to-transparent",
  },
  {
    icon: Soup,
    label: "Tekwan & Model",
    count: "Kuah Kaldu",
    href: "#menu",
    desc: "Olahan sup hangat kuah udang sedap bertabur sedap malam.",
    span: "col-span-1 md:col-span-2",
    accent: "from-wk-maroon/10 to-transparent",
  },
  {
    icon: Gift,
    label: "Hampers & Frozen",
    count: "Tahan Kirim",
    href: "#menu",
    desc: "Kemasan vakum beku higienis siap kirim ke seluruh kota.",
    span: "col-span-1 md:col-span-1",
    accent: "from-amber-500/10 to-transparent",
  },
  {
    icon: Flame,
    label: "Cuko Kental Asli",
    count: "Gula Batok",
    href: "#menu",
    desc: "Pedas, manis, asam segar tanpa asam cuka kimia.",
    span: "col-span-1 md:col-span-2",
    accent: "from-wk-maroon/10 to-transparent",
  },
];

export default function Category() {
  return (
    <section className="py-24 sm:py-32 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <Badge
              variant="gold"
              className="px-3.5 py-1 text-xs uppercase tracking-widest font-black"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Variasi Menu Autentik
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-wk-dark-maroon tracking-tight uppercase">
              Kategori Pempek Pilihan
            </h2>
          </div>
          <p className="text-sm text-slate-500 font-medium max-w-md">
            Setiap kategori dibuat dengan takaran bumbu pas dan ikan tenggiri
            murni tanpa campuran berlebih.
          </p>
        </div>

        {/* Gapless Bento Grid with dense auto-flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 grid-flow-dense">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Link
                key={i}
                href={cat.href}
                className={`group block ${cat.span}`}
              >
                <Card
                  className={`p-6 sm:p-8 rounded-3xl border border-slate-200/80 bg-gradient-to-br ${cat.accent} hover:border-wk-gold hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between`}
                >
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-wk-maroon group-hover:bg-wk-maroon group-hover:text-wk-gold transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-black text-wk-dark-maroon bg-wk-gold/40 border border-wk-gold/60 px-3 py-1 rounded-full uppercase tracking-wider">
                      {cat.count}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-wk-maroon transition-colors uppercase">
                        {cat.label}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-wk-maroon group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
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
