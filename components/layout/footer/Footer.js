import Link from "next/link";
import {
  MapPin,
  Phone,
  Instagram,
  ArrowUpRight,
  Sparkles,
  Heart,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const menuLinks = [
  { label: "Paket Komplit", href: "/#menu" },
  { label: "Pempek Kapal Selam", href: "/#menu" },
  { label: "Tekwan & Model Tahu", href: "/#menu" },
  { label: "Paket Ampera & Musi", href: "/#menu" },
  { label: "Cuko Kental Botol", href: "/#menu" },
];

const infoLinks = [
  { label: "Tentang Wong Kito", href: "/about" },
  { label: "Lokasi Outlet Maguwoharjo", href: "/shop-location" },
  { label: "Order Hub Kasir & Dapur", href: "/dashboard" },
  { label: "Hubungi WhatsApp", href: "https://wa.me/6285603718308" },
  { label: "FAQ & Pengiriman", href: "/faq" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-wk-dark-maroon to-[#2b0808] text-white font-jakarta overflow-hidden border-t-2 border-wk-gold/20">
      {/* Top CTA Banner */}
      <div className="border-b border-white/10 bg-black/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <Badge
              variant="gold"
              className="px-3.5 py-1 text-xs uppercase tracking-widest font-black mb-2"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1" /> Siap Melayani Pesanan
              Anda
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Ingin Pesan Untuk Acara, Kantor, Atau Luar Kota?
            </h3>
            <p className="text-xs sm:text-sm text-wk-beige/80 mt-1">
              Melayani pesanan paket besar, hampers hajatan, dan kirim frozen
              vakum seluruh pulau Jawa.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            variant="gold"
            className="rounded-2xl font-black text-sm px-7 py-3.5 shadow-xl whitespace-nowrap"
          >
            <a
              href="https://wa.me/6285603718308"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hubungi WhatsApp Toko <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Info (Col 1-2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/assets/img/logo/logo.png"
                alt="Pempek Asli Wong Kito"
                className="max-h-14 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-lg leading-tight uppercase tracking-tight">
                  Pempek{" "}
                  <span className="font-dancing text-wk-gold italic text-2xl mx-0.5">
                    &quot;Asli&quot;
                  </span>{" "}
                  Wong Kito
                </span>
                <span className="text-[10px] font-extrabold text-wk-gold uppercase tracking-widest">
                  Maguwoharjo, Sleman, D.I. Yogyakarta
                </span>
              </div>
            </Link>

            <p className="text-xs text-wk-beige/80 leading-relaxed max-w-sm">
              Menghadirkan kelezatan asli pempek khas Palembang di Yogyakarta.
              Dibuat fresh setiap hari dari ikan tenggiri murni dengan cuko
              kental asam manis pedas yang khas.
            </p>

            <div className="space-y-2 pt-2 text-xs text-wk-beige/90 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-wk-gold flex-shrink-0 mt-0.5" />
                <span>
                  Jalan Gondangan Blok C No. 5, Maguwoharjo, Depok, Sleman, DIY
                  55282
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-wk-gold flex-shrink-0" />
                <span>WhatsApp: +62 856-0371-8308</span>
              </div>
            </div>
          </div>

          {/* Menu Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-wk-gold uppercase tracking-widest">
              Pilihan Menu
            </h4>
            <ul className="space-y-2.5 text-xs text-wk-beige/80">
              {menuLinks.map((m, idx) => (
                <li key={idx}>
                  <Link
                    href={m.href}
                    className="hover:text-wk-gold transition-colors font-medium"
                  >
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-wk-gold uppercase tracking-widest">
              Informasi Outlet
            </h4>
            <ul className="space-y-2.5 text-xs text-wk-beige/80">
              {infoLinks.map((inf, idx) => (
                <li key={idx}>
                  <Link
                    href={inf.href}
                    className="hover:text-wk-gold transition-colors font-medium"
                  >
                    {inf.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours & Delivery */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-wk-gold uppercase tracking-widest">
              Jam Buka &amp; Layanan
            </h4>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs">
              <p className="text-wk-beige/90 font-bold">Setiap Hari:</p>
              <p className="text-wk-gold font-mono font-black text-sm">
                09:00 - 21:00 WIB
              </p>
              <p className="text-slate-400 text-[11px] pt-1 border-t border-white/10">
                Tersedia Dine-in, Takeaway, ShopeeFood, dan GoFood.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-wk-beige/60">
          <p>
            © {new Date().getFullYear()} Pempek Asli Wong Kito. Seluruh hak
            cipta dilindungi.
          </p>
          <p className="flex items-center gap-1 font-medium">
            Dibuat dengan{" "}
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> untuk
            pecinta kuliner nusantara
          </p>
        </div>
      </div>
    </footer>
  );
}
