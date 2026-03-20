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
        <footer className="!bg-wk-dark-maroon">

            {/* ── Main Footer ── */}
            <div className="container mx-auto px-4 pt-16 pb-10 border-b border-white/10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

                    {/* Col 1: Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <img src="https://placehold.co/180x50/3d0e0e/FFB800?text=Logo+Wong+Kito" alt="Pempek Asli Wong Kito" className="h-12 object-contain" />
                        </Link>
                        <p className="text-sm !text-white/50 leading-relaxed">
                            Pempek "Asli" Wong Kito — cita rasa autentik Palembang, dibuat dengan bahan pilihan dan resep turun-temurun.
                            Dine-in & take away di Maguwoharjo.
                        </p>
                    </div>

                    {/* Col 2: Menu Kami */}
                    <div>
                        <h5 className="text-sm font-black !text-wk-gold uppercase tracking-widest mb-6">Menu Kami</h5>
                        <ul className="space-y-3">
                            {menuLinks.map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href} className="text-sm !text-white/50 hover:opacity-80 transition-opacity font-medium">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Informasi */}
                    <div>
                        <h5 className="text-sm font-black !text-wk-gold uppercase tracking-widest mb-6">Informasi</h5>
                        <ul className="space-y-3">
                            {infoLinks.map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href} className="text-sm !text-white/50 hover:opacity-80 transition-opacity font-medium">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4: Ikuti Kami */}
                    <div>
                        <h5 className="text-sm font-black !text-wk-gold uppercase tracking-widest mb-6">Ikuti Kami</h5>
                        <ul className="space-y-3">
                            {socialLinks.map((link, i) => (
                                <li key={i}>
                                    <a
                                        href={link.href}
                                        target={link.external ? '_blank' : undefined}
                                        rel={link.external ? 'noopener noreferrer' : undefined}
                                        className="flex items-center gap-2 text-sm !text-white/50 hover:opacity-80 transition-opacity font-medium"
                                    >
                                        <i className={`${link.icon} w-4 text-center !text-wk-gold`} />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 5: Pesan via WA */}
                    <div>
                        <h5 className="text-sm font-black !text-wk-gold uppercase tracking-widest mb-6">Pesan via WhatsApp</h5>
                        <p className="text-sm !text-white/50 mb-5 leading-relaxed">
                            Dapatkan penawaran spesial langsung ke WhatsApp Anda!
                        </p>
                        <div className="flex flex-col gap-3">
                            <input
                                type="text"
                                placeholder="Ketik nama Anda..."
                                className="w-full px-4 py-3 rounded-xl bg-white/10 !text-white placeholder:text-white/30 text-sm font-medium border border-white/10 focus:border-wk-gold outline-none transition-colors"
                            />
                            <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-3 !bg-wk-gold !text-wk-dark-maroon font-black text-xs uppercase tracking-widest rounded-xl hover:opacity-80 transition-opacity"
                            >
                                Chat Kami
                                <i className="fab fa-whatsapp text-base" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* ── Footer CTA Bar ── */}
            <div className="container mx-auto px-4 py-8 border-b border-white/10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* WhatsApp Contact */}
                    <a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                    >
                        <div className="w-12 h-12 rounded-full !bg-wk-gold/10 border border-wk-gold/30 flex items-center justify-center flex-shrink-0">
                            <i className="fab fa-whatsapp text-xl !text-wk-gold" />
                        </div>
                        <div>
                            <span className="block text-base font-black !text-white">+62 812-3456-7890</span>
                            <span className="block text-xs !text-white/40 font-medium">Buka 08.00 – 21.00 WIB</span>
                        </div>
                    </a>

                    {/* Ojek Online */}
                    <div className="flex items-center gap-6">
                        <div>
                            <h5 className="text-sm font-black !text-white mb-1">Tersedia di Ojek Online</h5>
                            <p className="text-xs !text-white/40">Pesan lewat ShopeeFood & GrabFood</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <img src="https://placehold.co/120x40/3d0e0e/white?text=ShopeeFood" alt="ShopeeFood" className="h-9 rounded-lg object-contain" />
                            </a>
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <img src="https://placehold.co/120x40/3d0e0e/white?text=GrabFood" alt="GrabFood" className="h-9 rounded-lg object-contain" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* ── Copyright ── */}
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs !text-white/30 font-medium text-center sm:text-left">
                        Copyright {new Date().getFullYear()}{' '}
                        <Link href="/" className="!text-wk-gold hover:opacity-80 transition-opacity">
                            ©Pempek "Asli" Wong Kito
                        </Link>
                        . Hak cipta dilindungi.
                    </span>
                    <img
                        src="https://placehold.co/300x40/3d0e0e/white?text=Payment+Partners"
                        alt="Brand icons"
                        className="h-6 object-contain opacity-40"
                    />
                </div>
            </div>

        </footer>
    )
}
