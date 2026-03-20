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
    slidesPerView: 2,
    spaceBetween: 12,
    loop: true,
    autoplay: { delay: 2500, disableOnInteraction: false },
    breakpoints: {
        576:  { slidesPerView: 3, spaceBetween: 12 },
        768:  { slidesPerView: 4, spaceBetween: 12 },
        1024: { slidesPerView: 5, spaceBetween: 12 },
        1280: { slidesPerView: 6, spaceBetween: 12 },
    },
}

export default function Shop() {
    return (
        <section className="pb-16 bg-white">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center mb-10">
                    <span className="inline-block px-3 py-1 rounded-md !bg-wk-maroon text-[10px] font-black !text-wk-gold uppercase tracking-[0.3em] mb-3 mx-auto">
                        Galeri & Update
                    </span>
                    <h2 className="text-3xl font-black !text-wk-dark-maroon flex items-center justify-center gap-3 uppercase tracking-tight">
                        <i className="fab fa-instagram !text-wk-maroon text-2xl" />
                        pempek.wongkito
                    </h2>
                    <div className="w-16 h-1.5 !bg-wk-gold rounded-full mt-4 mx-auto" />
                </div>

                {/* Instagram Grid Slider */}
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
                                    className="w-full h-full object-cover transition-opacity duration-300"
                                />
                                {/* Instagram hover overlay */}
                                <div className="absolute inset-0 !bg-wk-maroon/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <i className="fab fa-instagram !text-white text-2xl" />
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    )
}
