'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import { useSelector } from "react-redux"

const formatRupiah = (num) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(num)

const inputClass = "w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm !text-wk-dark-maroon placeholder:text-gray-300 focus:border-wk-gold outline-none transition-colors"
const labelClass = "block text-[11px] font-black !text-wk-dark-maroon uppercase tracking-wider mb-1.5"

const paymentMethods = [
    {
        key: 1,
        icon: 'fab fa-whatsapp',
        title: 'Transfer + Konfirmasi WhatsApp',
        desc: 'Transfer ke rekening kami, lalu kirim bukti transfer via WhatsApp ke +62 812-3456-7890. Pesanan akan diproses setelah pembayaran dikonfirmasi.',
    },
    {
        key: 2,
        icon: 'fal fa-university',
        title: 'Transfer Bank (BCA / BRI / Mandiri)',
        desc: 'Transfer ke salah satu rekening berikut:\n• BCA: 1234567890 a.n. Pempek Wong Kito\n• BRI: 0987654321 a.n. Pempek Wong Kito\n• Mandiri: 1122334455 a.n. Pempek Wong Kito',
    },
    {
        key: 3,
        icon: 'fal fa-money-bill-wave',
        title: 'Bayar di Tempat (COD)',
        desc: 'Bayar tunai saat pesanan tiba. Tersedia untuk area Maguwoharjo dan sekitarnya (radius maks. 5 km). Minimum order Rp 50.000.',
    },
]

const deliveryOptions = [
    { value: 'pickup', label: 'Ambil Sendiri ke Toko (Gratis)' },
    { value: 'delivery', label: 'Antar ke Alamat (Gratis area Maguwoharjo)' },
    { value: 'ojol', label: 'Pesan via Ojek Online (ShopeeFood / GrabFood)' },
]

export default function Checkout() {
    const { cart } = useSelector((state) => state.shop) || {}
    const [activePayment, setActivePayment] = useState(1)
    const [showCoupon, setShowCoupon] = useState(false)
    const [shipDifferent, setShipDifferent] = useState(false)

    const total = cart?.reduce((sum, item) => sum + item.qty * item.price?.max, 0) ?? 0

    return (
        <Layout breadcrumbTitle="Checkout">
            <section className="py-14 bg-gray-50">
                <div className="container mx-auto px-4">

                    {/* ── Coupon toggle bar ── */}
                    <div className="bg-white rounded-2xl border border-gray-100 px-6 py-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="flex items-center gap-2 flex-1">
                            <i className="fal fa-tag !text-wk-gold" />
                            <span className="text-sm !text-gray-500">
                                Punya kode kupon?{' '}
                                <button onClick={() => setShowCoupon(!showCoupon)} className="font-black !text-wk-maroon hover:opacity-70 transition-opacity">
                                    Klik untuk memasukkan kode
                                </button>
                            </span>
                        </div>
                        {showCoupon && (
                            <div className="flex gap-2 w-full sm:w-auto">
                                <input type="text" placeholder="Kode kupon" className={`${inputClass} py-2.5`} />
                                <button className="px-5 py-2.5 !bg-wk-maroon !text-white font-black text-xs uppercase tracking-widest rounded-xl hover:opacity-80 transition-opacity whitespace-nowrap">
                                    Pakai
                                </button>
                            </div>
                        )}
                    </div>

                    <form action="#">
                        <div className="flex flex-col lg:flex-row gap-8">

                            {/* ── Left: Billing Details ── */}
                            <div className="flex-1 space-y-6">

                                {/* Billing card */}
                                <div className="bg-white rounded-2xl border border-gray-100 p-7">
                                    <h2 className="text-base font-black !text-wk-dark-maroon uppercase tracking-wider mb-6">
                                        Detail Pemesan
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className={labelClass}>Nama Lengkap <span className="!text-red-400">*</span></label>
                                            <input type="text" placeholder="Nama lengkap" required className={inputClass} />
                                        </div>
                                        <div>
                                            <label className={labelClass}>Nomor WhatsApp / HP <span className="!text-red-400">*</span></label>
                                            <input type="text" placeholder="+62 8xx-xxxx-xxxx" required className={inputClass} />
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label className={labelClass}>Email</label>
                                            <input type="email" placeholder="email@contoh.com" className={inputClass} />
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label className={labelClass}>Alamat Lengkap <span className="!text-red-400">*</span></label>
                                            <input type="text" placeholder="Jalan, nomor rumah, RT/RW" required className={inputClass} />
                                        </div>
                                        <div>
                                            <label className={labelClass}>Kecamatan <span className="!text-red-400">*</span></label>
                                            <input type="text" placeholder="Kecamatan" required className={inputClass} />
                                        </div>
                                        <div>
                                            <label className={labelClass}>Kota / Kabupaten <span className="!text-red-400">*</span></label>
                                            <input type="text" placeholder="Sleman" required className={inputClass} />
                                        </div>
                                        <div>
                                            <label className={labelClass}>Provinsi <span className="!text-red-400">*</span></label>
                                            <input type="text" defaultValue="DI Yogyakarta" required className={inputClass} />
                                        </div>
                                        <div>
                                            <label className={labelClass}>Kode Pos</label>
                                            <input type="text" placeholder="55281" className={inputClass} />
                                        </div>
                                    </div>
                                </div>

                                {/* Delivery method */}
                                <div className="bg-white rounded-2xl border border-gray-100 p-7">
                                    <h2 className="text-base font-black !text-wk-dark-maroon uppercase tracking-wider mb-5">
                                        Metode Pengiriman
                                    </h2>
                                    <div className="space-y-3">
                                        {deliveryOptions.map((opt, i) => (
                                            <label key={i} className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-200 cursor-pointer hover:border-wk-gold/50 transition-colors has-[:checked]:border-wk-gold has-[:checked]:bg-wk-gold/5">
                                                <input type="radio" name="delivery" value={opt.value} defaultChecked={i === 0} className="accent-wk-maroon w-4 h-4" />
                                                <span className="text-sm font-bold !text-wk-dark-maroon">{opt.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Order notes */}
                                <div className="bg-white rounded-2xl border border-gray-100 p-7">
                                    <h2 className="text-base font-black !text-wk-dark-maroon uppercase tracking-wider mb-5">
                                        Catatan Pesanan
                                    </h2>
                                    <textarea
                                        placeholder="Misal: tanpa pedas, minta cuko ekstra, waktu pengiriman, dll."
                                        rows={4}
                                        className={`${inputClass} resize-none`}
                                    />
                                </div>

                            </div>

                            {/* ── Right: Order Summary + Payment ── */}
                            <div className="lg:w-96 flex-shrink-0 space-y-6">

                                {/* Order summary */}
                                <div className="bg-white rounded-2xl border border-gray-100 p-7">
                                    <h2 className="text-base font-black !text-wk-dark-maroon uppercase tracking-wider mb-5">
                                        Ringkasan Pesanan
                                    </h2>

                                    {/* Cart items */}
                                    <div className="space-y-3 mb-5 pb-5 border-b border-gray-100">
                                        {cart && cart.length > 0 ? cart.map((item, i) => (
                                            <div key={i} className="flex items-center justify-between gap-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-lg overflow-hidden border border-gray-100 flex-shrink-0">
                                                        <img src={`https://placehold.co/100x100/f3f4f6/8B1A1A?text=Product`} alt={item.title} className="w-full h-full object-cover" />
                                                    </div>
                                                    <span className="text-xs font-bold !text-wk-dark-maroon line-clamp-2 leading-snug">
                                                        {item.title}
                                                        <span className="!text-gray-400 font-medium"> × {item.qty}</span>
                                                    </span>
                                                </div>
                                                <span className="text-xs font-black !text-wk-maroon whitespace-nowrap">
                                                    {formatRupiah(item.qty * item.price.max)}
                                                </span>
                                            </div>
                                        )) : (
                                            <p className="text-sm !text-gray-400 text-center py-2">
                                                Keranjang kosong.{' '}
                                                <Link href="/shop" className="!text-wk-maroon font-bold hover:opacity-70">Belanja dulu</Link>
                                            </p>
                                        )}
                                    </div>

                                    {/* Totals */}
                                    <div className="space-y-3 mb-5 pb-5 border-b border-gray-100">
                                        <div className="flex justify-between text-sm">
                                            <span className="!text-gray-400">Subtotal</span>
                                            <span className="font-bold !text-wk-dark-maroon">{formatRupiah(total)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="!text-gray-400">Ongkos kirim</span>
                                            <span className="font-bold !text-green-600">Gratis</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="!text-gray-400">Diskon kupon</span>
                                            <span className="font-bold !text-gray-400">—</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <span className="font-black !text-wk-dark-maroon">Total</span>
                                        <span className="text-2xl font-black !text-wk-maroon">{formatRupiah(total)}</span>
                                    </div>
                                </div>

                                {/* Payment method */}
                                <div className="bg-white rounded-2xl border border-gray-100 p-7">
                                    <h2 className="text-base font-black !text-wk-dark-maroon uppercase tracking-wider mb-5">
                                        Metode Pembayaran
                                    </h2>
                                    <div className="space-y-3">
                                        {paymentMethods.map((method) => (
                                            <div key={method.key}>
                                                <button
                                                    type="button"
                                                    onClick={() => setActivePayment(activePayment === method.key ? 0 : method.key)}
                                                    className={`w-full flex items-center gap-3 p-4 rounded-xl border text-left transition-all
                                                        ${activePayment === method.key
                                                            ? '!bg-wk-maroon/5 border-wk-maroon/30'
                                                            : 'border-gray-200 hover:border-wk-gold/40'}`}
                                                >
                                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors
                                                        ${activePayment === method.key ? '!bg-wk-maroon' : '!bg-gray-100'}`}>
                                                        <i className={`${method.icon} text-sm ${activePayment === method.key ? '!text-white' : '!text-gray-400'}`} />
                                                    </div>
                                                    <span className={`text-xs font-black uppercase tracking-wide transition-colors
                                                        ${activePayment === method.key ? '!text-wk-dark-maroon' : '!text-gray-400'}`}>
                                                        {method.title}
                                                    </span>
                                                    <i className={`fal fa-chevron-${activePayment === method.key ? 'up' : 'down'} ml-auto !text-gray-300 text-xs`} />
                                                </button>
                                                {activePayment === method.key && (
                                                    <div className="px-4 py-3 text-xs !text-gray-500 leading-relaxed whitespace-pre-line">
                                                        {method.desc}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Place order */}
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 py-4 !bg-wk-maroon !text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:opacity-80 transition-opacity"
                                >
                                    Buat Pesanan
                                    <i className="fal fa-long-arrow-right" />
                                </button>

                                <p className="text-[11px] !text-gray-400 text-center leading-relaxed">
                                    Dengan memesan, Anda menyetujui syarat & ketentuan kami. Pesanan akan dikonfirmasi via WhatsApp.
                                </p>
                            </div>

                        </div>
                    </form>
                </div>
            </section>
        </Layout>
    )
}