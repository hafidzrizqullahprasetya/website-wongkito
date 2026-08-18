"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ShoppingBasket,
  Heart,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import CartShow from "@/components/elements/CartShow";
import WishListShow from "@/components/elements/WishListShow";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Header({ handleMobileMenu, handleCartSidebar }) {
  return (
    <header className="sticky top-0 z-[900] bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300">
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-wk-dark-maroon via-wk-maroon to-[#521010] text-white py-2 px-4 border-b border-wk-gold/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 font-semibold text-wk-beige/90">
            <span className="w-2 h-2 rounded-full bg-wk-gold animate-ping" />
            <span>
              Gratis Ongkir area Sleman &amp; Yogyakarta untuk pemesanan via
              WhatsApp (min. Rp 75.000)
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="text-wk-gold hover:underline font-extrabold flex items-center gap-1 uppercase tracking-wider text-[11px]"
            >
              Order Hub Dashboard <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/assets/img/logo/logo.png"
              alt="Pempek Asli Wong Kito"
              className="max-h-12 sm:max-h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-wk-dark-maroon font-black text-lg sm:text-xl leading-[1.05] tracking-tight uppercase">
                Pempek{" "}
                <span className="font-dancing text-wk-gold italic text-2xl mx-0.5 capitalize">
                  &quot;Asli&quot;
                </span>{" "}
                Wong Kito
              </span>
              <span className="text-[10px] font-extrabold text-wk-maroon/70 uppercase tracking-widest">
                Cita Rasa Khas Palembang
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 font-extrabold text-sm text-slate-800">
            <Link
              href="/"
              className="text-wk-maroon hover:text-wk-dark-maroon transition"
            >
              Beranda
            </Link>
            <Link href="#menu" className="hover:text-wk-maroon transition">
              Katalog Menu
            </Link>
            <Link href="/about" className="hover:text-wk-maroon transition">
              Tentang Kami
            </Link>
            <Link
              href="/shop-location"
              className="hover:text-wk-maroon transition"
            >
              Lokasi Outlet
            </Link>
            <Link href="/contact" className="hover:text-wk-maroon transition">
              Hubungi Kami
            </Link>
          </nav>

          {/* Action Buttons (Cart, Wishlist, Order CTA) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="p-2.5 rounded-2xl hover:bg-slate-100 text-slate-700 transition relative"
              title="Favorit"
            >
              <Heart className="w-5 h-5 text-wk-maroon" />
              <span className="absolute -top-1 -right-1 bg-wk-gold text-wk-dark-maroon text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-white">
                <WishListShow />
              </span>
            </Link>

            {/* Cart Trigger */}
            <button
              onClick={handleCartSidebar}
              className="p-2.5 rounded-2xl hover:bg-slate-100 text-slate-700 transition relative"
              title="Keranjang Belanja"
            >
              <ShoppingBasket className="w-5 h-5 text-wk-maroon" />
              <span className="absolute -top-1 -right-1 bg-wk-maroon text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-white">
                <CartShow />
              </span>
            </button>

            {/* Primary Order CTA Button */}
            <Button
              asChild
              variant="default"
              className="hidden sm:inline-flex rounded-2xl font-black gap-2 shadow-md"
            >
              <Link href="#menu">
                <ShoppingBasket className="w-4 h-4 text-wk-gold" /> Pesan
                Sekarang
              </Link>
            </Button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={handleMobileMenu}
              className="p-2.5 rounded-2xl text-wk-dark-maroon hover:bg-slate-100 lg:hidden transition"
              aria-label="Toggle Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
