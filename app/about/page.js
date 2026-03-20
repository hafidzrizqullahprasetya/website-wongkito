'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const teamMembers = [
    { name: 'Ibu Sari Dewi',   role: 'Pendiri & Koki Utama', img: 'https://placehold.co/400x400/f3f4f6/8B1A1A?text=Team+Sari' },
    { name: 'Pak Rudi Santoso', role: 'Operasional & Logistik', img: 'https://placehold.co/400x400/f3f4f6/8B1A1A?text=Team+Rudi' },
    { name: 'Anisa Putri',     role: 'Pelayanan Pelanggan',   img: 'https://placehold.co/400x400/f3f4f6/8B1A1A?text=Team+Anisa' },
    { name: 'Budi Prasetya',   role: 'Kurir & Pengiriman',    img: 'https://placehold.co/400x400/f3f4f6/8B1A1A?text=Team+Budi' },
]

const keunggulan = [
    { icon: 'fal fa-check', text: 'Dibuat segar setiap hari — tanpa pengawet' },
    { icon: 'fal fa-check', text: 'Ikan tenggiri segar pilihan berkualitas tinggi' },
    { icon: 'fal fa-check', text: 'Cuko asli resep Palembang turun-temurun' },
    { icon: 'fal fa-check', text: 'Tersedia dine-in, take away & pengiriman' },
]

const features = [
    {
        label: 'Keunggulan #01',
        title: 'Resep Autentik Palembang',
        desc: 'Kami menggunakan resep asli Palembang yang telah disempurnakan selama bertahun-tahun. Setiap pempek dibuat dengan tangan, menggunakan ikan tenggiri segar dan bumbu pilihan — memastikan cita rasa yang konsisten dan autentik di setiap gigitan.',
        img: 'https://placehold.co/800x600/f3f4f6/8B1A1A?text=Keunggulan+1',
        imgRight: false,
    },
    {
        label: 'Keunggulan #02',
        title: 'Mudah Dipesan, Cepat Diterima',
        desc: 'Pesan lewat WhatsApp, ShopeeFood, atau GrabFood — kami siap antar ke lokasi Anda. Tersedia juga layanan dine-in dan take away langsung di toko kami di Maguwoharjo, Sleman. Nikmati pempek hangat segar dari dapur kami!',
        img: 'https://placehold.co/800x600/f3f4f6/8B1A1A?text=Keunggulan+2',
        imgRight: true,
    },
]

const teamSwiperOptions = {
    modules: [Autoplay],
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    breakpoints: {
        640:  { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
    },
}

export default function About() {
    return (
        <Layout breadcrumbTitle="Tentang Kami">

            {/* ── Section 1: Story ── */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">

                    {/* Hero images */}
                    <div className="relative grid grid-cols-2 gap-4 mb-14">
                        <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                            <img src="https://placehold.co/800x600/f3f4f6/8B1A1A?text=Hero+1" alt="Dapur Wong Kito" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                            <img src="https://placehold.co/800x600/f3f4f6/8B1A1A?text=Hero+2" alt="Pempek Wong Kito" className="w-full h-full object-cover" />
                        </div>
                        {/* Logo center badge */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-20 h-20 rounded-full !bg-white shadow-xl flex items-center justify-center p-2 border-2 border-wk-gold/30">
                            <Link href="/">
                                <img src="https://placehold.co/80x80/white/FFB800?text=Logo" alt="Logo Wong Kito" className="w-full object-contain" />
                            </Link>
                        </div>
                    </div>

                    {/* Story header */}
                    <div className="mb-10">
                        <span className="block text-[11px] font-black !text-wk-gold uppercase tracking-[0.3em] mb-2">Tentang Kami</span>
                        <h2 className="text-3xl font-black !text-wk-dark-maroon uppercase tracking-tight leading-tight">
                            Cerita di Balik<br />Pempek Wong Kito
                        </h2>
                    </div>

                    {/* 3 col: 2 paragraf + checklist */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        <p className="text-sm !text-gray-500 leading-relaxed">
                            Pempek "Asli" Wong Kito lahir dari kerinduan akan cita rasa Palembang yang sesungguhnya. Berawal dari dapur rumahan dengan resep turun-temurun, kami hadir di Maguwoharjo, Sleman untuk menyajikan pengalaman makan pempek yang autentik — dibuat segar setiap hari dengan bahan-bahan pilihan berkualitas tinggi.
                        </p>
                        <p className="text-sm !text-gray-500 leading-relaxed">
                            Kami percaya bahwa pempek yang baik dimulai dari bahan yang baik. Ikan tenggiri segar, tepung pilihan, dan cuko asli Palembang dengan campuran bawang putih, cabai, gula aren, dan ebi — semua diracik dengan cinta. Tersedia layanan dine-in, take away, dan pengiriman melalui WhatsApp maupun platform ojek online favorit Anda.
                        </p>
                        <ul className="space-y-3">
                            {keunggulan.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full !bg-wk-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <i className="fal fa-check text-[10px] !text-wk-maroon" />
                                    </div>
                                    <span className="text-sm !text-gray-500 leading-relaxed">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── Section 2: Tim ── */}
            <section className="py-14 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <span className="block text-[11px] font-black !text-wk-gold uppercase tracking-[0.3em] mb-2">Tim Kami</span>
                        <h2 className="text-3xl font-black !text-wk-dark-maroon uppercase tracking-tight">Di Balik Dapur Wong Kito</h2>
                    </div>

                    <Swiper {...teamSwiperOptions}>
                        {[...teamMembers, ...teamMembers].map((member, i) => (
                            <SwiperSlide key={i}>
                                <div className="group rounded-2xl overflow-hidden border border-gray-100 bg-white">
                                    <div className="aspect-square overflow-hidden">
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                                        />
                                    </div>
                                    <div className="p-4 border-t border-gray-100">
                                        <span className="block text-[10px] font-black !text-wk-gold uppercase tracking-widest mb-1">{member.role}</span>
                                        <h4 className="text-sm font-black !text-wk-dark-maroon">{member.name}</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* ── Section 3: Keunggulan baris alt ── */}
            <section className="py-14 bg-white">
                <div className="container mx-auto px-4 space-y-16">
                    {features.map((feat, i) => (
                        <div
                            key={i}
                            className={`flex flex-col lg:flex-row items-center gap-12 ${feat.imgRight ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Image */}
                            <div className="lg:w-1/2 w-full rounded-2xl overflow-hidden shadow-sm">
                                <img src={feat.img} alt={feat.title} className="w-full aspect-[4/3] object-cover" />
                            </div>

                            {/* Text */}
                            <div className="lg:w-1/2 w-full">
                                <span className="block text-[11px] font-black !text-wk-gold uppercase tracking-[0.3em] mb-3">{feat.label}</span>
                                <h2 className="text-2xl font-black !text-wk-dark-maroon uppercase tracking-tight leading-tight mb-5">
                                    {feat.title}
                                </h2>
                                <p className="text-sm !text-gray-500 leading-relaxed mb-8">{feat.desc}</p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-7 py-3 !bg-wk-maroon !text-white font-black text-xs uppercase tracking-widest rounded-xl hover:opacity-80 transition-opacity"
                                >
                                    Hubungi Kami
                                    <i className="fal fa-long-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </Layout>
    )
}