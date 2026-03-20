import Link from "next/link"

const menuLinks = [
    { label: 'Paket Seragam',  href: '/shop' },
    { label: 'Paket Campur',   href: '/shop' },
    { label: 'Beli Satuan',    href: '/shop' },
    { label: 'Hampers Pempek', href: '/shop' },
    { label: 'Promo & Diskon', href: '/shop' },
]

const infoLinks = [
    { label: 'Tentang Kami',    href: '/about' },
    { label: 'FAQ',             href: '/faq' },
    { label: 'Lokasi Toko',     href: '/shop-location' },
    { label: 'Hubungi Kami',    href: '/contact' },
    { label: 'Kebijakan Privasi', href: '#' },
]

const socialLinks = [
    { icon: 'fab fa-instagram',  label: 'Instagram', href: '#' },
    { icon: 'fab fa-tiktok',     label: 'TikTok',    href: '#' },
    { icon: 'fab fa-facebook-f', label: 'Facebook',  href: '#' },
    { icon: 'fab fa-whatsapp',   label: 'WhatsApp',  href: 'https://wa.me/6281234567890', external: true },
    { icon: 'fab fa-youtube',    label: 'YouTube',   href: '#' },
]

export default function Footer() {
    return (
        <footer className="!bg-wk-dark-maroon text-white font-sans">

            {/* ── Main Footer Grid ── */}
            <div className="container mx-auto px-6 pt-16 pb-12 border-b border-white/5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

                    {/* Col 1: Brand Info */}
                    <div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <Link href="/" className="inline-flex flex-col lg:flex-row items-center gap-4 mb-6">
                            <img src="/assets/img/logo/logo.png" alt="Logo" className="h-16 w-auto object-contain" />
                            <div className="flex flex-col">
                                <span className="font-extrabold text-xl leading-none tracking-tight">
                                    PEMPEK <span className="font-dancing text-wk-gold !italic text-2xl mx-1 capitalize">Asli</span>
                                </span>
                                <span className="font-extrabold text-xl leading-none tracking-tight">WONG KITO</span>
                            </div>
                        </Link>
                        <p className="text-sm !text-white/40 leading-relaxed max-w-xs">
                            Cita rasa autentik Palembang, dibuat dengan bahan pilihan dan resep turun-temurun sejak 1980-an.
                        </p>
                    </div>

                    {/* Col 2: Menu Kami */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <h5 className="text-xs font-black !text-wk-gold uppercase tracking-[0.2em] mb-7">Menu Kami</h5>
                        <ul className="space-y-4">
                            {menuLinks.map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href} className="text-sm !text-white/50 hover:!text-wk-gold transition-colors duration-300">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Informasi */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <h5 className="text-xs font-black !text-wk-gold uppercase tracking-[0.2em] mb-7">Informasi</h5>
                        <ul className="space-y-4">
                            {infoLinks.map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href} className="text-sm !text-white/50 hover:!text-wk-gold transition-colors duration-300">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4: Follow Us */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <h5 className="text-xs font-black !text-wk-gold uppercase tracking-[0.2em] mb-7">Ikuti Kami</h5>
                        <ul className="space-y-4">
                            {socialLinks.map((link, i) => (
                                <li key={i}>
                                    <a
                                        href={link.href}
                                        target={link.external ? '_blank' : undefined}
                                        rel={link.external ? 'noopener noreferrer' : undefined}
                                        className="flex items-center gap-3 text-sm !text-white/50 hover:!text-wk-gold transition-colors duration-300"
                                    >
                                        <i className={`${link.icon} w-5 text-center text-wk-gold/80`} />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 5: WhatsApp Subscription */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <h5 className="text-xs font-black !text-wk-gold uppercase tracking-[0.2em] mb-7">Pesan via WhatsApp</h5>
                        <p className="text-sm !text-white/40 mb-6 max-w-[200px]">
                            Dapatkan promo spesial langsung ke HP Anda.
                        </p>
                        <div className="w-full flex flex-col gap-3">
                            <input
                                type="text"
                                placeholder="Nama Anda..."
                                className="w-full px-5 py-3 rounded-xl !bg-white/5 border border-white/10 !text-white text-sm outline-none focus:border-wk-gold/50 transition-colors"
                            />
                            <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 rounded-xl !bg-wk-gold !text-wk-dark-maroon font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                            >
                                CHAT SEKARANG <i className="fab fa-whatsapp text-lg" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* ── CTA Contact Bar ── */}
            <div className="container mx-auto px-6 py-10 border-b border-white/5">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6">
                    
                    {/* CS WhatsApp */}
                    <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                        <div className="w-14 h-14 rounded-full !bg-wk-gold/10 border border-wk-gold/20 flex items-center justify-center animate-pulse">
                            <i className="fab fa-whatsapp text-2xl !text-wk-gold" />
                        </div>
                        <div>
                            <span className="block text-xl font-black tracking-tight text-white">+62 812-3456-7890</span>
                            <span className="block text-xs uppercase tracking-widest !text-white/30 font-bold mt-1">CS PEMPEK WONG KITO (08:00 - 21:00)</span>
                        </div>
                    </div>

                    {/* Delivery Partner */}
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <div className="text-center sm:text-right">
                            <h6 className="text-[10px] font-black uppercase tracking-widest !text-white/30 mb-2">Delivery Partner</h6>
                            <div className="flex items-center justify-center gap-3">
                                <img src="https://placehold.co/120x40/3d0e0e/white?text=ShopeeFood" alt="Partner" className="h-7 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                                <img src="https://placehold.co/120x40/3d0e0e/white?text=GrabFood" alt="Partner" className="h-7 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Bottom Copyright ── */}
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-[10px] md:text-xs font-medium !text-white/20 text-center md:text-left uppercase tracking-wider">
                        Copyright &copy; {new Date().getFullYear()} <span className="!text-wk-gold/60">Pempek Asli Wong Kito</span>. All Reserved Palembang Taste.
                    </p>
                    <div className="flex items-center gap-4 opacity-30 grayscale hover:grayscale-0 transition-all cursor-crosshair">
                        <img src="https://placehold.co/40x25/white/3d0e0e?text=VISA" alt="Payment" className="h-4 w-auto" />
                        <img src="https://placehold.co/40x25/white/3d0e0e?text=BCA" alt="Payment" className="h-4 w-auto" />
                        <img src="https://placehold.co/40x25/white/3d0e0e?text=GOPAY" alt="Payment" className="h-4 w-auto" />
                    </div>
                </div>
            </div>

        </footer>
    )
}
