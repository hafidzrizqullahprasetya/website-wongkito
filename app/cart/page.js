'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useSelector } from "react-redux"
import CartItems from "@/components/elements/CartItems"

const formatRupiah = (num) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(num)

export default function Cart() {
    const { cart } = useSelector((state) => state.shop) || {}

    const total = cart?.reduce((sum, item) => sum + item.qty * item.price?.max, 0) ?? 0
    const isEmpty = !cart || cart.length === 0

    return (
        <Layout breadcrumbTitle="Keranjang">
            <section className="py-14 bg-gray-50">
                <div className="container mx-auto px-4">

                    {isEmpty ? (
                        /* ── Empty State ── */
                        <div className="flex flex-col items-center justify-center py-24 text-center">
                            <div className="w-20 h-20 rounded-full !bg-wk-maroon/5 flex items-center justify-center mb-6">
                                <i className="fal fa-shopping-basket text-3xl !text-wk-maroon/40" />
                            </div>
                            <h2 className="text-xl font-black !text-wk-dark-maroon mb-2 uppercase tracking-tight">Keranjang Kosong</h2>
                            <p className="text-sm !text-gray-400 mb-8">Belum ada produk yang ditambahkan ke keranjang.</p>
                            <Link href="/shop" className="inline-flex items-center gap-2 px-8 py-3 !bg-wk-maroon !text-white font-black text-xs uppercase tracking-widest rounded-xl hover:opacity-80 transition-opacity">
                                Belanja Sekarang
                                <i className="fal fa-long-arrow-right" />
                            </Link>
                        </div>
                    ) : (
                        <div className="flex flex-col xl:flex-row gap-8">

                            {/* ── Cart Table ── */}
                            <div className="flex-1">
                                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                                    {/* Table header */}
                                    <div className="hidden md:grid grid-cols-[80px_1fr_120px_120px_120px_60px] gap-4 px-6 py-4 border-b border-gray-100">
                                        {['Foto', 'Produk', 'Harga Satuan', 'Jumlah', 'Total', ''].map((h, i) => (
                                            <span key={i} className="text-[10px] font-black !text-wk-dark-maroon uppercase tracking-widest">
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                    {/* Items */}
                                    <CartItems />
                                </div>

                                {/* Coupon + Update row */}
                                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                                    <div className="flex flex-1 overflow-hidden rounded-xl border border-gray-200 bg-white">
                                        <input
                                            type="text"
                                            placeholder="Kode kupon…"
                                            className="flex-1 px-4 py-3 text-sm !text-wk-dark-maroon placeholder:text-gray-300 outline-none"
                                        />
                                        <button className="px-5 py-3 !bg-wk-dark-maroon !text-white font-black text-xs uppercase tracking-widest hover:opacity-80 transition-opacity">
                                            Pakai
                                        </button>
                                    </div>
                                    <button className="px-6 py-3 border border-gray-200 !bg-white !text-wk-dark-maroon font-black text-xs uppercase tracking-widest rounded-xl hover:opacity-70 transition-opacity">
                                        Perbarui Keranjang
                                    </button>
                                </div>
                            </div>

                            {/* ── Order Summary ── */}
                            <div className="xl:w-80 flex-shrink-0">
                                <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-24">
                                    <h3 className="text-sm font-black !text-wk-dark-maroon uppercase tracking-widest mb-6">
                                        Ringkasan Pesanan
                                    </h3>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex justify-between text-sm">
                                            <span className="!text-gray-400 font-medium">Subtotal</span>
                                            <span className="font-bold !text-wk-dark-maroon">{formatRupiah(total)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="!text-gray-400 font-medium">Ongkos kirim</span>
                                            <span className="font-bold !text-green-600">Gratis</span>
                                        </div>
                                        <div className="h-px !bg-gray-100" />
                                        <div className="flex justify-between">
                                            <span className="font-black !text-wk-dark-maroon">Total</span>
                                            <span className="text-xl font-black !text-wk-maroon">{formatRupiah(total)}</span>
                                        </div>
                                    </div>

                                    <Link
                                        href="/checkout"
                                        className="w-full flex items-center justify-center gap-2 py-4 !bg-wk-maroon !text-white font-black text-xs uppercase tracking-widest rounded-xl hover:opacity-80 transition-opacity"
                                    >
                                        Lanjut ke Checkout
                                        <i className="fal fa-long-arrow-right" />
                                    </Link>

                                    <Link href="/shop" className="flex items-center justify-center gap-2 mt-3 text-xs font-bold !text-gray-400 hover:opacity-70 transition-opacity">
                                        <i className="fal fa-long-arrow-left" />
                                        Lanjut Belanja
                                    </Link>
                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </section>
        </Layout>
    )
}