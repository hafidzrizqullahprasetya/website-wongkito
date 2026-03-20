import Layout from "@/components/layout/Layout"
import Link from "next/link"

const locations = [
    {
        title: 'Toko Utama — Maguwoharjo',
        img: 'https://placehold.co/600x400/f3f4f6/8B1A1A?text=Toko+Pusat',
        alt: 'Toko Maguwoharjo',
        info: [
            { icon: 'fal fa-map-marker-alt', content: 'Jl. Maguwoharjo No. 123, Depok, Sleman, Yogyakarta 55282', href: '#' },
            { icon: 'fab fa-whatsapp',       content: '+62 812-3456-7890', href: 'https://wa.me/6281234567890', external: true },
            { icon: 'fal fa-clock',          label: 'Jam Buka:', content: '08.00 – 21.00 WIB, Setiap Hari' },
        ],
    },
    {
        title: 'Titik Antar — Area Sleman Kota',
        img: 'https://placehold.co/600x400/f3f4f6/8B1A1A?text=Delivery+Point',
        alt: 'Layanan Antar Sleman',
        info: [
            { icon: 'fal fa-map-marker-alt', content: 'Area Sleman Kota & Sekitarnya (Layanan Antar)', href: '#' },
            { icon: 'fab fa-whatsapp',       content: 'Pesan via WhatsApp', href: 'https://wa.me/6281234567890', external: true },
            { icon: 'fal fa-clock',          label: 'Layanan Antar:', content: '09.00 – 20.00 WIB (min. order Rp 75.000)' },
        ],
    },
    {
        title: 'ShopeeFood — Online',
        img: 'https://placehold.co/600x400/f3f4f6/8B1A1A?text=ShopeeFood',
        alt: 'ShopeeFood Wong Kito',
        info: [
            { icon: 'fal fa-mobile-alt', content: 'Cari "Pempek Asli Wong Kito" di ShopeeFood', href: '#' },
            { icon: 'fal fa-store',      content: 'Tersedia di aplikasi ShopeeFood', href: '#' },
            { icon: 'fal fa-clock',      label: 'Operasional:', content: '09.00 – 20.00 WIB' },
        ],
    },
    {
        title: 'GrabFood — Online',
        img: 'https://placehold.co/600x400/f3f4f6/8B1A1A?text=GrabFood',
        alt: 'GrabFood Wong Kito',
        info: [
            { icon: 'fal fa-mobile-alt', content: 'Cari "Pempek Asli Wong Kito" di GrabFood', href: '#' },
            { icon: 'fal fa-store',      content: 'Tersedia di aplikasi GrabFood', href: '#' },
            { icon: 'fal fa-clock',      label: 'Operasional:', content: '09.00 – 20.00 WIB' },
        ],
    },
]

export default function ShopLocation() {
    return (
        <Layout breadcrumbTitle="Lokasi Toko">
            <section className="py-14 bg-gray-50">
                <div className="container mx-auto px-4">

                    {/* ── Search bar ── */}
                    <div className="max-w-xl mx-auto mb-12">
                        <div className="flex overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                            <div className="flex items-center pl-4 !text-wk-maroon/40">
                                <i className="fal fa-search text-sm" />
                            </div>
                            <input
                                type="text"
                                placeholder="Cari area pengiriman..."
                                className="flex-1 px-4 py-4 text-sm !text-wk-dark-maroon placeholder:text-gray-300 outline-none"
                            />
                            <button className="px-6 py-4 !bg-wk-maroon !text-white font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:opacity-80 transition-opacity">
                                Temukan
                                <i className="fal fa-long-arrow-right" />
                            </button>
                        </div>
                    </div>

                    {/* ── Location cards grid ── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {locations.map((loc, i) => (
                            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col sm:flex-row items-stretch">
                                {/* Thumbnail */}
                                <div className="sm:w-36 w-full h-40 sm:h-auto flex-shrink-0 overflow-hidden">
                                    <img
                                        src={loc.img}
                                        alt={loc.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Info */}
                                <div className="flex-1 p-5">
                                    <span className="block text-[10px] font-black !text-wk-gold uppercase tracking-widest mb-1">
                                        Lokasi {i + 1}
                                    </span>
                                    <h3 className="text-base font-black !text-wk-dark-maroon mb-4 leading-tight">
                                        {loc.title}
                                    </h3>

                                    <ul className="space-y-2.5">
                                        {loc.info.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2.5">
                                                <i className={`${item.icon} !text-wk-maroon text-sm mt-0.5 w-4 flex-shrink-0`} />
                                                <span className="text-xs !text-gray-500 leading-relaxed">
                                                    {item.label && (
                                                        <span className="font-bold !text-wk-dark-maroon">{item.label} </span>
                                                    )}
                                                    {item.href ? (
                                                        <Link
                                                            href={item.href}
                                                            target={item.external ? '_blank' : undefined}
                                                            rel={item.external ? 'noopener noreferrer' : undefined}
                                                            className="hover:opacity-70 transition-opacity"
                                                        >
                                                            {item.content}
                                                        </Link>
                                                    ) : (
                                                        item.content
                                                    )}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ── Google Maps embed ── */}
                    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm w-full h-96">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15817.89!2d110.4117!3d-7.7796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59b0a7c2d4c9%3A0x0!2sMaguwoharjo%2C+Depok%2C+Sleman+Regency%2C+Special+Region+of+Yogyakarta!5e0!3m2!1sen!2sid!4v1710900000000"
                            className="w-full h-full"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                </div>
            </section>
        </Layout>
    )
}