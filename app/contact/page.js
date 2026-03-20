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

// Updated input class for clear placeholder
const inputClass = "w-full px-4 py-4 rounded-xl border border-gray-200 text-sm font-bold !text-wk-dark-maroon placeholder:!text-gray-400 !bg-gray-50/30 focus:border-wk-gold focus:bg-white outline-none transition-all"

export default function Contact() {
    return (
        <Layout breadcrumbTitle="Kontak">

            {/* ── Contact Section ── */}
            <section className="py-12 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-10 xl:gap-16">

                        {/* ── Left: Info Kontak ── */}
                        <div className="lg:w-5/12 xl:w-4/12 flex-shrink-0">
                            <div className="bg-gray-50 rounded-3xl border border-gray-100 p-6 md:p-8">
                                <span className="inline-block px-3 py-1 !bg-wk-gold !text-wk-dark-maroon text-[10px] font-black uppercase tracking-[0.3em] mb-4 rounded">Hubungi Kami</span>
                                <h2 className="text-2xl font-black !text-wk-dark-maroon uppercase tracking-tight mb-8 leading-tight">
                                    Informasi <br className="hidden md:block" /> Kontak
                                </h2>

                                {/* Info list */}
                                <ul className="space-y-6 mb-10">
                                    {contactInfo.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-50">
                                            <div className="w-10 h-10 rounded-xl !bg-wk-maroon flex items-center justify-center flex-shrink-0">
                                                <i className={`${item.icon} text-white text-sm`} />
                                            </div>
                                            <div>
                                                <span className="block text-[10px] font-black !text-wk-gold uppercase tracking-widest mb-1">
                                                    {item.label}
                                                </span>
                                                {item.href ? (
                                                    <Link
                                                        href={item.href}
                                                        target={item.external ? '_blank' : undefined}
                                                        rel={item.external ? 'noopener noreferrer' : undefined}
                                                        className="text-[13px] font-black !text-wk-dark-maroon hover:!text-wk-maroon transition-colors leading-relaxed block"
                                                    >
                                                        {item.content}
                                                    </Link>
                                                ) : (
                                                    <span className="text-[13px] font-black !text-wk-dark-maroon leading-relaxed">{item.content}</span>
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
                                        className="flex items-center justify-center gap-2 py-4 !bg-wk-maroon !text-white font-black text-[11px] uppercase tracking-widest rounded-2xl active:scale-95 transition-all"
                                    >
                                        <i className="fab fa-whatsapp text-lg" />
                                        WhatsApp Sekarang
                                    </Link>
                                    <Link
                                        href="https://maps.google.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 py-4 border-2 border-wk-maroon bg-white !text-wk-maroon font-black text-[11px] uppercase tracking-widest rounded-2xl active:scale-95 transition-all"
                                    >
                                        <i className="fal fa-map-marker-alt text-sm" />
                                        Petunjuk Arah
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* ── Right: Form ── */}
                        <div className="flex-1">
                            <div className="py-2">
                                <span className="block text-[11px] font-black !text-wk-gold uppercase tracking-[0.3em] mb-4">Pesan & Pertanyaan</span>
                                <h2 className="text-3xl font-black !text-wk-dark-maroon uppercase tracking-tight mb-4 leading-tight">
                                    Kirim Pesan <br className="hidden md:block"/> atau Pesanan Khusus
                                </h2>
                                <p className="text-sm md:text-base !text-gray-400 mb-10 leading-relaxed font-medium">
                                    Butuh paket khusus, hampers dalam jumlah besar, atau ada pertanyaan? Tim Wong Kito siap membantu Anda dengan sepenuh hati.
                                </p>

                                <form action="#" id="contact-form" method="POST" className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black uppercase tracking-widest !text-wk-dark-maroon ml-1">Nama Lengkap</label>
                                            <input name="name" type="text" placeholder="Contoh: Budi Santoso" required className={inputClass} />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black uppercase tracking-widest !text-wk-dark-maroon ml-1">Alamat Email</label>
                                            <input name="email" type="email" placeholder="budi@email.com" required className={inputClass} />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black uppercase tracking-widest !text-wk-dark-maroon ml-1">Nomor WhatsApp</label>
                                            <input name="number" type="text" placeholder="0812xxxxxx" required className={inputClass} />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black uppercase tracking-widest !text-wk-dark-maroon ml-1">Keperluan</label>
                                            <input name="subject" type="text" placeholder="Misal: Pesanan Catering" required className={inputClass} />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black uppercase tracking-widest !text-wk-dark-maroon ml-1">Isi Pesan</label>
                                        <textarea
                                            name="message"
                                            placeholder="Tulis detail pertanyaan atau pesanan Anda di sini..."
                                            rows={6}
                                            required
                                            className={`${inputClass} resize-none`}
                                        />
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3.5 !bg-wk-maroon !text-white font-black text-[10px] uppercase tracking-widest rounded-xl active:scale-95 transition-all shadow-lg shadow-wk-maroon/10"
                                        >
                                            Kirim Sekarang
                                            <i className="fal fa-paper-plane" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Google Maps ── */}
            <div className="w-full h-[400px] border-t border-gray-100 grayscale hover:grayscale-0 transition-all duration-[1s]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15817.89!2d110.4117!3d-7.7796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59b0a7c2d4c9%3A0x0!2sMaguwoharjo%2C+Depok%2C+Sleman+Regency%2C+Special+Region+of+Yogyakarta!5e0!3m2!1sen!2sid!4v1710900000000"
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