'use client'
import WishlistItems from "@/components/elements/WishlistItems"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useSelector } from "react-redux"

export default function Wishlist() {
    const { wishlist } = useSelector((state) => state.wishlist) || {}
    const isEmpty = !wishlist || wishlist.length === 0

    return (
        <Layout breadcrumbTitle="Wishlist">
            <section className="py-14 bg-gray-50">
                <div className="container mx-auto px-4">

                    {isEmpty ? (
                        /* ── Empty State ── */
                        <div className="flex flex-col items-center justify-center py-24 text-center">
                            <div className="w-20 h-20 rounded-full !bg-wk-maroon/5 flex items-center justify-center mb-6">
                                <i className="fal fa-heart text-3xl !text-wk-maroon/40" />
                            </div>
                            <h2 className="text-xl font-black !text-wk-dark-maroon mb-2 uppercase tracking-tight">Wishlist Kosong</h2>
                            <p className="text-sm !text-gray-400 mb-8">Belum ada produk yang disimpan ke wishlist.</p>
                            <Link href="/shop" className="inline-flex items-center gap-2 px-8 py-3 !bg-wk-maroon !text-white font-black text-xs uppercase tracking-widest rounded-xl hover:opacity-80 transition-opacity">
                                Jelajahi Produk
                                <i className="fal fa-long-arrow-right" />
                            </Link>
                        </div>
                    ) : (
                        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                            {/* Table header */}
                            <div className="hidden md:grid grid-cols-[80px_1fr_130px_120px_130px_140px_60px] gap-4 px-6 py-4 border-b border-gray-100">
                                {['Foto', 'Produk', 'Harga Satuan', 'Jumlah', 'Total', 'Keranjang', ''].map((h, i) => (
                                    <span key={i} className="text-[10px] font-black !text-wk-dark-maroon uppercase tracking-widest">
                                        {h}
                                    </span>
                                ))}
                            </div>
                            {/* Items */}
                            <WishlistItems />
                        </div>
                    )}

                </div>
            </section>
        </Layout>
    )
}