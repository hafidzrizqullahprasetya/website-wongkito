'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 6,
    spaceBetween: 30,
    freeMode: true,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        1400: {
            slidesPerView: 6,
        },
        1200: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
}

export default function Brand1() {
    return (
        <>
            <section className="py-14 bg-gray-50/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <span className="block text-[11px] font-black !text-wk-gold uppercase tracking-[0.3em] mb-2">Partner Kami</span>
                        <h2 className="text-2xl font-black !text-wk-dark-maroon uppercase tracking-tight">Kualitas Terpercaya</h2>
                    </div>
                    <div className="brand-active">
                        <Swiper {...swiperOptions}>
                            {[1, 2, 3, 4, 5, 6].map((idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100 py-4">
                                        <img src={`https://placehold.co/150x80/f3f4f6/8B1A1A?text=Partner+${idx}`} alt="brand" className="h-8 object-contain" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}
