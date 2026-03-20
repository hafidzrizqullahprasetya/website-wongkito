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
        <footer className="!bg-wk-dark-maroon text-white font-sans overflow-hidden">

            {/* ── Main Footer Grid ── */}
            <div className="container mx-auto px-6 py-12 border-b border-white/5">
                <div className="flex flex-col lg:grid lg:grid-cols-5 gap-y-10 lg:gap-x-8">

                    {/* Col 1: Brand Info */}
                    <div className="lg:col-span-1 flex flex-col items-start text-left">
                        <Link href="/" className="inline-flex items-center gap-3 mb-6">
                            <img src="/assets/img/logo/logo.png" alt="Logo" className="h-12 w-auto object-contain" />
                            <div className="flex flex-col">
                                <span className="font-extrabold text-base leading-none tracking-tight uppercase">
                                    PEMPEK <span className="font-dancing text-wk-gold !italic text-xl mx-0.5 capitalize">Asli</span>
                                </span>
                                <span className="font-extrabold text-base leading-none tracking-tight uppercase">WONG KITO</span>
                            </div>
                        </Link>
                        <p className="text-sm !text-white/40 leading-relaxed max-w-xs">
                            Cita rasa autentik Palembang, dibuat dengan bahan pilihan dan resep turun-temurun sejak dulu.
                        </p>
                    </div>

                    {/* Group for Menu & Info (Side-by-side on mobile) */}
                    <div className="flex gap-16 lg:hidden">
                        <div className="flex-1">
                            <h5 className="text-[10px] font-black !text-wk-gold uppercase tracking-[0.2em] mb-6">Menu</h5>
                            <ul className="space-y-4">
                                {menuLinks.map((link, i) => (
                                    <li key={i}>
                                        <Link href={link.href} className="text-sm !text-white/50 hover:!text-wk-gold transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1">
                            <h5 className="text-[10px] font-black !text-wk-gold uppercase tracking-[0.2em] mb-6">Info</h5>
                            <ul className="space-y-4">
                                {infoLinks.map((link, i) => (
                                    <li key={i}>
                                        <Link href={link.href} className="text-sm !text-white/50 hover:!text-wk-gold transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Desktop View Columns (Hidden on Mobile) */}
                    <div className="hidden lg:block lg:col-span-1">
                        <h5 className="text-xs font-black !text-wk-gold uppercase tracking-[0.2em] mb-7">Menu Kami</h5>
                        <ul className="space-y-4">
                            {menuLinks.map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href} className="text-sm !text-white/50 hover:!text-wk-gold transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="hidden lg:block lg:col-span-1">
                        <h5 className="text-xs font-black !text-wk-gold uppercase tracking-[0.2em] mb-7">Informasi</h5>
                        <ul className="space-y-4">
                            {infoLinks.map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href} className="text-sm !text-white/50 hover:!text-wk-gold transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4: Follow Us */}
                    <div className="lg:col-span-1">
                        <h5 className="text-[10px] lg:text-xs font-black !text-wk-gold uppercase tracking-[0.2em] mb-6 lg:mb-7">Ikuti Kami</h5>
                        <ul className="space-y-4">
                            {socialLinks.map((link, i) => (
                                <li key={i}>
                                    <a
                                        href={link.href}
                                        target={link.external ? '_blank' : undefined}
                                        rel={link.external ? 'noopener noreferrer' : undefined}
                                        className="flex items-center gap-3 text-sm !text-white/50 hover:!text-wk-gold transition-colors"
                                    >
                                        <i className={`${link.icon} w-5 text-center text-wk-gold/80`} />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 5: WhatsApp Subscription */}
                    <div className="lg:col-span-1 pt-8 lg:pt-0 border-t lg:border-none border-white/5">
                        <h5 className="text-[10px] lg:text-xs font-black !text-wk-gold uppercase tracking-[0.2em] mb-5">Pesan di WA</h5>
                        <div className="w-full flex flex-col gap-3">
                            <input
                                type="text"
                                placeholder="Nama Anda..."
                                className="w-full px-4 py-2.5 rounded-xl !bg-white/5 border border-white/10 !text-white text-xs outline-none focus:border-wk-gold/50 transition-colors"
                            />
                            <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 rounded-xl !bg-wk-gold !text-wk-dark-maroon font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90"
                            >
                                CHAT SEKARANG <i className="fab fa-whatsapp text-lg" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* ── CTA Contact Bar ── */}
            <div className="container mx-auto px-6 py-8 border-b border-white/5">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6">
                    <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                        <div className="w-12 h-12 rounded-full !bg-wk-gold/10 border border-wk-gold/20 flex items-center justify-center">
                            <i className="fab fa-whatsapp text-xl !text-wk-gold" />
                        </div>
                        <div>
                            <span className="block text-xl font-black tracking-tight text-white">+62 812-3456-7890</span>
                            <span className="block text-[9px] uppercase tracking-widest !text-white/30 font-bold mt-1">Buka Setiap Hari (08:00 - 21:00)</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 opacity-40 grayscale">
                        <img src="https://placehold.co/100x30/3d0e0e/white?text=ShopeeFood" alt="Partner" className="h-6 w-auto" />
                        <img src="https://placehold.co/100x30/3d0e0e/white?text=GrabFood" alt="Partner" className="h-6 w-auto" />
                    </div>
                </div>
            </div>

            {/* ── Bottom Copyright ── */}
            <div className="container mx-auto px-6 py-6 pb-24 lg:pb-6 text-center md:text-left">
                <p className="text-[10px] !text-white/20 uppercase tracking-widest font-bold">
                    &copy; {new Date().getFullYear()} <span className="!text-wk-gold/40">Pempek Asli Wong Kito</span>
                </p>
            </div>

        </footer>
    )
}
