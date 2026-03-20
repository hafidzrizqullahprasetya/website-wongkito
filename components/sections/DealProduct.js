import Link from "next/link"
import Countdown from "../elements/CountDown"

export default function DealProduct() {
    const endDateTime = new Date()
    endDateTime.setDate(endDateTime.getDate() + 2)

    return (
        <section className="py-14 bg-white">
            <div className="container mx-auto px-4">
                <div className="rounded-3xl !bg-wk-maroon overflow-hidden">
                    <div className="flex flex-col lg:flex-row items-center">

                        {/* Left: Product Image */}
                        <div className="lg:w-1/2 w-full flex items-center justify-center py-12 lg:py-20 px-8 relative">
                            {/* Decorative circle bg */}
                            <div className="absolute w-80 h-80 lg:w-[450px] lg:h-[450px] rounded-full !bg-white/5 animate-pulse" />
                            <div className="relative z-10">
                                <img
                                    src="https://placehold.co/800x800/f3f4f6/8B1A1A?text=Special+Deal"
                                    alt="Paket Spesial Pempek"
                                    className="w-80 lg:w-[400px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                                />
                                {/* Price badge */}
                                <div className="absolute -bottom-2 -right-4 !bg-wk-gold px-6 py-4 rounded-2xl shadow-xl transform rotate-3">
                                    <span className="block text-[11px] font-black !text-wk-dark-maroon uppercase tracking-widest mb-1">Mulai</span>
                                    <span className="block text-2xl font-black !text-wk-dark-maroon leading-none">Rp 49rb</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Deal Info */}
                        <div className="lg:w-1/2 w-full py-10 px-8 lg:px-12">
                            {/* Label */}
                            <span className="block text-[11px] font-black !text-wk-gold uppercase tracking-[0.3em] mb-4">
                                Penawaran Hari Ini
                            </span>

                            {/* Price */}
                            <div className="flex items-baseline gap-3 mb-5">
                                <span className="text-4xl font-black !text-white">Rp 49.000</span>
                                <del className="text-base !text-white/40 font-semibold">Rp 65.000</del>
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl font-black !text-white uppercase leading-tight mb-4">
                                <Link href="/shop/1" className="hover:opacity-80 transition-opacity">
                                    Paket Ampera Special<br />
                                    <span className="!text-wk-gold">20 Biji Mix</span>
                                </Link>
                            </h2>

                            {/* Desc */}
                            <p className="text-sm !text-white/60 leading-relaxed mb-8 max-w-sm">
                                Isi 20 biji pempek mix pilihan (Kapal Selam, Lenjer, Adaan, Kulit) + 2 porsi cuko asli khas Palembang. Cocok untuk keluarga atau acara kumpul-kumpul.
                            </p>

                            {/* Stock progress */}
                            <div className="mb-6">
                                <div className="flex justify-between text-xs font-bold !text-white/60 mb-2">
                                    <span>Stok Tersisa</span>
                                    <span>75%</span>
                                </div>
                                <div className="w-full h-2 !bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-3/4 !bg-wk-gold rounded-full" />
                                </div>
                            </div>

                            {/* Countdown */}
                            <div className="mb-8 p-5 !bg-white/10 rounded-2xl backdrop-blur-sm inline-block">
                                <p className="text-[10px] font-black !text-wk-gold uppercase tracking-widest mb-3">
                                    Sisa Waktu Promo
                                </p>
                                <Countdown endDateTime={endDateTime.getTime()} />
                            </div>

                            {/* CTA Button */}
                            <div>
                                <Link
                                    href="/shop/1"
                                    className="inline-flex items-center gap-3 px-8 py-4 !bg-wk-gold !text-wk-dark-maroon font-black text-xs uppercase tracking-widest rounded-full hover:opacity-80 transition-opacity"
                                >
                                    Pesan Sekarang
                                    <i className="fal fa-long-arrow-right" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
