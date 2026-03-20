import Link from "next/link"
import CartShow from "../elements/CartShow"
import WishListShow from "../elements/WishListShow"

export default function HeaderSticky({ scroll, isCartSidebar, handleCartSidebar }) {
    return (
        <>
            <div id="header-sticky" className={`fixed top-0 left-0 w-full transition-all duration-300 z-[999] ${scroll ? "!bg-wk-maroon translate-y-0 border-b border-wk-gold/20" : "-translate-y-full opacity-0 pointer-events-none"}`}>
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo Area */}
                        <div className="w-auto flex-shrink-0">
                            <Link href="/" className="flex items-center">
                                <img src="/assets/img/logo/logo.png" alt="Pempek Wong Kito" className="max-h-12 w-auto" />
                                <div className="ml-3 flex flex-col justify-center">
                                    <span className="text-white font-extrabold text-base lg:text-lg leading-none tracking-tight whitespace-nowrap uppercase">
                                        Pempek <span className="font-dancing bg-wk-gold text-white normal-case italic text-lg lg:text-xl px-2 py-0.5 mx-0.5 rounded-md inline-block transform -rotate-1 shadow-sm">"Asli"</span> Wong Kito
                                    </span>
                                </div>
                            </Link>
                        </div>
                        {/* Main Menu Area */}
                        <div className="flex-grow">
                            <nav className="flex items-center justify-center space-x-12">
                                <Link href="/" className="!text-wk-gold font-black opacity-100 uppercase tracking-wider text-sm">Beranda</Link>
                                <div className="relative group">
                                    <Link href="/shop" className="!text-wk-beige font-bold hover:!text-wk-gold hover:opacity-70 transition-opacity uppercase tracking-wider text-sm flex items-center h-20">
                                        Menu <i className="fal fa-chevron-down ml-2 text-[10px]" />
                                    </Link>
                                    <ul className="absolute top-full left-1/2 -translate-x-1/2 !bg-wk-maroon border border-wk-gold/20 p-5 pt-8 w-56 space-y-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                        {['Semua Produk', 'Paket Seragam', 'Paket Campur', 'Beli Satuan', 'Hampers Pempek'].map((item, i) => (
                                            <li key={i}>
                                                <Link href="/shop" className="!text-wk-beige hover:!text-wk-gold hover:opacity-75 transition-opacity text-xs font-bold block uppercase tracking-tight">
                                                    {item}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Link href="/about" className="!text-wk-beige font-bold hover:!text-wk-gold hover:opacity-70 transition-opacity uppercase tracking-wider text-sm">Tentang Kami</Link>
                                <Link href="/shop-location" className="!text-wk-beige font-bold hover:!text-wk-gold hover:opacity-70 transition-opacity uppercase tracking-wider text-sm">Lokasi</Link>
                                <Link href="/contact" className="!text-wk-beige font-bold hover:!text-wk-gold hover:opacity-70 transition-opacity uppercase tracking-wider text-sm">Kontak</Link>
                            </nav>
                        </div>
                        {/* Meta Info Area */}
                        <div className="flex items-center space-x-8">
                            <button className="relative !text-wk-gold hover:opacity-70 hover:!text-wk-gold transition-opacity font-bold group" onClick={handleCartSidebar}>
                                <i className="fal fa-shopping-cart text-2xl" />
                                <span className="absolute -top-2 -right-3 !bg-white !text-wk-maroon text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-wk-maroon">
                                    <CartShow />
                                </span>
                            </button>
                            <Link href="/sign-in" className="!text-wk-beige hover:!text-wk-gold hover:opacity-70 transition-all">
                                <i className="fal fa-user text-2xl" />
                            </Link>
                            <Link href="/wishlist" className="relative !text-wk-beige hover:!text-wk-gold hover:opacity-70 transition-all">
                                <i className="fal fa-heart text-2xl" />
                                <span className="absolute -top-2 -right-3 !bg-wk-gold !text-wk-dark-maroon text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-wk-maroon">
                                    <WishListShow />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
