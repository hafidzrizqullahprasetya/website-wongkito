'use client'
import Link from "next/link"
import { useState } from "react"
import MobileMenu from "./MobileMenu"

export default function Sidebar({ isMobileMenu, handleMobileMenu }) {
    const [activeTab, setActiveTab] = useState('menu')

    return (
        <>
            <div className={`fixed top-0 left-0 h-full w-[300px] !bg-white z-[1001] transition-transform duration-500 ease-in-out transform shadow-2xl ${isMobileMenu ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex flex-col h-full !bg-white">
                    {/* Header Sidebar */}
                    <div className="flex items-center justify-between p-6 !bg-wk-maroon">
                        <Link href="/" className="flex items-center">
                            <img src="/assets/img/logo/logo.png" alt="Logo" className="max-h-8 brightness-0 invert" />
                            <div className="ml-3 flex flex-col justify-center">
                                <span className="text-wk-gold font-extrabold text-[11px] sm:text-xs leading-[1.1] tracking-tight whitespace-nowrap">
                                    Pempek <span className="font-dancing text-white italic text-xs sm:text-base mx-0.5">"Asli"</span>
                                    <span className="block sm:inline">Wong Kito</span>
                                </span>
                            </div>
                        </Link>
                        <button className="!text-wk-gold hover:opacity-70 transition-opacity text-2xl" onClick={handleMobileMenu}>
                            <i className="fal fa-times-circle" />
                        </button>
                    </div>

                    {/* Search Area */}
                    <div className="p-6 !bg-wk-maroon/5 border-b border-gray-100">
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 !text-wk-maroon">
                                <i className="fal fa-search" />
                            </span>
                            <input 
                                type="text" 
                                placeholder="Cari pempek..." 
                                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 !text-wk-dark-maroon font-bold text-sm focus:outline-none focus:border-wk-gold transition-all"
                            />
                        </div>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex border-b border-gray-100">
                        <button 
                            onClick={() => setActiveTab('menu')}
                            className={`flex-1 py-4 text-sm font-black uppercase tracking-widest transition-all ${activeTab === 'menu' ? "!text-wk-maroon border-b-2 border-wk-maroon !bg-wk-maroon/5" : "text-gray-400 hover:!text-wk-maroon hover:!bg-wk-maroon/5"}`}
                        >
                            Menu Utama
                        </button>
                        <button 
                            onClick={() => setActiveTab('cat')}
                            className={`flex-1 py-4 text-sm font-black uppercase tracking-widest transition-all ${activeTab === 'cat' ? "!text-wk-maroon border-b-2 border-wk-maroon !bg-wk-maroon/5" : "text-gray-400 hover:!text-wk-maroon hover:!bg-wk-maroon/5"}`}
                        >
                            Kategori
                        </button>
                    </div>

                    {/* Content Area */}
                    <div className="flex-grow overflow-y-auto p-4">
                        {activeTab === 'menu' ? (
                            <MobileMenu />
                        ) : (
                            <div className="px-2 py-4">
                                <ul className="space-y-4">
                                    {[
                                        { label: 'Paket Seragam', href: '/shop' },
                                        { label: 'Paket Campur', href: '/shop' },
                                        { label: 'Beli Satuan', href: '/shop' },
                                        { label: 'Hampers & Kado', href: '/shop' },
                                        { label: 'Lokasi Toko', href: '/shop-location' }
                                    ].map((cat, i) => (
                                        <li key={i}>
                                            <Link href={cat.href} className="flex items-center text-lg font-bold !text-wk-dark-maroon hover:!text-wk-gold hover:opacity-75 transition-opacity border-b border-gray-50 pb-3 block">
                                                {cat.label}
                                                <i className="fal fa-chevron-right ml-auto text-sm !text-wk-gold" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Footer Links */}
                    <div className="p-6 border-t border-gray-100 space-y-3 !bg-gray-50">
                        <Link href="/sign-in" className="flex items-center justify-center space-x-2 w-full !bg-wk-maroon !text-wk-gold font-bold py-3 rounded-lg hover:opacity-85 transition-opacity">
                            <i className="fal fa-user" />
                            <span>Masuk / Daftar</span>
                        </Link>
                        <Link href="/wishlist" className="flex items-center justify-center space-x-2 w-full border-2 border-wk-maroon !text-wk-maroon font-bold py-3 rounded-lg hover:opacity-70 transition-opacity">
                            <i className="fal fa-heart" />
                            <span>Wishlist</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isMobileMenu && (
                <div 
                    className="fixed inset-0 !bg-wk-dark-maroon/60 backdrop-blur-sm z-[1000] opacity-100 transition-opacity duration-500"
                    onClick={handleMobileMenu} 
                />
            )}
        </>
    )
}
