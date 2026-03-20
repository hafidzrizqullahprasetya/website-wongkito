import Link from "next/link"
import Countdown from "../elements/CountDown"

export default function DealProduct() {
    const endDateTime = new Date()
    endDateTime.setDate(endDateTime.getDate() + 2)

    return (
        <section className="py-14 bg-white">
            <div className="container mx-auto px-4">
                <div className="rounded-3xl !bg-wk-maroon overflow-hidden">
                    <div className="flex flex-col lg:flex-row items-stretch">

                        {/* Left: Product Image */}
                        <div className="lg:w-5/12 w-full flex items-center justify-center py-12 lg:py-0 px-8 lg:min-h-[520px] relative">
                            {/* Pulse Circle background - No Shadow */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full !bg-white/5 animate-pulse" />
                            </div>
                            <div className="relative z-10 flex items-center justify-center">
                                <img
                                    src="https://placehold.co/600x600/f3f4f6/8B1A1A?text=Special+Deal"
                                    alt="Paket Spesial Pempek"
                                    className="w-64 sm:w-72 lg:w-[410px] object-contain relative z-10"
                                />
                                {/* Price badge - No Shadow */}
                                <div className="absolute -bottom-2 -right-4 !bg-wk-gold px-5 py-4 rounded-2xl border-2 border-wk-maroon transform rotate-3 z-20">
                                    <span className="block text-[10px] font-black !text-wk-dark-maroon uppercase tracking-wider mb-0.5">Mulai</span>
                                    <span className="block text-xl font-black !text-wk-dark-maroon leading-none tracking-tight">Rp 49rb</span>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Content (NO Shadows) */}
                        <div className="lg:w-7/12 w-full py-10 lg:py-16 px-8 lg:px-20 flex flex-col items-center text-center justify-center">
                            
                            <span className="block text-[11px] font-black !text-wk-gold uppercase tracking-[0.3em] mb-4">
                                Penawaran Hari Ini
                            </span>
                            
                            <div className="flex items-baseline justify-center gap-3 mb-2">
                                <h3 className="text-4xl lg:text-6xl font-black !text-white leading-none tracking-tight uppercase">Rp 49.000</h3>
                                <span className="text-sm lg:text-lg !text-white/30 line-through font-bold">Rp 65.000</span>
                            </div>

                            <h2 className="text-xl lg:text-3xl font-black !text-white uppercase tracking-tight leading-tight mb-6">
                                Paket Ampera Special <br/>
                                <span className="!text-wk-gold italic">20 Biji Mix</span>
                            </h2>

                            <p className="text-xs lg:text-sm !text-white/50 leading-relaxed max-w-md mb-8">
                                Isi 20 biji pempek mix pilihan (Kapal Selam, Lenjer, Adaan, Kulit) + 2 porsi cuko asli khas Palembang. Dibuat fresh setiap hari tanpa pengawet.
                            </p>

                            {/* Progress Bar (Centered, No Shadows) */}
                            <div className="w-full max-w-sm mb-9 px-2 mx-auto">
                                <div className="flex justify-between items-end mb-3">
                                    <span className="text-[10px] font-black !text-wk-gold uppercase tracking-widest">Stok Tersisa</span>
                                    <span className="text-[10px] font-black !text-wk-gold uppercase tracking-widest font-mono">75%</span>
                                </div>
                                <div className="w-full h-3 rounded-full !bg-white/10 overflow-hidden">
                                    <div className="h-full !bg-wk-gold rounded-full w-[75%]"></div>
                                </div>
                            </div>

                            {/* Countdown Wrapper (Centered, No Shadows) */}
                            <div className="mb-10 w-full max-w-sm mx-auto">
                                <div className="py-5 px-6 !bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                    <p className="text-[9px] font-black !text-wk-gold uppercase tracking-[0.2em] mb-5">Sisa Waktu Promo</p>
                                    <Countdown endDateTime={endDateTime.getTime()} />
                                </div>
                            </div>

                            {/* CTA Button (Larger Font, Better Padding, No Shadows) */}
                            <div className="flex justify-center w-full">
                                <Link href="/shop" className="group flex items-center justify-center gap-2 px-8 sm:px-10 py-3 sm:py-3.5 !bg-wk-gold !text-wk-dark-maroon font-black text-sm sm:text-base uppercase tracking-wider rounded-xl transition-all hover:brightness-110 active:scale-95">
                                    Pesan Sekarang
                                    <i className="fas fa-shopping-cart text-base"></i>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
