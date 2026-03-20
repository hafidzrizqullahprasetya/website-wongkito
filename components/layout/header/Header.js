'use client'
import CartShow from "@/components/elements/CartShow"
import WishListShow from "@/components/elements/WishListShow"
import Link from "next/link"
import { useState } from "react"
import HeaderMobSticky from "../HeaderMobSticky"
import HeaderSticky from "../HeaderSticky"
import HeaderTabSticky from "../HeaderTabSticky"


export default function Header({ scroll, isMobileMenu, handleMobileMenu, isCartSidebar, handleCartSidebar }) {
    const [isToggled, setToggled] = useState(false)
    const handleToggle = () => setToggled(!isToggled)
    return (
        <>
            <header className="relative z-[900]">
                <div className="bg-wk-maroon py-2 px-4 border-b border-wk-gold/20">
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 text-center">
                            <span className="!text-white flex items-center text-[10px] sm:text-xs md:text-sm font-medium">
                                <i className="fal fa-shipping-fast mr-2 !text-wk-gold text-base md:text-lg" /> 
                                Gratis ongkir area Sleman & Yogyakarta <span className="hidden sm:inline ml-1">(min. order Rp 75.000)</span>!
                            </span>
                            <Link href="/shop" className="!bg-wk-gold !text-wk-maroon font-black hover:opacity-80 transition-opacity flex items-center text-[9px] sm:text-[10px] md:text-xs uppercase tracking-tighter px-3 py-1 rounded-full whitespace-nowrap">
                                Pesan Sekarang <i className="fal fa-long-arrow-right ml-2" /> 
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Static Mobile/Tablet Header (Visible initially on smaller screens) */}
                <div className="bg-white xl:hidden border-b border-gray-100 overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-between h-20 relative">
                            {/* Mobile Toggle - Left */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                                <button className="!text-wk-maroon text-2xl" onClick={handleMobileMenu}>
                                    <i className="far fa-bars" />
                                </button>
                            </div>

                            {/* Mobile Logo - Center */}
                            <div className="flex-grow flex justify-center px-8">
                                <Link href="/" className="flex items-center">
                                    <img src="/assets/img/logo/logo.png" alt="Logo" className="max-h-12 w-auto drop-shadow-sm" />
                                    <div className="ml-2 hidden sm:flex flex-col justify-center text-center">
                                        <span className="text-wk-maroon font-extrabold text-sm sm:text-base leading-[1.1] tracking-tighter whitespace-nowrap">
                                            Pempek <span className="font-dancing text-wk-gold italic text-sm sm:text-xl mx-0.5">"Asli"</span>
                                            <span className="block">Wong Kito</span>
                                        </span>
                                    </div>
                                </Link>
                            </div>

                            {/* Mobile Actions - Right */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center space-x-4">
                                <button className="relative !text-wk-maroon" onClick={handleCartSidebar}>
                                    <i className="fal fa-shopping-cart text-xl" />
                                    <span className="absolute -top-1.5 -right-2 !bg-wk-gold !text-wk-dark-maroon text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full border border-white">
                                        <CartShow />
                                    </span>
                                </button>
                                <Link href="/sign-in" className="!text-wk-maroon">
                                    <i className="fal fa-user text-xl" />
                                </Link>
                            </div>
                        </div>
                        {/* Mobile Search Bar */}
                        <div className="pb-4">
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-wk-maroon/50 text-xs">
                                    <i className="fal fa-search" />
                                </span>
                                <input 
                                    type="text" 
                                    placeholder="Cari pempek..." 
                                    className="w-full bg-gray-50 border-0 text-xs rounded-full pl-10 pr-4 py-2.5 outline-none focus:ring-1 focus:ring-wk-gold/30"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Desktop Header */}
                <div className="bg-white hidden xl:block border-b border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-between py-6">
                            {/* Logo Area */}
                            <div className="w-auto min-w-fit max-w-[25%] flex-shrink-0">
                                <Link href="/" className="flex items-center group">
                                    <img src="/assets/img/logo/logo.png" alt="Pempek Asli Wong Kito" className="max-h-14 2xl:max-h-16 w-auto drop-shadow-md transition-transform group-hover:scale-105" />
                                    <div className="ml-3 flex flex-col justify-center">
                                        <span className="text-wk-maroon font-extrabold text-lg 2xl:text-2xl leading-none tracking-tighter whitespace-nowrap">
                                            Pempek <span className="font-dancing text-wk-gold italic text-2xl 2xl:text-4xl mx-1">"Asli"</span>
                                            <span className="block 2xl:inline">Wong Kito</span>
                                        </span>
                                    </div>
                                </Link>
                            </div>
                            {/* Search Area */}
                            <div className="flex-grow px-10">
                                <div className="relative max-w-xl mx-auto">
                                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-wk-maroon">
                                        <i className="fal fa-search" />
                                    </span>
                                    <input 
                                        type="text" 
                                        placeholder="Cari produk pempek..." 
                                        className="w-full bg-gray-50/50 border border-gray-200 text-wk-dark-maroon text-sm font-bold rounded-full focus:ring-1 focus:ring-wk-gold focus:border-wk-gold block pl-12 pr-6 py-3.5 transition-all outline-none placeholder-gray-400"
                                    />
                                </div>
                            </div>
                            {/* Meta Area */}
                            <div className="flex items-center space-x-8">
                                <button className="relative !text-wk-maroon hover:opacity-70 hover:!text-wk-maroon transition-opacity font-bold group" onClick={handleCartSidebar}>
                                    <i className="fal fa-shopping-cart text-2xl" />
                                    <span className="absolute -top-2 -right-3 !bg-wk-gold !text-wk-dark-maroon text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white focus:outline-none">
                                        <CartShow />
                                    </span>
                                </button>
                                <Link href="/sign-in" className="!text-wk-maroon hover:!text-wk-maroon hover:opacity-70 transition-opacity">
                                    <i className="fal fa-user text-2xl" />
                                </Link>
                                <Link href="/wishlist" className="relative !text-wk-maroon hover:!text-wk-maroon hover:opacity-70 transition-opacity">
                                    <i className="fal fa-heart text-2xl" />
                                    <span className="absolute -top-2 -right-3 !bg-wk-gold !text-wk-dark-maroon text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white focus:outline-none">
                                        <WishListShow />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-wk-maroon hidden xl:block border-t border-wk-gold/20">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center h-14">
                            {/* Category Menu */}
                            <div className="w-1/6 relative group z-50">
                                <button onClick={handleToggle} className="w-full h-14 flex items-center justify-between !bg-wk-gold !text-wk-dark-maroon px-5 font-extrabold text-sm tracking-wide transition-opacity hover:opacity-90">
                                    <span className="flex items-center"><i className="fal fa-bars mr-3 text-lg" /> KATEGORI</span>
                                    <i className={`fal fa-chevron-${isToggled ? 'up' : 'down'} text-[10px]`} />
                                </button>
                                <div className={`${isToggled ? "block" : "hidden"} absolute top-full left-0 w-full !bg-white border-x border-b border-gray-100 overflow-hidden`}>
                                    <ul className="py-0">
                                        {[
                                            { icon: 'box', label: 'Paket Seragam' },
                                            { icon: 'boxes', label: 'Paket Campur' },
                                            { icon: 'utensils', label: 'Beli Satuan' },
                                            { icon: 'fire', label: 'Pempek Goreng' },
                                            { icon: 'map-marker-alt', label: 'Dine-in & Take Away' },
                                            { icon: 'gift', label: 'Hampers / Kado' }
                                        ].map((cat, i) => (
                                            <li key={i}>
                                                <Link href="/shop" className="flex items-center px-5 py-3.5 !text-wk-dark-maroon font-bold hover:opacity-70 hover:!bg-wk-beige/10 transition-all border-b border-gray-50 last:border-0 text-sm">
                                                    <i className={`fal fa-${cat.icon} mr-3 !text-wk-gold w-5 text-center text-lg`} />
                                                    {cat.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {/* Main Navigation */}
                            {/* Main Navigation */}
                            <div className="flex-grow">
                                <nav className="flex items-stretch justify-center space-x-10 h-14">
                                    <Link href="/" className="!text-wk-gold font-black opacity-100 uppercase tracking-wider text-sm flex items-center">Beranda</Link>
                                    
                                    <div className="relative group flex items-center h-full">
                                        <button className="!text-wk-beige font-bold hover:!text-wk-gold hover:opacity-70 transition-opacity uppercase tracking-wider text-sm flex items-center h-full outline-none">
                                            Menu <i className="fal fa-chevron-down ml-2 text-[10px]" />
                                        </button>
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-0 hidden group-hover:block z-[100] min-w-[200px]">
                                            <ul className="!bg-wk-maroon border border-wk-gold/20 p-4 space-y-1 shadow-2xl">
                                                {['Semua Produk', 'Paket Seragam', 'Paket Campur', 'Beli Satuan', 'Hampers Pempek'].map((item, i) => (
                                                    <li key={i}>
                                                        <Link href="/shop" className="!text-wk-beige hover:!text-wk-gold hover:opacity-80 transition-all text-xs font-bold block uppercase tracking-tight py-2 px-3 hover:!bg-white/5 rounded-sm">
                                                            {item}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <Link href="/about" className="!text-wk-beige font-bold hover:!text-wk-gold hover:opacity-70 transition-opacity uppercase tracking-wider text-sm flex items-center">Tentang Kami</Link>
                                    <Link href="/shop-location" className="!text-wk-beige font-bold hover:!text-wk-gold hover:opacity-70 transition-opacity uppercase tracking-wider text-sm flex items-center">Lokasi</Link>
                                    <Link href="/contact" className="!text-wk-beige font-bold hover:!text-wk-gold hover:opacity-70 transition-opacity uppercase tracking-wider text-sm flex items-center">Kontak</Link>
                                </nav>
                            </div>
                            {/* Menu Contact */}
                            <div className="w-1/6 flex justify-end items-center h-14">
                                <Link href="https://wa.me/6281234567890" target="_blank" className="flex items-center !text-wk-gold font-extrabold hover:!text-wk-gold hover:opacity-75 transition-opacity text-sm group">
                                    <div className="w-10 h-10 !bg-wk-gold/15 rounded-full mr-3 flex items-center justify-center flex-shrink-0">
                                        <i className="fab fa-whatsapp text-lg !text-wk-gold" />
                                    </div>
                                    <span className="whitespace-nowrap">WhatsApp Order</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <HeaderSticky scroll={scroll} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />
            <HeaderTabSticky scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />
            <HeaderMobSticky scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />
        </>
    )
}
