import Link from "next/link"

const categories = [
    { icon: 'fal fa-box-open',       label: 'Paket Seragam',   count: 6, href: '/shop' },
    { icon: 'fal fa-utensils',       label: 'Paket Campur',    count: 5, href: '/shop' },
    { icon: 'fal fa-fish',           label: 'Kapal Selam',     count: 4, href: '/shop' },
    { icon: 'fal fa-drumstick-bite', label: 'Lenjer & Adaan',  count: 8, href: '/shop' },
    { icon: 'fal fa-drumstick-bite', label: 'Tekwan & Model',  count: 3, href: '/shop' },
    { icon: 'fal fa-gift',           label: 'Hampers & Kado',  count: 4, href: '/shop' },
]

export default function Category() {
    return (
        <section className="py-10 md:py-16 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4">

                {/* Section Header — Center on Mobile, Left on Desktop */}
                <div className="text-center md:text-left mb-8 md:mb-12">
                    <span className="inline-block px-3 py-1 rounded-md !bg-wk-maroon text-[10px] font-black !text-wk-gold uppercase tracking-[0.3em] mb-3">
                        Menu Kami
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black !text-wk-dark-maroon uppercase tracking-tight">
                        Jelajahi Kategori
                    </h2>
                    <div className="w-16 h-1 !bg-wk-gold rounded-full mt-4 mx-auto md:mx-0" />
                </div>

                {/* Category Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5 md:gap-8">
                    {categories.map((cat, i) => (
                        <Link
                            key={i}
                            href={cat.href}
                            className="group flex flex-col items-center text-center py-6 md:py-8 px-3 md:px-4 rounded-2xl border border-gray-100 hover:border-wk-gold/40 hover:opacity-80 transition-all duration-300"
                        >
                            {/* Icon wrapper */}
                            <div className="relative w-14 h-14 md:w-16 md:h-16 mb-4 md:mb-5 flex items-center justify-center">
                                <div className="absolute inset-0 !bg-wk-maroon/5 rounded-full group-hover:bg-wk-gold/10 transition-colors duration-300" />
                                <i className={`${cat.icon} relative text-xl md:text-2xl !text-wk-maroon`} />
                                {/* Item count badge */}
                                <span className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 !bg-wk-gold !text-wk-dark-maroon text-[9px] md:text-[10px] font-black rounded-full flex items-center justify-center leading-none">
                                    {cat.count}
                                </span>
                            </div>

                            {/* Label */}
                            <h5 className="text-[13px] md:text-sm font-bold !text-wk-dark-maroon leading-snug group-hover:!text-wk-maroon transition-colors duration-300">
                                {cat.label}
                            </h5>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    )
}
