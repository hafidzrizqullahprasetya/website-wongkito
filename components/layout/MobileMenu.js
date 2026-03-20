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
        <nav className="mt-8 px-2">
            <ul className="flex flex-col space-y-2">
                <li>
                    <Link href="/" className="block text-lg font-bold !text-wk-dark-maroon hover:!text-wk-gold hover:opacity-75 transition-opacity border-b border-gray-100 pb-3">Beranda</Link>
                </li>
                <li>
                    <div className="flex items-center justify-between cursor-pointer border-b border-gray-100 pb-3" onClick={() => handleClick("menu")}>
                        <Link href="/shop" className="text-lg font-bold !text-wk-dark-maroon hover:!text-wk-gold hover:opacity-75 transition-opacity">Menu</Link>
                        <button className="!text-wk-gold p-1 hover:opacity-75 transition-opacity">
                            <i className={`fal ${isActive.key === "menu" ? "fa-minus" : "fa-plus"}`} />
                        </button>
                    </div>
                    <ul className={`pl-4 mt-3 space-y-3 ${isActive.key === "menu" ? "block" : "hidden"} transition-all duration-300`}>
                        <li><Link href="/shop" className="block text-sm font-bold !text-wk-maroon hover:!text-wk-gold hover:opacity-75 transition-opacity">Semua Produk</Link></li>
                        <li><Link href="/shop" className="block text-sm font-bold !text-wk-maroon hover:!text-wk-gold hover:opacity-75 transition-opacity">Paket Seragam</Link></li>
                        <li><Link href="/shop" className="block text-sm font-bold !text-wk-maroon hover:!text-wk-gold hover:opacity-75 transition-opacity">Paket Campur</Link></li>
                        <li><Link href="/shop" className="block text-sm font-bold !text-wk-maroon hover:!text-wk-gold hover:opacity-75 transition-opacity">Beli Satuan</Link></li>
                        <li><Link href="/shop" className="block text-sm font-bold !text-wk-maroon hover:!text-wk-gold hover:opacity-75 transition-opacity">Hampers Pempek</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="/about" className="block text-lg font-bold !text-wk-dark-maroon hover:!text-wk-gold hover:opacity-75 transition-opacity border-b border-gray-100 pb-3 pt-2">Tentang Kami</Link>
                </li>
                <li>
                    <Link href="/shop-location" className="block text-lg font-bold !text-wk-dark-maroon hover:!text-wk-gold hover:opacity-75 transition-opacity border-b border-gray-100 pb-3 pt-2">Lokasi</Link>
                </li>
                <li>
                    <Link href="/contact" className="block text-lg font-bold !text-wk-dark-maroon hover:!text-wk-gold hover:opacity-75 transition-opacity border-b border-gray-100 pb-3 pt-2">Kontak</Link>
                </li>
            </ul>
        </nav>
    )
}
