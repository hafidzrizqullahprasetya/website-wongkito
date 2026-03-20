'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({ status: false, key: "" })
        } else {
            setIsActive({ status: true, key })
        }
    }

    return (
        <nav className="mt-4 px-2 pb-10">
            <ul className="flex flex-col">
                
                {/* Home */}
                <li>
                    <Link href="/" className="group flex items-center justify-between text-[15px] font-black !text-wk-dark-maroon hover:!text-wk-maroon transition-all border-b border-gray-50 py-4">
                        <span className="uppercase tracking-widest">Beranda</span>
                        <i className="fal fa-home text-sm opacity-20 group-hover:opacity-100 transition-opacity"></i>
                    </Link>
                </li>

                {/* Main Menu with Accordion */}
                <li>
                    <div 
                        className="group flex items-center justify-between cursor-pointer border-b border-gray-50 py-4" 
                        onClick={() => handleClick("menu")}
                    >
                        <span className={`text-[15px] font-black uppercase tracking-widest transition-colors ${isActive.key === "menu" ? "!text-wk-maroon" : "!text-wk-dark-maroon group-hover:!text-wk-maroon"}`}>Menu Belanja</span>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${isActive.key === "menu" ? "!bg-wk-gold !text-wk-dark-maroon rotate-180" : "!bg-gray-50 !text-wk-gold group-hover:!bg-wk-gold group-hover:!text-white"}`}>
                            <i className={`fal ${isActive.key === "menu" ? "fa-minus" : "fa-plus"} text-[10px]`} />
                        </div>
                    </div>
                    
                    {/* Animated Submenu */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive.key === "menu" ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"}`}>
                        <ul className="pl-4 space-y-4 border-l-2 border-wk-gold/20">
                            {[
                                { label: 'Semua Produk', href: '/shop' },
                                { label: 'Paket Seragam', href: '/shop' },
                                { label: 'Paket Campur', href: '/shop' },
                                { label: 'Beli Satuan', href: '/shop' },
                                { label: 'Hampers Pempek', href: '/shop' }
                            ].map((item, i) => (
                                <li key={i}>
                                    <Link href={item.href} className="block text-[11px] font-black !text-wk-maroon hover:!text-wk-gold transition-colors uppercase tracking-[0.2em]">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>

                {/* About */}
                <li>
                    <Link href="/about" className="group flex items-center justify-between text-[15px] font-black !text-wk-dark-maroon hover:!text-wk-maroon transition-all border-b border-gray-50 py-4">
                        <span className="uppercase tracking-widest">Tentang Kami</span>
                        <i className="fal fa-info-circle text-sm opacity-20 group-hover:opacity-100 transition-opacity"></i>
                    </Link>
                </li>

                {/* Location */}
                <li>
                    <Link href="/shop-location" className="group flex items-center justify-between text-[15px] font-black !text-wk-dark-maroon hover:!text-wk-maroon transition-all border-b border-gray-50 py-4">
                        <span className="uppercase tracking-widest">Lokasi Kami</span>
                        <i className="fal fa-map-marker-alt text-sm opacity-20 group-hover:opacity-100 transition-opacity"></i>
                    </Link>
                </li>

                {/* Contact */}
                <li>
                    <Link href="/contact" className="group flex items-center justify-between text-[15px] font-black !text-wk-dark-maroon hover:!text-wk-maroon transition-all border-b border-gray-50 py-4">
                        <span className="uppercase tracking-widest">Hubungi Kami</span>
                        <i className="fal fa-paper-plane text-sm opacity-20 group-hover:opacity-100 transition-opacity"></i>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
