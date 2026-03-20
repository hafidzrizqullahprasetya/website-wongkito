'use client'
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const photos = [
    'https://placehold.co/600x600/f3f4f6/8B1A1A?text=Insta+Feed+1',
    'https://placehold.co/600x600/f3f4f6/8B1A1A?text=Insta+Feed+2',
    'https://placehold.co/600x600/f3f4f6/8B1A1A?text=Insta+Feed+3',
    'https://placehold.co/600x600/f3f4f6/8B1A1A?text=Insta+Feed+4',
    'https://placehold.co/600x600/f3f4f6/8B1A1A?text=Insta+Feed+5',
    'https://placehold.co/600x600/f3f4f6/8B1A1A?text=Insta+Feed+6',
]

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 2.2,
    spaceBetween: 10,
    loop: true,
    autoplay: { delay: 2500, disableOnInteraction: false },
    breakpoints: {
        480:  { slidesPerView: 3, spaceBetween: 12 },
        768:  { slidesPerView: 4, spaceBetween: 14 },
        1024: { slidesPerView: 5, spaceBetween: 16 },
        1280: { slidesPerView: 6, spaceBetween: 16 },
    },
}

export default function Shop() {
    return (
        <section className="pb-14 md:pb-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center mb-8 md:mb-12">
                    <span className="inline-block px-3 py-1 rounded-md !bg-wk-maroon text-[10px] font-black !text-wk-gold uppercase tracking-[0.3em] mb-3">
                        Galeri &amp; Update
                    </span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black !text-wk-dark-maroon flex items-center justify-center gap-2 sm:gap-3 uppercase tracking-tight">
                        <i className="fab fa-instagram !text-wk-maroon text-xl sm:text-2xl" />
                        pempek.wongkito
                    </h2>
                    <div className="w-14 h-1 md:w-16 md:h-1.5 !bg-wk-gold rounded-full mt-3 md:mt-4 mx-auto" />
                </div>

            </div>

            {/* Full-width Swiper outside container for edge-to-edge look */}
            <div className="px-4 md:px-0 md:container md:mx-auto">
                <Swiper {...swiperOptions}>
                    {photos.map((src, i) => (
                        <SwiperSlide key={i}>
                            <a
                                href="https://instagram.com/pempek.wongkito"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative block aspect-square rounded-xl overflow-hidden"
                            >
                                <img
                                    src={src}
                                    alt={`Wong Kito Instagram ${i + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 !bg-wk-maroon/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <i className="fab fa-instagram !text-white text-2xl" />
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Bottom CTA link */}
            <div className="text-center mt-6 md:mt-8">
                <a
                    href="https://instagram.com/pempek.wongkito"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-black !text-wk-maroon uppercase tracking-widest hover:opacity-70 transition-opacity"
                >
                    <i className="fab fa-instagram text-base" />
                    Lihat Lebih Banyak di Instagram
                    <i className="fal fa-arrow-right" />
                </a>
            </div>
        </section>
    )
}
