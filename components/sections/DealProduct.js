import Link from "next/link"
import Countdown from "../elements/CountDown"

export default function DealProduct() {
    const endDateTime = new Date()
    endDateTime.setDate(endDateTime.getDate() + 2)

    return (
        <section className="py-14 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="rounded-3xl !bg-wk-maroon overflow-hidden border-2 border-white/5">
                    <div className="flex flex-col lg:flex-row items-stretch">

                        {/* Column 1: Image & Urgency (Stok & Countdown for Laptop) */}
                        <div className="lg:w-1/2 w-full flex flex-col items-center justify-center py-12 lg:py-20 px-8 relative border-b lg:border-b-0 lg:border-r border-white/5">
                            
                            {/* Product Image & Badge */}
                            <div className="relative mb-12 lg:mb-16 flex items-center justify-center w-full">
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-full !bg-white/5 animate-pulse" />
                                </div>
                                <div className="relative z-10">
                                    <img
                                        src="https://placehold.co/600x600/f3f4f6/8B1A1A?text=Special+Deal"
                                        alt="Paket Spesial Pempek"
                                        className="w-60 sm:w-72 lg:w-[420px] object-contain relative z-10"
                                    />
                                    <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 !bg-wk-gold px-5 py-3 lg:px-6 lg:py-4 rounded-2xl border-4 border-wk-maroon transform rotate-3 z-20">
                                        <span className="block text-[10px] font-black !text-wk-dark-maroon uppercase tracking-wider mb-1">Mulai</span>
                                        <span className="block text-xl lg:text-2xl font-black !text-wk-dark-maroon leading-none tracking-tight">Rp 49rb</span>
                                    </div>
                                </div>
                            </div>

                            {/* Urgency Elements: ONLY VISIBLE ON LAPTOP */}
                            <div className="hidden lg:flex flex-col w-full max-w-sm gap-8 relative z-30">
                                {/* Progress Bar */}
                                <div className="px-2">
                                    <div className="flex justify-between items-end mb-3">
                                        <span className="text-[10px] font-black !text-wk-gold uppercase tracking-widest px-2 py-0.5 rounded border border-wk-gold/20">Stok Tersisa</span>
                                        <span className="text-xs font-black !text-white tracking-widest">75 / 100</span>
                                    </div>
                                    <div className="w-full h-2 rounded-full !bg-white/10 overflow-hidden">
                                        <div className="h-full !bg-wk-gold rounded-full w-[75%]"></div>
                                    </div>
                                </div>

                                {/* Countdown */}
                                <div className="py-6 px-6 !bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                                    <p className="text-[9px] font-black !text-wk-gold uppercase tracking-[0.3em] mb-6 text-center lg:text-left">Sisa Waktu Promo</p>
                                    <Countdown endDateTime={endDateTime.getTime()} />
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Info & Call to Action */}
                        <div className="lg:w-1/2 w-full py-12 lg:py-24 px-8 lg:px-20 flex flex-col items-start text-left justify-center">
                            
                            <span className="block text-[10px] lg:text-[11px] font-bold !text-wk-gold uppercase tracking-[0.4em] mb-6">
                                Penawaran Spesial Hari Ini
                            </span>
                            
                            <div className="flex items-baseline gap-3 mb-6">
                                <h3 className="text-4xl lg:text-7xl font-black !text-white leading-none tracking-tighter uppercase">Rp 49.000</h3>
                                <span className="text-sm lg:text-xl !text-white/20 line-through font-bold">Rp 65.000</span>
                            </div>

                            <h2 className="text-xl lg:text-3xl font-black !text-white uppercase tracking-tight leading-tight mb-8">
                                Paket Ampera Special <br/>
                                <span className="!text-wk-gold italic">Isi 20 Biji Mix</span>
                            </h2>

                            <p className="text-xs lg:text-sm !text-white/40 leading-relaxed max-w-sm mb-12">
                                Isi 20 biji pempek mix pilihan (Kapal Selam, Lenjer, Adaan, Kulit) + 2 porsi cuko asli khas Palembang. Dibuat fresh setiap hari tanpa pengawet.
                            </p>

                            {/* Urgency Elements: ONLY VISIBLE ON MOBILE */}
                            <div className="lg:hidden w-full max-w-sm space-y-10 mb-12">
                                <div className="">
                                    <div className="flex justify-between items-end mb-3">
                                        <span className="text-[10px] font-black !text-wk-gold uppercase tracking-widest px-2 py-0.5 rounded border border-wk-gold/20">Stok Tersisa</span>
                                        <span className="text-xs font-black !text-white tracking-widest">75 / 100</span>
                                    </div>
                                    <div className="w-full h-2 rounded-full !bg-white/10 overflow-hidden">
                                        <div className="h-full !bg-wk-gold rounded-full w-[75%]"></div>
                                    </div>
                                </div>
                                <div className="py-6 px-6 !bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                                    <p className="text-[9px] font-black !text-wk-gold uppercase tracking-[0.3em] mb-6 text-center">Sisa Waktu Promo</p>
                                    <Countdown endDateTime={endDateTime.getTime()} />
                                </div>
                            </div>

                            {/* Order Button */}
                            <div className="w-full">
                                <Link href="/shop" className="group flex items-center justify-center gap-3 w-full sm:w-auto sm:px-16 py-4 lg:py-5 !bg-wk-gold !text-wk-dark-maroon font-black text-sm lg:text-base uppercase tracking-widest rounded-2xl transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-black/10">
                                    Pesan Sekarang
                                    <i className="fas fa-shopping-basket text-lg"></i>
                                </Link>
                                <p className="mt-5 text-[9px] font-bold !text-white/20 uppercase tracking-[0.2em] lg:text-left text-center">
                                    *Promo berlaku selama persediaan masih ada
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
