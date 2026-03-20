import Link from "next/link"
import Countdown from "../elements/CountDown"

export default function DealProduct() {
    const endDateTime = new Date()
    endDateTime.setDate(endDateTime.getDate() + 2)

    return (
        <section className="py-12 md:py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="rounded-[40px] !bg-wk-maroon overflow-hidden shadow-2xl">
                    <div className="flex flex-col lg:flex-row items-center">

                        {/* Left: Product Image — Scaled and centered properly */}
                        <div className="lg:w-1/2 w-full flex items-center justify-center p-8 sm:p-12 lg:p-20 relative">
                            {/* Decorative pulsating circle */}
                            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] rounded-full !bg-white/5 animate-pulse" />
                            
                            <div className="relative z-10">
                                <img
                                    src="https://placehold.co/800x800/f3f4f6/8B1A1A?text=Special+Deal"
                                    alt="Paket Spesial Pempek"
                                    className="w-64 sm:w-80 lg:w-[450px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
                                />
                                {/* Price badge with responsive scaling */}
                                <div className="absolute -bottom-2 -right-4 sm:bottom-0 sm:-right-8 !bg-wk-gold px-5 py-3 sm:px-7 sm:py-5 rounded-2xl shadow-xl transform rotate-3 scale-90 sm:scale-100">
                                    <span className="block text-[9px] sm:text-[11px] font-black !text-wk-dark-maroon uppercase tracking-widest mb-1">Mulai</span>
                                    <span className="block text-xl sm:text-2xl font-black !text-wk-dark-maroon leading-none">Rp 49rb</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Deal Info — Responsive text alignment */}
                        <div className="lg:w-1/2 w-full py-10 px-8 sm:px-12 lg:px-14 lg:py-16 text-center lg:text-left flex flex-col items-center lg:items-start transition-all">
                            
                            {/* Promo Label */}
                            <span className="inline-block px-3 py-1 rounded-md !bg-white/10 text-[10px] font-black !text-wk-gold uppercase tracking-[0.3em] mb-6 border border-white/5">
                                Penawaran Terbatas
                            </span>

                            {/* Price Scaling */}
                            <div className="flex items-baseline justify-center lg:justify-start gap-4 mb-6">
                                <span className="text-4xl sm:text-5xl lg:text-6xl font-black !text-white leading-none">
                                    Rp 49k
                                </span>
                                <del className="text-base sm:text-lg !text-white/30 font-semibold italic">
                                    Rp 65k
                                </del>
                            </div>

                            {/* Responsive Title */}
                            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black !text-white uppercase leading-tight mb-6">
                                <Link href="/shop/1" className="hover:!text-wk-gold transition-colors duration-300">
                                    Paket Ampera Special<br />
                                    <span className="!text-wk-gold">20 Biji Mix Palembang</span>
                                </Link>
                            </h2>

                            {/* Description */}
                            <p className="text-sm sm:text-base !text-white/70 leading-relaxed mb-8 max-w-md lg:max-w-sm">
                                Perpaduan sempurna pempek pilihan dengan citarasa otentik. Isi 20 biji mix (Kapal Selam, Lenjer, Adaan, Kulit) + Cuko Pedas Mantap.
                            </p>

                            {/* Progress bar — better alignment on mobile */}
                            <div className="mb-10 w-full max-w-sm">
                                <div className="flex justify-between text-xs font-black !text-white/60 mb-3 uppercase tracking-widest">
                                    <span>Stok Tersisa</span>
                                    <span className="!text-wk-gold">75%</span>
                                </div>
                                <div className="w-full h-3 !bg-white/10 rounded-full overflow-hidden border border-white/5">
                                    <div className="h-full w-3/4 !bg-wk-gold rounded-full shadow-[0_0_15px_rgba(255,215,0,0.3)] anim-progress" />
                                </div>
                            </div>

                            {/* Countdown container — padding and scaling */}
                            <div className="mb-10 py-6 px-4 sm:px-8 !bg-white/5 rounded-[2.5rem] border border-white/10 backdrop-blur-md inline-block">
                                <p className="text-[10px] font-black !text-wk-gold uppercase tracking-widest mb-4">
                                    Promo Berakhir Dalam
                                </p>
                                <div className="transform scale-90 sm:scale-100 origin-center lg:origin-left">
                                    <Countdown endDateTime={endDateTime.getTime()} />
                                </div>
                            </div>

                            {/* Heavyweight CTA Button */}
                            <div className="w-full sm:w-auto">
                                <Link
                                    href="/shop/1"
                                    className="inline-flex items-center justify-center gap-4 px-10 py-5 !bg-wk-gold !text-wk-dark-maroon font-black text-xs sm:text-sm uppercase tracking-widest rounded-full hover:!bg-white hover:scale-105 transition-all duration-300 shadow-xl"
                                >
                                    Dapatkan Promonya
                                    <i className="fal fa-shopping-bag text-lg" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
