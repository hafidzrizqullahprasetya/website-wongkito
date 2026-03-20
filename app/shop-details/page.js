'use client'
import Layout from "@/components/layout/Layout"
import { useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 20,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: { slidesPerView: 1.5, spaceBetween: 15 },
        576: { slidesPerView: 2, spaceBetween: 15 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        992: { slidesPerView: 3, spaceBetween: 20 },
        1200: { slidesPerView: 4, spaceBetween: 25 },
    },
    navigation: {
        nextEl: '.tprelated__nxt',
        prevEl: '.tprelated__prv',
    },
}

export default function ShopDetails() {
    const [activeTab, setActiveTab] = useState(1)
    const [selectedImg, setSelectedImg] = useState(1)
    
    // Mock data for demo
    const productImages = [
        "/assets/img/product/product-1.jpg",
        "/assets/img/product/product-2.jpg",
        "/assets/img/product/product-3.jpg",
    ]

    return (
        <Layout breadcrumbTitle="Detail Produk">
            <div className="bg-white">
                <section className="py-10 lg:py-20">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                            
                            {/* ── COLUMN 1: PRODUCT GALLERY ── */}
                            <div className="lg:w-5/12 w-full">
                                <div className="flex flex-col-reverse md:flex-row gap-4">
                                    {/* Thumbnails (Horizontal on Mobile, Vertical on MD+) */}
                                    <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-visible pb-2 md:pb-0 scrollbar-hide">
                                        {productImages.map((img, idx) => (
                                            <button 
                                                key={idx}
                                                onClick={() => setSelectedImg(idx + 1)}
                                                className={`w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${selectedImg === idx + 1 ? 'border-wk-gold shadow-md' : 'border-gray-100 hover:border-gray-200 opacity-60 hover:opacity-100'}`}
                                            >
                                                <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                                            </button>
                                        ))}
                                    </div>

                                    {/* Main Image */}
                                    <div className="flex-1 aspect-square rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 group relative">
                                        <img 
                                            src={productImages[selectedImg - 1]} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                            alt="Main Product" 
                                        />
                                        <span className="absolute top-4 left-4 px-3 py-1 !bg-wk-gold !text-wk-dark-maroon text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm z-10">
                                            Favorit
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* ── COLUMN 2: PRODUCT INFO ── */}
                            <div className="lg:w-5/12 w-full">
                                <div className="flex flex-wrap items-center gap-4 mb-6">
                                    <span className="px-3 py-1 !bg-wk-maroon/5 !text-wk-maroon text-[10px] font-black uppercase tracking-widest rounded-full border border-wk-maroon/10">
                                        Paket Pempek
                                    </span>
                                    <div className="flex items-center gap-1 !text-wk-gold text-xs">
                                        {[...Array(5)].map((_, i) => (
                                            <i key={i} className={`${i < 4 ? 'fas' : 'far'} fa-star`}></i>
                                        ))}
                                    </div>
                                    <span className="text-xs !text-gray-400 font-bold uppercase tracking-wider">3 Ulasan</span>
                                </div>

                                <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                                    <h1 className="text-2xl lg:text-4xl font-black !text-wk-dark-maroon leading-tight uppercase tracking-tight">
                                        Paket Duo — 10 Biji Mix
                                    </h1>
                                    <span className="px-3 py-1 !bg-green-50 !text-green-700 text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm">
                                        Tersedia
                                    </span>
                                </div>

                                <div className="flex items-baseline gap-3 mb-8">
                                    <span className="text-4xl font-black !text-wk-maroon tracking-tighter">Rp35.000</span>
                                    <span className="text-lg !text-gray-300 line-through font-bold">Rp45.000</span>
                                </div>

                                <p className="text-sm lg:text-base !text-gray-500 leading-relaxed mb-10 max-w-lg">
                                    Pempek segar buatan harian dari dapur Wong Kito. Dibuat dari ikan belida pilihan, tepung sagu berkualitas, dan cuko asli khas Palembang yang kental dan menggugah selera.
                                </p>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
                                    <div className="flex items-center border-2 border-gray-100 rounded-xl overflow-hidden bg-white">
                                        <span className="px-4 py-3 !text-gray-400 text-xs font-black uppercase tracking-widest border-r border-gray-100">Qty</span>
                                        <input type="number" min="1" className="w-16 py-3 text-center !text-wk-dark-maroon font-black text-sm outline-none" defaultValue="1" />
                                    </div>
                                    <button className="flex-1 flex items-center justify-center gap-3 px-8 py-4 !bg-wk-maroon !text-white font-black text-xs uppercase tracking-[0.2em] rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-wk-maroon/20">
                                        <i className="fal fa-shopping-cart text-base"></i> Tambah ke Keranjang
                                    </button>
                                    <button className="w-14 h-14 border-2 border-gray-100 rounded-xl flex items-center justify-center !text-wk-maroon hover:bg-gray-50 transition-all">
                                        <i className="fal fa-heart text-lg"></i>
                                    </button>
                                </div>

                                <div className="space-y-4 text-sm border-t border-gray-100 pt-8">
                                    <div className="flex gap-4"><span className="font-black !text-wk-dark-maroon w-24 uppercase tracking-widest text-[11px]">Kategori</span><span className="!text-gray-500 font-medium">Paket Pempek, Campur</span></div>
                                    <div className="flex gap-4"><span className="font-black !text-wk-dark-maroon w-24 uppercase tracking-widest text-[11px]">SKU</span><span className="!text-gray-500 font-medium">WK-002</span></div>
                                    <div className="flex items-center gap-4 pt-2">
                                        <span className="font-black !text-wk-dark-maroon w-24 uppercase tracking-widest text-[11px]">Bagikan</span>
                                        <div className="flex gap-2">
                                            {['whatsapp', 'instagram', 'facebook-f'].map(icon => (
                                                <a key={icon} href="#" className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center !text-wk-maroon/60 hover:!bg-wk-gold hover:!text-wk-dark-maroon transition-all">
                                                    <i className={`fab fa-${icon}`}></i>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ── COLUMN 3: BENEFITS ── */}
                            <div className="lg:w-2/12 w-full">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 !bg-gray-50 p-6 lg:p-0 rounded-2xl lg:bg-transparent">
                                    {[
                                        { icon: 'truck', text: 'Gratis ongkir area Maguwoharjo & sekitarnya' },
                                        { icon: 'leaf', text: 'Bahan pilihan, tanpa pengawet, segar setiap hari' },
                                        { icon: 'undo', text: 'Komplain? Kami ganti atau kembalikan dana' },
                                        { icon: 'shield-check', text: 'Produksi higienis, terjamin kualitasnya' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-full !bg-wk-maroon/5 flex items-center justify-center flex-shrink-0">
                                                <i className={`fal fa-${item.icon} !text-wk-maroon text-sm`}></i>
                                            </div>
                                            <p className="text-[11px] !text-gray-500 leading-relaxed font-bold">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── TABS SECTION: DESCRIPTION & REVIEWS ── */}
                <section className="pb-20">
                    <div className="container mx-auto px-6">
                        <div className="border-t border-gray-100 pt-16">
                            <div className="flex flex-wrap gap-8 border-b border-gray-100 mb-10">
                                {['Deskripsi', 'Informasi Tambahan', 'Ulasan (3)'].map((tab, i) => (
                                    <button 
                                        key={i}
                                        onClick={() => setActiveTab(i + 1)}
                                        className={`pb-4 text-xs font-black uppercase tracking-[0.2em] transition-all relative ${activeTab === i + 1 ? '!text-wk-maroon' : '!text-gray-400 hover:!text-wk-dark-maroon'}`}
                                    >
                                        {tab}
                                        {activeTab === i + 1 && <span className="absolute bottom-0 left-0 w-full h-1 !bg-wk-maroon rounded-full" />}
                                    </button>
                                ))}
                            </div>
                            
                            <div className="max-w-4xl">
                                {activeTab === 1 && (
                                    <div className="animate-fadeIn">
                                        <p className="text-base !text-gray-500 leading-loose mb-6">
                                            Inilah paket pempek favorit keluarga Indonesa. Dibuat dengan resep rahasia turun temurun yang menjamin kelembutan tekstur ditiap gigitannya. Kami hanya menggunakan ikan segar kualitas ekspor yang diproses secara higienis.
                                        </p>
                                        <p className="text-base !text-gray-500 leading-loose">
                                            Setiap kemasan dilengkapi dengan Cuko kental yang asam-manis-pedasnya pas di lidah. Cocok dinikmati selagi hangat bersama keluarga atau sebagai buah tangan untuk kerabat tercinta.
                                        </p>
                                    </div>
                                )}
                                {activeTab === 2 && (
                                    <div className="animate-fadeIn space-y-4">
                                        {[
                                            { label: 'Berat', val: '500 gram' },
                                            { label: 'Isi Paket', val: '5 Kapal Selam, 5 Lenjer' },
                                            { label: 'Ketahanan', val: '2 Hari Suhu Ruang, 1 Bulan Freezer' },
                                            { label: 'Pengiriman', val: 'Vakum & Seal (Aman Luar Kota)' },
                                        ].map((item, i) => (
                                            <div key={i} className="flex border-b border-gray-50 pb-4">
                                                <span className="w-40 font-black !text-wk-dark-maroon text-xs uppercase tracking-widest">{item.label}</span>
                                                <span className="!text-gray-500 text-sm">{item.val}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {activeTab === 3 && (
                                    <div className="animate-fadeIn space-y-10">
                                        {[1, 2].map(rev => (
                                            <div key={rev} className="flex gap-6">
                                                <div className="w-12 h-12 rounded-full !bg-gray-100 flex-shrink-0 overflow-hidden">
                                                    <img src={`/assets/img/shop/reviewer-0${rev}.png`} alt="User" />
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <h4 className="font-black !text-wk-dark-maroon text-sm uppercase tracking-wider">Hafidz R.</h4>
                                                        <div className="flex text-wk-gold text-[10px]"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                                                    </div>
                                                    <p className="text-sm !text-gray-500 leading-relaxed italic">"Pempeknya beneran kerasa ikannya, cukonya mantul banget kental dan pedesnya pas!"</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── RELATED PRODUCTS ── */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="flex items-end justify-between mb-10">
                            <div>
                                <span className="inline-block px-3 py-1 !bg-wk-gold !text-wk-dark-maroon text-[10px] font-black uppercase tracking-widest mb-3 rounded">Rekomendasi</span>
                                <h2 className="text-3xl font-black !text-wk-dark-maroon uppercase tracking-tight">Mungkin Anda Suka</h2>
                            </div>
                            <div className="flex gap-3">
                                <button className="tprelated__prv w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:!bg-wk-maroon hover:!text-white transition-all"><i className="fal fa-arrow-left" /></button>
                                <button className="tprelated__nxt w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:!bg-wk-maroon hover:!text-white transition-all"><i className="fal fa-arrow-right" /></button>
                            </div>
                        </div>
                        
                        <div className="product-swiper-wrapper">
                            <Swiper {...swiperOptions}>
                                {[1, 2, 3, 4, 5, 6].map((item) => (
                                    <SwiperSlide key={item}>
                                        <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-black/5 transition-all duration-500">
                                            <div className="aspect-square relative overflow-hidden bg-gray-50">
                                                <img src={`/assets/img/product/product-${item}.jpg`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Product" />
                                                <div className="absolute inset-0 bg-wk-maroon/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <div className="p-5 text-center">
                                                <h3 className="font-black !text-wk-dark-maroon text-sm uppercase tracking-tight mb-2 hover:!text-wk-maroon transition-colors cursor-pointer">Paket Campur {item}</h3>
                                                <p className="text-wk-maroon font-black">Rp35.000</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}