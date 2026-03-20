'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function MobileMenu() {
    const [openKey, setOpenKey] = useState("")

    const toggleAccordion = (key) => {
        setOpenKey(openKey === key ? "" : key)
    }

    const menuItems = [
        { label: 'Beranda', href: '/', icon: 'fa-home' },
        { 
            label: 'Menu Belanja', 
            isAccordion: true, 
            key: 'menu',
            subMenu: [
                { label: 'Semua Produk', href: '/shop' },
                { label: 'Paket Seragam', href: '/shop' },
                { label: 'Paket Campur', href: '/shop' },
                { label: 'Beli Satuan', href: '/shop' },
                { label: 'Hampers Pempek', href: '/shop' }
            ]
        },
        { label: 'Tentang Kami', href: '/about', icon: 'fa-info-circle' },
        { label: 'Lokasi Kami', href: '/shop-location', icon: 'fa-map-marker-alt' },
        { label: 'Hubungi Kami', href: '/contact', icon: 'fa-paper-plane' }
    ]

    return (
        <nav className="mt-2 px-2 pb-5">
            <ul className="flex flex-col">
                {menuItems.map((item, index) => (
                    <li key={index} className="block w-full border-b border-gray-50">
                        {item.isAccordion ? (
                            <>
                                <div 
                                    className="flex items-center justify-between cursor-pointer py-4 group"
                                    onClick={() => toggleAccordion(item.key)}
                                >
                                    <span className={`text-[15px] font-black uppercase tracking-widest transition-colors ${openKey === item.key ? "!text-wk-maroon" : "!text-wk-dark-maroon group-hover:!text-wk-maroon"}`}>
                                        {item.label}
                                    </span>
                                    <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${openKey === item.key ? "!bg-wk-gold !text-wk-dark-maroon rotate-180 shadow-sm" : "!bg-gray-50 !text-wk-gold group-hover:!bg-wk-gold group-hover:!text-white"}`}>
                                        <i className={`fal ${openKey === item.key ? "fa-minus" : "fa-plus"} text-[10px]`} />
                                    </div>
                                </div>
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openKey === item.key ? "max-h-[500px] opacity-100 pb-5" : "max-h-0 opacity-0"}`}>
                                    <ul className="pl-4 space-y-4 border-l-2 border-wk-gold/20 ml-1">
                                        {item.subMenu.map((sub, idx) => (
                                            <li key={idx}>
                                                <Link href={sub.href} className="block text-[11px] font-black !text-wk-maroon hover:!text-wk-gold transition-colors uppercase tracking-[0.2em]">
                                                    {sub.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <Link href={item.href} className="flex items-center justify-between py-4 group">
                                <span className="text-[15px] font-black !text-wk-dark-maroon hover:!text-wk-maroon transition-all uppercase tracking-widest">
                                    {item.label}
                                </span>
                                <i className={`fal ${item.icon} text-sm opacity-20 group-hover:opacity-100 group-hover:!text-wk-gold transition-all`} />
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    )
}
