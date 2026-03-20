import Link from "next/link"
import Countdown from "../elements/CountDown"

export default function DealProduct() {
    const endDateTime = new Date()
    endDateTime.setDate(endDateTime.getDate() + 2)

    return (
        <section className="py-14 bg-white">
            <div className="container mx-auto px-4">
                <div className="rounded-3xl !bg-wk-maroon overflow-visible">
                    <div className="flex flex-col lg:flex-row items-stretch">

                        {/* Left: Product Image */}
                        <div className="lg:w-5/12 w-full flex items-end justify-center pt-10 pb-0 px-8 relative">
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-72 h-72 rounded-full !bg-white/5 animate-pulse" />
                            </div>
                            <div className="relative z-10">
                                <img
                                    src="https://placehold.co/600x600/f3f4f6/8B1A1A?text=Special+Deal"
                                    alt="Paket Spesial Pempek"
                                    className="w-64 sm:w-72 lg:w-80 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] relative z-10"
                                />
                                {/* Price badge */}
                                <div className="absolute bottom-4 -right-2 !bg-wk-gold px-4 py-3 rounded-2xl shadow-lg transform rotate-3 z-20">
                                    <span className="block text-[9px] font-black !text-wk-dark-maroon uppercase tracking-wider mb-0.5">Mulai</span>
                                    <span className="block text-lg font-black !text-wk-dark-maroon leading-none">Rp 49rb</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Deal Info */}
                        <div className="lg:w-7/12 w-full py-10 px-8 sm:px-10 lg:px-12">

                            <span className="text-[10px] font-black !text-wk-gold uppercase tracking-[0.3em] mb-3 block">
                                Penawaran Hari Ini
                            </span>

                            <div className="flex items-baseline gap-3 mb-4">
                                <span className="text-3xl sm:text-4xl font-black !text-white">Rp 49.000</span>
                                <del className="text-sm !text-white/40 font-semibold">Rp 65.000</del>
                            </div>

                            <h2 className="text-xl sm:text-2xl font-black !text-white uppercase leading-tight mb-4">
                                <Link href="/shop/1" className="hover:opacity-80 transition-opacity">
                                    Paket Ampera Special<br />
                                    <span className="!text-wk-gold">20 Biji Mix</span>
                                </Link>
                            </h2>

                            <p className="text-sm !text-white/60 leading-relaxed mb-6 max-w-sm">
                                Isi 20 biji pempek mix pilihan (Kapal Selam, Lenjer, Adaan, Kulit) + 2 porsi cuko asli khas Palembang.
                            </p>

                            {/* Stock progress */}
                            <div className="mb-6 max-w-xs">
                                <div className="flex justify-between text-[10px] font-bold !text-white/60 mb-2">
                                    <span>Stok Tersisa</span>
                                    <span className="!text-wk-gold">75%</span>
                                </div>
                                <div className="w-full h-2 !bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-3/4 !bg-wk-gold rounded-full" />
                                </div>
                            </div>

                            {/* Countdown */}
                            <div className="mb-7 py-4 px-4 sm:px-5 !bg-white/5 border border-white/10 rounded-2xl block w-full max-w-xs">
                                <p className="text-[9px] font-black !text-wk-gold uppercase tracking-widest mb-3">
                                    Sisa Waktu Promo
                                </p>
                                <Countdown endDateTime={endDateTime.getTime()} />
                            </div>

                            {/* CTA Button */}
                            <div>
                                <Link
                                    href="/shop/1"
                                    className="inline-flex items-center gap-2 px-6 py-3 !bg-wk-gold !text-wk-dark-maroon font-black text-xs uppercase tracking-widest rounded-full hover:opacity-80 transition-opacity"
                                >
                                    Pesan Sekarang
                                    <i className="fal fa-arrow-right" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
