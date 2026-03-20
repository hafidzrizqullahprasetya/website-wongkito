'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function PromoModal() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        // Cek apakah sudah pernah muncul di sesi ini
        const hasSeenPromo = sessionStorage.getItem('hasSeenPromo')
        if (!hasSeenPromo) {
            const timer = setTimeout(() => {
                setIsOpen(true)
                sessionStorage.setItem('hasSeenPromo', 'true')
            }, 3000) // Sedikit lebih lambat agar user sempat melihat header
            return () => clearTimeout(timer)
        }
    }, [])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Background Overlay (Blur & Dark) */}
            <div 
                className="absolute inset-0 !bg-wk-dark-maroon/70 backdrop-blur-md animate-fadeIn"
                onClick={() => setIsOpen(false)}
            />
            
            {/* Modal Container (FLAT) */}
            <div className="relative w-full max-w-5xl !bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-gray-100 flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible animate-fadeInUp">
                
                {/* Floating Close Button (FLAT) */}
                <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full !bg-wk-maroon !text-white border border-white/20 hover:!bg-wk-gold hover:!text-wk-dark-maroon transition-all active:scale-90"
                >
                    <i className="fal fa-times text-lg" />
                </button>

                {/* LEFT: Image Section */}
                <div className="md:w-1/2 relative h-[250px] md:h-auto overflow-hidden">
                    <img 
                        src="https://placehold.co/800x1000/3d0e0e/white?text=PROMO+WONG+KITO" 
                        alt="Promo Banner"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-wk-maroon/40 to-transparent" />
                    
                    {/* Floating Offer Badge (Flat) */}
                    <div className="absolute bottom-4 left-4 !bg-wk-gold px-4 py-2 rounded-xl border border-white/20 md:hidden animate-bounce-slow">
                        <p className="text-[10px] font-black uppercase !text-wk-dark-maroon tracking-tighter">Diskon</p>
                        <p className="text-xl font-black !text-wk-maroon leading-none">25%</p>
                    </div>
                </div>

                {/* RIGHT: Content Section */}
                <div className="md:w-1/2 p-8 md:p-14 lg:p-20 flex flex-col justify-center text-center md:text-left relative">
                    {/* Badge */}
                    <span className="inline-block px-3 py-1 !bg-wk-gold !text-wk-dark-maroon text-[9px] font-black uppercase tracking-[0.4em] mb-6 rounded self-center md:self-start">
                        Penawaran Terbatas
                    </span>
                    
                    <h2 className="text-4xl lg:text-5xl font-black !text-wk-dark-maroon leading-[0.9] mb-6 uppercase tracking-tighter">
                        <span className="block mb-2">PAKET</span>
                        <span className="!text-wk-maroon decoration-wk-gold underline underline-offset-8 font-black">KEBAIKAN</span>
                    </h2>

                    <div className="mb-10">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                            <span className="text-sm font-bold !text-wk-dark-maroon/60 uppercase tracking-widest">Hemat</span>
                            <span className="px-3 py-1 !bg-wk-maroon !text-wk-gold text-2xl font-black rounded-lg">25%</span>
                        </div>
                        <p className="text-xs md:text-sm !text-gray-400 leading-relaxed font-medium">
                            Rayakan momen spesial bersama keluarga dengan paket hampers Pempek Wong Kito. Segel kebaikan asli Palembang di depan pintu Anda.
                        </p>
                    </div>

                    {/* Action Buttons (FLAT) */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link 
                            href="/shop" 
                            onClick={() => setIsOpen(false)}
                            className="flex-[1.5] text-center py-4 !bg-wk-maroon !text-white font-black text-[11px] uppercase tracking-widest rounded-2xl active:scale-95 transition-all outline-none"
                        >
                            Dapatkan Promo <i className="fal fa-long-arrow-right ml-2" />
                        </Link>
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="flex-1 text-center py-4 bg-gray-50 border border-gray-100 !text-gray-400 font-black text-[10px] uppercase tracking-widest rounded-2xl transition-colors outline-none active:scale-95"
                        >
                            Nanti Saja
                        </button>
                    </div>

                    {/* Social Proof (FLAT) */}
                    <div className="mt-10 pt-6 border-t border-gray-50 flex items-center justify-center md:justify-start gap-4">
                        <div className="flex -space-x-2">
                            {[1,2,3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border border-gray-200 bg-gray-50 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Customer" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <p className="text-[10px] font-bold !text-gray-400 leading-tight">
                            <span className="!text-wk-dark-maroon">120+ Orang</span> baru saja<br/> memesan paket ini.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
