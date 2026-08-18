"use client";

import {
  X,
  Trash2,
  ShoppingBasket,
  ShoppingBag,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "@/features/shopSlice";
import { Button } from "@/components/ui/button";

export default function HeaderCart({ isCartSidebar, handleCartSidebar }) {
  const { cart } = useSelector((state) => state.shop) || {};
  const dispatch = useDispatch();

  const deleteCartHandler = (id) => {
    dispatch(deleteCart(id));
  };

  let total = 0;
  cart?.forEach((item) => {
    const price = (item.qty || 1) * (item.price?.max || 15000);
    total = total + price;
  });

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[1000] shadow-2xl transition-transform duration-300 ease-in-out transform ${
          isCartSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full bg-white border-l border-slate-100 font-jakarta">
          {/* Header Sidebar */}
          <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-amber-50/50">
            <div>
              <h4 className="text-lg font-black text-wk-dark-maroon">
                Keranjang Belanja
              </h4>
              <p className="text-xs text-slate-500 font-medium">
                {cart?.length || 0} item terpilih
              </p>
            </div>
            <button
              className="p-2 rounded-xl text-slate-400 hover:text-wk-maroon hover:bg-white transition"
              onClick={handleCartSidebar}
              aria-label="Tutup Keranjang"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List Produk */}
          <div className="flex-grow overflow-y-auto p-6 space-y-4">
            {cart?.length > 0 ? (
              <ul className="space-y-3">
                {cart?.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start bg-slate-50 p-3.5 rounded-2xl border border-slate-200/70 relative group"
                  >
                    <div className="w-16 h-16 flex-shrink-0 bg-white rounded-xl border border-slate-200/80 overflow-hidden">
                      <img
                        src={`https://placehold.co/200x200/3d0e0e/FFB800?text=${item.title ? item.title.replace(/ /g, "+") : "Item"}`}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-3 flex-grow pr-6">
                      <h5 className="text-xs font-bold text-slate-900 line-clamp-2 leading-snug">
                        {item.title}
                      </h5>
                      <div className="flex items-center text-xs font-semibold text-slate-500 mt-1.5">
                        <span className="bg-amber-100 text-wk-dark-maroon px-2 py-0.5 rounded-md font-bold mr-2 text-[10px]">
                          {item?.qty || 1}×
                        </span>
                        <span className="text-wk-maroon font-black font-mono">
                          Rp{" "}
                          {(
                            (item?.price?.max || 15000) * (item?.qty || 1)
                          ).toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteCartHandler(item?.id)}
                      className="absolute top-3 right-3 text-slate-300 hover:text-rose-600 transition"
                      title="Hapus"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center py-20 text-slate-400">
                <ShoppingBasket className="w-12 h-12 mb-3 text-slate-300" />
                <p className="font-bold text-slate-700 text-sm">
                  Keranjang masih kosong
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Pilih menu favorit Anda di katalog
                </p>
              </div>
            )}
          </div>

          {/* Footer Sidebar */}
          <div className="p-6 bg-slate-50 border-t border-slate-100 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Total Pembayaran
              </span>
              <span className="text-xl font-black text-wk-maroon font-mono">
                Rp {total.toLocaleString()}
              </span>
            </div>

            <div className="space-y-2">
              <Button
                asChild
                variant="gold"
                className="w-full font-black rounded-xl gap-2 shadow-sm"
                onClick={handleCartSidebar}
              >
                <Link href="/checkout">
                  <CheckCircle2 className="w-4 h-4" /> Checkout Sekarang
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full font-bold rounded-xl border-slate-200 bg-white"
                onClick={handleCartSidebar}
              >
                <Link href="/cart">Lihat Keranjang Lengkap</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay Gelap */}
      {isCartSidebar && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-[999] transition-opacity"
          onClick={handleCartSidebar}
        />
      )}
    </>
  );
}
