"use client";

import { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {
  ShoppingBasket,
  Heart,
  Star,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import products from "@/data/products";
import { addCart } from "@/features/shopSlice";
import { addWishlist } from "@/features/wishlistSlice";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const formatRupiah = (num) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(num || 0);

const tabs = [
  { id: "all", label: "Semua Menu" },
  { id: "paket", label: "Paket Komplit" },
  { id: "satuan", label: "Beli Satuan" },
  { id: "kuah", label: "Tekwan & Model" },
];

export default function Product() {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addCart({ product: item }));
  };

  const addToWishlist = (item) => {
    dispatch(addWishlist({ product: item }));
  };

  // Filter produk berdasarkan tab kategori
  const filteredProducts = products.filter((item) => {
    if (activeTab === "all") return true;
    const titleLower = (item.title || "").toLowerCase();
    if (activeTab === "paket") return titleLower.includes("paket");
    if (activeTab === "satuan")
      return (
        !titleLower.includes("paket") &&
        !titleLower.includes("tekwan") &&
        !titleLower.includes("model")
      );
    if (activeTab === "kuah")
      return titleLower.includes("tekwan") || titleLower.includes("model");
    return true;
  });

  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const currentItems = filteredProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setCurrentPage(1);
  };

  return (
    <section className="py-16 md:py-24 bg-[#FDFBF7] overflow-hidden" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row: Title & Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="space-y-3 text-center lg:text-left">
            <Badge
              variant="gold"
              className="px-3.5 py-1 text-xs uppercase tracking-widest font-black"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Pilihan Autentik
              Palembang
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-wk-dark-maroon tracking-tight uppercase">
              Menu Terpopuler
            </h2>
            <p className="text-sm text-slate-500 font-medium max-w-xl">
              Dibuat dari 100% ikan tenggiri segar pilihan dengan resep warisan
              asli Palembang dan cuko kental khas Wong Kito.
            </p>
          </div>

          {/* Tab Filter Category */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <Button
                  key={tab.id}
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleTabChange(tab.id)}
                  className={`rounded-full px-5 py-2 text-xs uppercase tracking-wider font-extrabold transition-all ${
                    isActive
                      ? "bg-wk-maroon text-white shadow-md"
                      : "bg-white text-wk-dark-maroon border-slate-200 hover:border-wk-gold/60"
                  }`}
                >
                  {tab.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Product Grid — Proper Balanced Responsive CSS Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {currentItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden rounded-3xl border-slate-200/80 hover:border-wk-gold/50 hover:shadow-xl transition-all duration-300 flex flex-col bg-white"
            >
              {/* Product Thumbnail Container */}
              <div className="relative aspect-square overflow-hidden bg-slate-50 border-b border-slate-100 flex-shrink-0">
                <img
                  src={`https://placehold.co/600x600/3d0e0e/FFB800?text=${item.title ? item.title.replace(/ /g, "+") : "Pempek"}`}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Floating Quick Action Buttons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 z-20">
                  <Button
                    size="icon"
                    variant="default"
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(item);
                    }}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full shadow-lg bg-wk-maroon hover:bg-wk-dark-maroon text-white"
                    title="Tambah ke Keranjang"
                  >
                    <ShoppingBasket className="w-4 h-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={(e) => {
                      e.preventDefault();
                      addToWishlist(item);
                    }}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full shadow-md bg-white hover:bg-slate-50 text-wk-maroon border-slate-200"
                    title="Favoritkan"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <CardContent className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    {item.category?.[0]?.type || "Pempek Asli"}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-wk-maroon transition-colors">
                    <Link href={`/shop/${item.id}`}>{item.title}</Link>
                  </h3>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-base sm:text-lg font-black text-wk-maroon font-mono">
                    {formatRupiah(item.price?.max || item.price?.min || 15000)}
                  </span>
                  <div className="flex items-center gap-1 text-wk-gold text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-wk-gold text-wk-gold" />
                    <span className="text-slate-700 text-xs">4.9</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {currentItems.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
            <p className="font-bold text-slate-700 text-base">
              Menu tidak ditemukan untuk kategori ini
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveTab("all")}
              className="mt-3"
            >
              Lihat Semua Menu
            </Button>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <Button
              variant="outline"
              size="icon"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className="rounded-full w-10 h-10 border-slate-200"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="icon"
                onClick={() => setCurrentPage(page)}
                className={`rounded-full w-10 h-10 text-xs font-bold ${
                  currentPage === page
                    ? "bg-wk-maroon text-white shadow-sm"
                    : "border-slate-200"
                }`}
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              className="rounded-full w-10 h-10 border-slate-200"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
