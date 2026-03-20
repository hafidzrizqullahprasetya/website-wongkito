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
    spaceBetween: 12,
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
            <section className="py-12 md:py-24 border-b border-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                        
                        {/* Static Collage Images */}
                        <div className="w-full lg:w-1/2">
                            <div className="grid grid-cols-12 grid-rows-12 gap-2 md:gap-3 h-[320px] md:h-[500px]">
                                <div className="col-span-8 row-span-12 rounded-2xl overflow-hidden border border-gray-50 bg-gray-50">
                                    <img src="https://placehold.co/800x1200/f3f4f6/8B1A1A?text=Authentic+Pempek" alt="Dapur" className="w-full h-full object-cover" />
                                </div>
                                <div className="col-span-4 row-span-6 rounded-2xl overflow-hidden border border-gray-50 bg-gray-50 mt-4 md:mt-8">
                                    <img src="https://placehold.co/400x600/f3f4f6/8B1A1A?text=Quality" alt="Produksi" className="w-full h-full object-cover" />
                                </div>
                                <div className="col-span-4 row-span-6 rounded-2xl overflow-hidden border border-gray-50 bg-gray-50 -mb-4 md:-mb-8">
                                    <img src="https://placehold.co/400x600/f3f4f6/8B1A1A?text=Service" alt="Sajian" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Story Content */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left px-2">
                            <span className="inline-block px-3 py-1 !bg-wk-gold !text-wk-dark-maroon text-[9px] font-black uppercase tracking-[0.3em] mb-4 rounded">Sejarah Kami</span>
                            <h2 className="text-3xl md:text-5xl font-black !text-wk-dark-maroon uppercase tracking-tight leading-none mb-6 md:mb-8">
                                Cerita Di Balik <br className="hidden md:block" />
                                <span className="!text-wk-maroon underline decoration-wk-gold/30">Wong Kito</span>
                            </h2>
                            
                            <div className="space-y-4 md:space-y-5 mb-8 md:mb-10">
                                <p className="text-xs md:text-base !text-gray-600 leading-relaxed font-medium">
                                    Pempek "Asli" Wong Kito lahir dari kerinduan akan cita rasa Palembang yang sesungguhnya. Berawal dari dapur rumahan dengan resep turun-temurun di Maguwoharjo, Sleman.
                                </p>
                                <p className="text-xs !text-gray-400 leading-relaxed">
                                    Ikan tenggiri segar, tepung pilihan, dan cuko asli Palembang dengan campuran bawang putih, cabai, gula aren, dan ebi — semua diracik dengan cinta.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 max-w-lg mx-auto lg:mx-0">
                                {keunggulan.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50/50 border border-gray-100 rounded-xl">
                                        <i className="fal fa-check-circle !text-wk-gold text-base" />
                                        <span className="text-[9px] font-black !text-wk-dark-maroon uppercase leading-tight">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 2: TIM ── */}
            <section className="py-14 md:py-24 bg-wk-maroon">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8 md:mb-12">
                        <span className="block text-[10px] font-black !text-wk-gold uppercase tracking-[0.4em] mb-2">Dibalik Layar</span>
                        <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none">Tim Ahli Wong Kito</h2>
                    </div>

                    <Swiper {...teamSwiperOptions} className="!overflow-visible">
                        {teamMembers.map((member, i) => (
                            <SwiperSlide key={i}>
                                <div className="bg-white p-3 rounded-2xl">
                                    <div className="aspect-[4/5] overflow-hidden rounded-xl mb-3">
                                        <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="px-1">
                                        <span className="block text-[8px] font-black !text-wk-gold uppercase tracking-widest mb-1">{member.role}</span>
                                        <h4 className="text-sm font-black !text-wk-dark-maroon leading-tight">{member.name}</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* ── SECTION 3: BOTTOM CTA ── */}
            <section className="py-14 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-center border-2 border-dashed border-gray-100">
                        <div className="inline-block w-8 h-1 !bg-wk-gold mb-6" />
                        <h2 className="text-2xl md:text-4xl font-black !text-wk-dark-maroon uppercase tracking-tight mb-5 leading-tight">
                            Mari Jadi Bagian Dari <br/> Keluarga Wong Kito
                        </h2>
                        <p className="text-xs md:text-sm !text-gray-500 max-w-xl mx-auto mb-8 font-medium">
                            Nikmati kelezatan pempek asli Palembang di Maguwoharjo, Sleman atau pesan langsung ke tempat Anda!
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                            <Link href="/shop" className="w-full sm:w-auto px-8 py-4 !bg-wk-maroon !text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-xl active:scale-95 transition-all outline-none">
                                Mulai Belanja
                            </Link>
                            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-white border border-wk-maroon !text-wk-maroon font-black text-[10px] uppercase tracking-[0.2em] rounded-xl active:scale-95 transition-all outline-none">
                                Hubungi Kami
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}