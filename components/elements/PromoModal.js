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
            }, 2000) // Muncul setelah 2 detik landing
            return () => clearTimeout(timer)
        }
    }, [])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Overlay */}
            <div 
                className="absolute inset-0 bg-wk-dark-maroon/80 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
            />
            
            {/* Modal Content */}
            <div className="relative w-full max-w-4xl !bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
                
                {/* Close Button */}
                <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full !bg-wk-maroon !text-white hover:opacity-80 transition-opacity"
                >
                    <i className="fal fa-times text-xl" />
                </button>

                {/* Left: Image Side */}
                <div className="md:w-1/2 relative min-h-[300px] md:min-h-[500px]">
                    <img 
                        src="https://placehold.co/800x1000/3d0e0e/white?text=Promo+Hari+Raya" 
                        alt="Promo Banner"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-wk-maroon/60 to-transparent md:hidden" />
                </div>

                {/* Right: Text Side */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-center md:text-left">
                    <span className="block text-[11px] font-black !text-wk-gold uppercase tracking-[0.4em] mb-4">
                        Penawaran Terbatas
                    </span>
                    
                    <h2 className="text-4xl md:text-5xl font-black !text-wk-dark-maroon leading-tight mb-6 uppercase tracking-tighter">
                        PROMO<br/>
                        <span className="!text-wk-maroon">HARI RAYA</span>
                    </h2>

                    <div className="mb-8">
                        <p className="text-lg font-bold !text-wk-dark-maroon/80 mb-2">
                            Diskon Hingga <span className="text-3xl !text-wk-gold font-black">25%</span>
                        </p>
                        <p className="text-sm !text-gray-400 leading-relaxed">
                            Nikmati paket spesial hampers Pempek Wong Kito untuk keluarga tercinta. Stok terbatas untuk pengiriman minggu ini!
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link 
                            href="/shop" 
                            onClick={() => setIsOpen(false)}
                            className="flex-1 text-center py-4 !bg-wk-gold !text-wk-dark-maroon font-black text-xs uppercase tracking-widest rounded-full hover:opacity-80 transition-opacity"
                        >
                            Belanja Sekarang
                        </Link>
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="flex-1 text-center py-4 bg-gray-100 !text-gray-500 font-black text-xs uppercase tracking-widest rounded-full hover:bg-gray-200 transition-colors"
                        >
                            Mungkin Nanti
                        </button>
                    </div>

                    <p className="mt-8 text-[10px] !text-gray-400 font-medium uppercase tracking-widest">
                        *Syarat dan ketentuan berlaku
                    </p>
                </div>

            </div>
        </div>
    )
}
