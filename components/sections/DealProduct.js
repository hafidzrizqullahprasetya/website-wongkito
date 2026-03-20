import Link from "next/link"
import Countdown from "../elements/CountDown"

export default function DealProduct() {
    const endDateTime = new Date()
    endDateTime.setDate(endDateTime.getDate() + 2)

    return (
        <section className="py-14 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="rounded-[40px] !bg-wk-maroon overflow-hidden shadow-xl border border-wk-maroon">
                    <div className="flex flex-col lg:flex-row items-center">

                        {/* Left: Product Image */}
                        <div className="lg:w-1/2 w-full flex items-center justify-center py-12 lg:py-16 px-6 lg:px-12 relative">
                            {/* Decorative pulsating circle */}
                            <div className="absolute w-72 h-72 lg:w-[450px] lg:h-[450px] rounded-full !bg-white/5 animate-pulse" />
                            
                            <div className="relative z-10 w-full flex justify-center">
                                <img
                                    src="https://placehold.co/800x800/f3f4f6/8B1A1A?text=Special+Deal"
                                    alt="Paket Spesial Pempek"
                                    className="w-72 lg:w-[400px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                                />
                                {/* Price badge */}
                                <div className="absolute -bottom-2 -right-2 sm:right-0 !bg-wk-gold px-5 py-4 lg:px-6 lg:py-4 rounded-2xl shadow-xl transform rotate-3">
                                    <span className="block text-[11px] font-black !text-wk-dark-maroon uppercase tracking-widest mb-1">Mulai</span>
                                    <span className="block text-2xl font-black !text-wk-dark-maroon leading-none">Rp 49rb</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Deal Info */}
                        <div className="lg:w-1/2 w-full py-12 px-8 sm:px-12 lg:px-16 text-center lg:text-left">
                            
                            <span className="inline-block text-[11px] font-black !text-wk-gold uppercase tracking-[0.3em] mb-4">
                                Penawaran Hari Ini
                            </span>

                            <div className="flex items-baseline justify-center lg:justify-start gap-3 mb-6">
                                <span className="text-4xl sm:text-5xl font-black !text-white leading-none">
                                    Rp 49.000
                                </span>
                                <del className="text-base !text-white/40 font-semibold italic">
                                    Rp 65.000
                                </del>
                            </div>

                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black !text-white uppercase leading-tight mb-5">
                                <Link href="/shop/1" className="hover:!text-wk-gold transition-colors duration-300">
                                    Paket Ampera Special<br />
                                    <span className="!text-wk-gold">20 Biji Mix Palembang</span>
                                </Link>
                            </h2>

                            <p className="text-sm sm:text-base !text-white/60 leading-relaxed mb-8 max-w-sm mx-auto lg:mx-0">
                                Isi 20 biji pempek mix pilihan (Kapal Selam, Lenjer, Adaan, Kulit) + 2 porsi cuko asli khas Palembang huenak tenan pokoknya.
                            </p>

                            {/* Stock progress */}
                            <div className="mb-8 w-full max-w-xs mx-auto lg:mx-0">
                                <div className="flex justify-between text-xs font-bold !text-white/60 mb-2.5">
                                    <span>Stok Tersisa</span>
                                    <span className="!text-wk-gold">75%</span>
                                </div>
                                <div className="w-full h-2 !bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-3/4 !bg-wk-gold rounded-full transition-all duration-1000" />
                                </div>
                            </div>

                            {/* Countdown container */}
                            <div className="mb-10 py-5 px-6 sm:px-8 !bg-white/10 rounded-[2rem] backdrop-blur-sm inline-block">
                                <p className="text-[10px] font-black !text-wk-gold uppercase tracking-widest mb-4">
                                    Sisa Waktu Promo
                                </p>
                                <Countdown endDateTime={endDateTime.getTime()} />
                            </div>

                            {/* CTA Button */}
                            <div className="flex justify-center lg:justify-start">
                                <Link
                                    href="/shop/1"
                                    className="inline-flex items-center gap-3 px-10 py-5 !bg-wk-gold !text-wk-dark-maroon font-black text-xs sm:text-sm uppercase tracking-widest rounded-full hover:!bg-white transition-all duration-300 shadow-lg"
                                >
                                    Pesan Sekarang
                                    <i className="fal fa-long-arrow-right text-base" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
