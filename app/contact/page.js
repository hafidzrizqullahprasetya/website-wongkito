import Layout from "@/components/layout/Layout"
import Link from "next/link"

const contactInfo = [
    {
        icon: 'fal fa-map-marker-alt',
        label: 'Alamat',
        content: 'Jl. Maguwoharjo No. 123, Depok, Sleman, Yogyakarta 55282',
        href: 'https://maps.google.com',
        external: true,
    },
    {
        icon: 'fab fa-whatsapp',
        label: 'WhatsApp',
        content: '+62 812-3456-7890',
        href: 'https://wa.me/6281234567890',
        external: true,
    },
    {
        icon: 'fal fa-clock',
        label: 'Jam Buka',
        content: '08.00 – 21.00 WIB, Setiap Hari',
    },
    {
        icon: 'fab fa-instagram',
        label: 'Instagram',
        content: '@pempek.wongkito',
        href: 'https://instagram.com/pempek.wongkito',
        external: true,
    },
]

const inputClass = "w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm !text-wk-dark-maroon placeholder:text-gray-300 focus:border-wk-gold outline-none transition-colors"

export default function Contact() {
    return (
        <Layout breadcrumbTitle="Kontak">

            {/* ── Contact Section ── */}
            <section className="py-14 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* ── Left: Info Kontak ── */}
                        <div className="lg:w-5/12 xl:w-4/12 flex-shrink-0">
                            <div className="bg-white rounded-2xl border border-gray-100 p-7 h-full">
                                <span className="block text-[11px] font-black !text-wk-gold uppercase tracking-[0.3em] mb-2">Temukan Kami</span>
                                <h2 className="text-xl font-black !text-wk-dark-maroon uppercase tracking-tight mb-7 leading-tight">
                                    Hubungi Kami
                                </h2>

                                {/* Info list */}
                                <ul className="space-y-5 mb-8">
                                    {contactInfo.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl !bg-wk-maroon/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <i className={`${item.icon} !text-wk-maroon text-sm`} />
                                            </div>
                                            <div>
                                                <span className="block text-[10px] font-black !text-gray-400 uppercase tracking-widest mb-0.5">
                                                    {item.label}
                                                </span>
                                                {item.href ? (
                                                    <Link
                                                        href={item.href}
                                                        target={item.external ? '_blank' : undefined}
                                                        rel={item.external ? 'noopener noreferrer' : undefined}
                                                        className="text-sm font-bold !text-wk-dark-maroon hover:opacity-70 transition-opacity leading-snug"
                                                    >
                                                        {item.content}
                                                    </Link>
                                                ) : (
                                                    <span className="text-sm font-bold !text-wk-dark-maroon">{item.content}</span>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA buttons */}
                                <div className="flex flex-col gap-3">
                                    <Link
                                        href="https://wa.me/6281234567890"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 py-3.5 !bg-wk-maroon !text-white font-black text-xs uppercase tracking-widest rounded-xl hover:opacity-80 transition-opacity"
                                    >
                                        <i className="fab fa-whatsapp text-base" />
                                        Chat WhatsApp
                                    </Link>
                                    <Link
                                        href="https://maps.google.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 py-3.5 border border-gray-200 !bg-white !text-wk-dark-maroon font-black text-xs uppercase tracking-widest rounded-xl hover:opacity-70 transition-opacity"
                                    >
                                        <i className="fal fa-map-marker-alt !text-wk-maroon" />
                                        Lihat di Maps
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* ── Right: Form ── */}
                        <div className="flex-1">
                            <div className="bg-white rounded-2xl border border-gray-100 p-7">
                                <span className="block text-[11px] font-black !text-wk-gold uppercase tracking-[0.3em] mb-2">Pesan & Pertanyaan</span>
                                <h2 className="text-xl font-black !text-wk-dark-maroon uppercase tracking-tight mb-2 leading-tight">
                                    Kirim Pesan atau Pesanan Khusus
                                </h2>
                                <p className="text-sm !text-gray-400 mb-7 leading-relaxed">
                                    Butuh paket khusus, hampers dalam jumlah besar, atau ada pertanyaan? Hubungi kami!
                                </p>

                                <form action="#" id="contact-form" method="POST">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                        <input
                                            name="name"
                                            type="text"
                                            placeholder="Nama lengkap"
                                            required
                                            className={inputClass}
                                        />
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="Alamat email"
                                            required
                                            className={inputClass}
                                        />
                                        <input
                                            name="number"
                                            type="text"
                                            placeholder="Nomor WhatsApp / HP"
                                            required
                                            className={inputClass}
                                        />
                                        <input
                                            name="subject"
                                            type="text"
                                            placeholder="Keperluan (misal: pesanan catering)"
                                            required
                                            className={inputClass}
                                        />
                                    </div>
                                    <textarea
                                        name="message"
                                        placeholder="Tulis pesan Anda di sini..."
                                        rows={5}
                                        required
                                        className={`${inputClass} resize-none mb-6`}
                                    />
                                    <button
                                        type="submit"
                                        className="flex items-center gap-2 px-8 py-4 !bg-wk-maroon !text-white font-black text-xs uppercase tracking-widest rounded-xl hover:opacity-80 transition-opacity"
                                    >
                                        Kirim Pesan
                                        <i className="fal fa-long-arrow-right" />
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Google Maps ── */}
            <div className="w-full h-96">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31635.98!2d110.43!3d-7.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59b0a7c2d4c9%3A0x0!2sMaguwoharjo%2C+Depok%2C+Sleman+Regency%2C+Special+Region+of+Yogyakarta!5e0!3m2!1sen!2sid!4v1710900000000"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

        </Layout>
    )
}