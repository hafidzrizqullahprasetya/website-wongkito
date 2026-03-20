'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const teamMembers = [
    { name: 'Ibu Sari Dewi',   role: 'Pendiri & Koki Utama', img: 'https://placehold.co/400x500/f3f4f6/8B1A1A?text=Team+Sari' },
    { name: 'Pak Rudi Santoso', role: 'Operasional & Logistik', img: 'https://placehold.co/400x500/f3f4f6/8B1A1A?text=Team+Rudi' },
    { name: 'Anisa Putri',     role: 'Pelayanan Pelanggan',   img: 'https://placehold.co/400x500/f3f4f6/8B1A1A?text=Team+Anisa' },
    { name: 'Budi Prasetya',   role: 'Kurir & Pengiriman',    img: 'https://placehold.co/400x500/f3f4f6/8B1A1A?text=Team+Budi' },
]

const keunggulan = [
    { text: 'Dibuat segar setiap hari — tanpa pengawet' },
    { text: 'Ikan tenggiri segar pilihan kualitas tinggi' },
    { text: 'Cuko asli resep Palembang turun-temurun' },
    { text: 'Tersedia dine-in, take away & pengiriman' },
]

const teamSwiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 1.2,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    breakpoints: {
        480:  { slidesPerView: 2, centeredSlides: false },
        768:  { slidesPerView: 3, centeredSlides: false },
        1024: { slidesPerView: 4, centeredSlides: false },
    },
}

export default function About() {
    return (
        <Layout breadcrumbTitle="Tentang Kami">

            {/* ── SECTION 1: HERO STORY ── */}
            <section className="py-20 lg:py-28 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
                        
                        {/* Collage Images */}
                        <div className="w-full lg:w-1/2 relative">
                            <div className="grid grid-cols-12 grid-rows-12 gap-4 h-[450px] md:h-[550px]">
                                <div className="col-span-8 row-span-12 rounded-3xl overflow-hidden shadow-2xl relative group">
                                    <div className="absolute inset-0 !bg-wk-dark-maroon/10 group-hover:!bg-transparent transition-all duration-700 z-10" />
                                    <img src="https://placehold.co/800x1200/f3f4f6/8B1A1A?text=Dapur+Wong+Kito" alt="Dapur" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2s]" />
                                </div>
                                <div className="col-span-4 row-span-6 rounded-3xl overflow-hidden shadow-xl mt-8">
                                    <img src="https://placehold.co/400x600/f3f4f6/8B1A1A?text=Produksi" alt="Produksi" className="w-full h-full object-cover" />
                                </div>
                                <div className="col-span-4 row-span-6 rounded-3xl overflow-hidden shadow-xl -mb-8">
                                    <img src="https://placehold.co/400x600/f3f4f6/8B1A1A?text=Sajian" alt="Sajian" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            {/* Experience Badge */}
                            <div className="absolute -bottom-6 -right-6 md:right-0 !bg-wk-gold p-6 rounded-2xl shadow-2xl animate-bounce-slow z-20">
                                <p className="text-3xl font-black !text-wk-dark-maroon leading-none">100%</p>
                                <p className="text-[10px] font-black uppercase tracking-widest !text-wk-dark-maroon mt-1">Ikan Tenggiri</p>
                            </div>
                        </div>

                        {/* Story Content */}
                        <div className="w-full lg:w-1/2">
                            <span className="inline-block px-4 py-1.5 !bg-wk-gold !text-wk-dark-maroon text-[10px] font-black uppercase tracking-[0.3em] mb-6 rounded-lg shadow-sm">Sejarah Kami</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black !text-wk-dark-maroon uppercase tracking-tighter leading-[0.9] mb-10">
                                Cerita Di Balik <br className="hidden md:block" />
                                <span className="!text-wk-maroon">Wong Kito</span>
                            </h2>
                            
                            <div className="space-y-6 mb-12">
                                <p className="text-base md:text-lg !text-gray-600 leading-relaxed font-medium">
                                    Pempek "Asli" Wong Kito lahir dari kerinduan akan cita rasa Palembang yang sesungguhnya. Berawal dari dapur rumahan dengan resep turun-temurun, kami hadir di Maguwoharjo, Sleman untuk menyajikan pengalaman makan pempek yang autentik.
                                </p>
                                <p className="text-sm !text-gray-400 leading-relaxed">
                                    Kami percaya bahwa pempek yang baik dimulai dari bahan yang baik. Ikan tenggiri segar, tepung pilihan, dan cuko asli Palembang dengan campuran bawang putih, cabai, gula aren, dan ebi — semua diracik dengan cinta untuk keluarga Indonesia.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {keunggulan.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-wk-gold/40 transition-all">
                                        <i className="fal fa-check-circle !text-wk-gold text-lg group-hover:scale-110 transition-transform" />
                                        <span className="text-[11px] font-black !text-wk-dark-maroon uppercase leading-tight">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 2: TIM AHLI ── */}
            <section className="py-24 bg-wk-maroon relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                    <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-8 border-white" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border-8 border-white" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                        <div className="max-w-xl">
                            <span className="block text-[11px] font-black !text-wk-gold uppercase tracking-[0.4em] mb-4 text-center md:text-left">Dibalik Layar</span>
                            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-none text-center md:text-left">Tim Ahli Wong Kito</h2>
                        </div>
                        <div className="flex gap-3 justify-center md:justify-end">
                            <button className="team-prev w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:!bg-wk-gold hover:!text-wk-dark-maroon transition-all">
                                <i className="fal fa-long-arrow-left" />
                            </button>
                            <button className="team-next w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:!bg-wk-gold hover:!text-wk-dark-maroon transition-all">
                                <i className="fal fa-long-arrow-right" />
                            </button>
                        </div>
                    </div>

                    <Swiper 
                        {...teamSwiperOptions}
                        navigation={{ nextEl: '.team-next', prevEl: '.team-prev' }}
                        className="!overflow-visible"
                    >
                        {teamMembers.map((member, i) => (
                            <SwiperSlide key={i}>
                                <div className="group bg-white/5 backdrop-blur-sm p-4 rounded-3xl border border-white/10 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                                    <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 shadow-xl">
                                        <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="px-2 pb-2">
                                        <span className="block text-[10px] font-black !text-wk-gold uppercase tracking-widest mb-1 group-hover:!text-wk-maroon">{member.role}</span>
                                        <h4 className="text-lg font-black text-white group-hover:!text-wk-dark-maroon transition-colors">{member.name}</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* ── SECTION 3: BOTTOM PROMO ── */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto !bg-gray-50 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden border border-gray-100">
                        {/* Decorative background logo ghost */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none">
                            <img src="/assets/img/logo/logo.png" alt="" className="w-full object-contain" />
                        </div>

                        <div className="relative z-10">
                            <span className="inline-block w-12 h-1.5 !bg-wk-gold rounded-full mb-8" />
                            <h2 className="text-3xl md:text-5xl font-black !text-wk-dark-maroon uppercase tracking-tight mb-8 leading-tight">
                                Mari Jadi Bagian Dari <br/> Keluarga Wong Kito
                            </h2>
                            <p className="text-base !text-gray-500 max-w-2xl mx-auto mb-12 font-medium">
                                Nikmati kelezatan pempek asli Palembang di Maguwoharjo, Sleman atau pesan langsung ke tempat Anda!
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Link href="/shop" className="w-full sm:w-auto px-10 py-5 !bg-wk-maroon !text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-wk-maroon/20 hover:scale-105 transition-all">
                                    Mulai Belanja
                                </Link>
                                <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-white border-2 border-wk-maroon !text-wk-maroon font-black text-[11px] uppercase tracking-[0.2em] rounded-2xl hover:bg-gray-50 transition-all">
                                    Hubungi Kami
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}