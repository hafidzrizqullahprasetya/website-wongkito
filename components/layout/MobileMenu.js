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
        <nav className="mt-8 px-2 pb-10">
            <ul className="flex flex-col space-y-2">
                
                {/* Home */}
                <li>
                    <Link href="/" className="group flex items-center justify-between text-lg font-bold !text-wk-dark-maroon hover:!text-wk-maroon transition-all border-b border-gray-100 pb-4">
                        <span>Beranda</span>
                        <i className="fal fa-home text-sm opacity-20 group-hover:opacity-100 transition-opacity"></i>
                    </Link>
                </li>

                {/* Main Menu with Accordion */}
                <li>
                    <div 
                        className="group flex items-center justify-between cursor-pointer border-b border-gray-100 pb-4 pt-2" 
                        onClick={() => handleClick("menu")}
                    >
                        <span className={`text-lg font-bold transition-colors ${isActive.key === "menu" ? "!text-wk-maroon" : "!text-wk-dark-maroon group-hover:!text-wk-maroon"}`}>Menu Belanja</span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isActive.key === "menu" ? "!bg-wk-gold !text-wk-dark-maroon rotate-180" : "!bg-gray-50 !text-wk-gold group-hover:!bg-wk-gold group-hover:!text-white"}`}>
                            <i className={`fal ${isActive.key === "menu" ? "fa-minus" : "fa-plus"}`} />
                        </div>
                    </div>
                    
                    {/* Animated Submenu */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive.key === "menu" ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                        <ul className="pl-4 space-y-4 border-l-2 border-wk-gold/20">
                            {[
                                { label: 'Semua Produk', href: '/shop' },
                                { label: 'Paket Seragam', href: '/shop' },
                                { label: 'Paket Campur', href: '/shop' },
                                { label: 'Beli Satuan', href: '/shop' },
                                { label: 'Hampers Pempek', href: '/shop' }
                            ].map((item, i) => (
                                <li key={i}>
                                    <Link href={item.href} className="block text-sm font-black !text-wk-maroon hover:!text-wk-gold transition-colors uppercase tracking-widest">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>

                {/* About */}
                <li>
                    <Link href="/about" className="group flex items-center justify-between text-lg font-bold !text-wk-dark-maroon hover:!text-wk-maroon transition-all border-b border-gray-100 pb-4 pt-2">
                        <span>Tentang Kami</span>
                        <i className="fal fa-info-circle text-sm opacity-20 group-hover:opacity-100 transition-opacity"></i>
                    </Link>
                </li>

                {/* Location */}
                <li>
                    <Link href="/shop-location" className="group flex items-center justify-between text-lg font-bold !text-wk-dark-maroon hover:!text-wk-maroon transition-all border-b border-gray-100 pb-4 pt-2">
                        <span>Lokasi Kami</span>
                        <i className="fal fa-map-marker-alt text-sm opacity-20 group-hover:opacity-100 transition-opacity"></i>
                    </Link>
                </li>

                {/* Contact */}
                <li>
                    <Link href="/contact" className="group flex items-center justify-between text-lg font-bold !text-wk-dark-maroon hover:!text-wk-maroon transition-all border-b border-gray-100 pb-4 pt-2">
                        <span>Hubungi Kami</span>
                        <i className="fal fa-paper-plane text-sm opacity-20 group-hover:opacity-100 transition-opacity"></i>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
