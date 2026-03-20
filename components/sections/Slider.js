'use client'
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"

const swiperOptions = {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.slider-pagination',
        clickable: true,
    },
}

const slides = [
    {
        label: 'Paket Unggulan',
        title: 'Paket Ampera',
        subtitle: 'Kenyang Beneran',
        desc: 'Perpaduan pempek kapal selam, lenjer, dan adaan dengan cuko khas Palembang.',
        img: 'https://placehold.co/1200x600/3d0e0e/FFB800?text=Slider+Hero+1',
    },
    {
        label: 'Paling Favorit',
        title: 'Paket Musi',
        subtitle: 'Favorit Keluarga',
        desc: 'Pilihan tepat untuk kumpul keluarga dengan porsi lengkap dan beragam.',
        img: 'https://placehold.co/1200x600/3d0e0e/FFB800?text=Slider+Hero+2',
    },
    {
        label: 'Untuk Pemula',
        title: 'Paket Sikok',
        subtitle: 'Coba Dulu',
        desc: 'Pilihan terbaik untuk yang baru pertama kali merasakan cita rasa autentik Wong Kito.',
        img: 'https://placehold.co/1200x600/3d0e0e/FFB800?text=Slider+Hero+3',
    }
]

const sideBanners = [
    {
        img: 'https://placehold.co/400x300/3d0e0e/white?text=Side+Banner+1',
        label: 'Paling Laris',
        title: 'Pempek Kapal Selam',
    },
    {
        img: 'https://placehold.co/400x300/3d0e0e/white?text=Side+Banner+2',
        label: 'Menu Klasik',
        title: 'Lenjer & Adaan',
    }
]

export default function Slider() {
    return (
        <section className="py-8 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-6">

                    {/* Main Slider */}
                    <div className="lg:w-3/4">
                        <div className="relative overflow-hidden rounded-2xl">
                            <Swiper {...swiperOptions} className="h-[460px]">
                                {slides.map((slide, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="relative h-full w-full !bg-wk-maroon">
                                            <img
                                                src={slide.img}
                                                alt={slide.title}
                                                className="absolute inset-0 w-full h-full object-cover opacity-40"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-wk-maroon/95 via-wk-maroon/70 md:via-wk-maroon/50 to-transparent" />
                                            <div className="absolute inset-0 bg-wk-maroon/30 md:hidden" />

                                            <div className="relative h-full flex flex-col justify-center px-8 sm:px-12 md:px-20 max-w-xl">
                                                <span className="inline-block w-fit px-3 py-1 rounded-md !bg-wk-gold !text-wk-maroon text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-5">
                                                    {slide.label}
                                                </span>
                                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black !text-white uppercase leading-[1.1] tracking-tight mb-2">
                                                    {slide.title}
                                                </h2>
                                                <h3 className="text-lg md:text-2xl font-semibold !text-wk-gold mb-5 md:mb-6">
                                                    {slide.subtitle}
                                                </h3>
                                                <p className="text-xs md:text-sm !text-wk-beige font-medium leading-relaxed mb-8 md:mb-10 max-w-xs md:max-w-sm">
                                                    {slide.desc}
                                                </p>
                                                <Link
                                                    href="/shop"
                                                    className="w-fit flex items-center gap-3 px-6 md:px-8 py-3.5 md:py-4 !bg-wk-gold !text-wk-dark-maroon font-black text-[10px] md:text-xs uppercase tracking-widest rounded-full hover:opacity-80 transition-opacity"
                                                >
                                                    Pesan Sekarang
                                                    <i className="fal fa-long-arrow-right" />
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Pagination */}
                            <div className="absolute bottom-8 left-12 z-10">
                                <div className="slider-pagination" />
                            </div>
                        </div>
                    </div>

                    {/* Side Banners */}
                    <div className="lg:w-1/4 flex flex-col gap-6">
                        {sideBanners.map((banner, i) => (
                            <Link
                                key={i}
                                href="/shop"
                                className="group relative flex-1 min-h-[214px] rounded-2xl overflow-hidden"
                            >
                                <img
                                    src={banner.img}
                                    alt={banner.title}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-wk-maroon/85 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <span className="block text-[10px] font-black !text-wk-gold uppercase tracking-widest mb-1">
                                        {banner.label}
                                    </span>
                                    <h4 className="text-xl font-black !text-white uppercase leading-tight">
                                        {banner.title}
                                    </h4>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>

            {/* Override warna biru Swiper → Gold */}
            <style jsx global>{`
                .slider-pagination .swiper-pagination-bullet {
                    background: #C19B44;
                    opacity: 0.35;
                    width: 8px;
                    height: 8px;
                }
                .slider-pagination .swiper-pagination-bullet-active {
                    opacity: 1;
                    width: 28px;
                    border-radius: 4px;
                }
            `}</style>
        </section>
    )
}
