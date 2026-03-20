import Link from "next/link"
import CartShow from "../elements/CartShow"

export default function HeaderMobSticky({ scroll, handleMobileMenu, handleCartSidebar }) {
    return (
        <div id="header-mob-sticky" className={`fixed top-0 left-0 w-full transition-all duration-300 z-[999] md:hidden ${scroll ? "!bg-wk-maroon translate-y-0 border-b border-wk-gold/20" : "-translate-y-full opacity-0 pointer-events-none"}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Menu Toggle */}
                    <div className="w-1/4">
                        <button className="!text-wk-gold text-2xl hover:opacity-70 hover:!text-wk-gold transition-opacity" onClick={handleMobileMenu}>
                            <i className="far fa-bars" />
                        </button>
                    </div>

                    <div className="flex-grow flex justify-center">
                        <Link href="/" className="flex items-center">
                            <img src="/assets/img/logo/logo.png" alt="Pempek Wong Kito" className="max-h-12 w-auto" />
                        </Link>
                    </div>

                    {/* Cart & Auth */}
                    <div className="w-1/4 flex justify-end items-center space-x-5">
                        <button className="relative !text-wk-gold hover:opacity-70 hover:!text-wk-gold transition-opacity" onClick={handleCartSidebar}>
                            <i className="fal fa-shopping-cart text-xl" />
                            <span className="absolute -top-1.5 -right-2 !bg-white !text-wk-maroon text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full border border-wk-maroon">
                                <CartShow />
                            </span>
                        </button>
                        <Link href="/sign-in" className="!text-wk-beige hover:!text-wk-gold hover:opacity-70 transition-all font-bold">
                            <i className="fal fa-user text-xl" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
