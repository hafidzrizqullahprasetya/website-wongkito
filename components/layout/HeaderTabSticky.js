import Link from "next/link"
import CartShow from "../elements/CartShow"
import WishListShow from "../elements/WishListShow"

export default function HeaderTabSticky({ scroll, handleMobileMenu, handleCartSidebar }) {
    return (
        <div id="header-tab-sticky" className={`fixed top-0 left-0 w-full transition-all duration-300 z-[998] hidden md:block xl:hidden ${scroll ? "!bg-wk-maroon border-b border-wk-gold/20 translate-y-0" : "-translate-y-full opacity-0 pointer-events-none"}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center space-x-6">
                        <button className="!text-wk-gold text-2xl hover:opacity-80 transition-opacity" onClick={handleMobileMenu}>
                            <i className="far fa-bars" />
                        </button>
                        <Link href="/" className="flex items-center">
                            <img src="/assets/img/logo/logo.png" alt="Pempek Wong Kito" className="max-h-12 w-auto" />
                            <div className="ml-3 flex flex-col justify-center">
                                <span className="text-white font-extrabold text-sm lg:text-lg leading-[1.1] tracking-tight whitespace-nowrap">
                                    Pempek <span className="font-dancing text-wk-gold italic text-lg lg:text-2xl mx-1">"Asli"</span>
                                    <span className="block lg:inline">Wong Kito</span>
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div className="flex items-center space-x-8">
                        <div className="hidden lg:block relative group min-w-[300px]">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 !text-wk-gold">
                                <i className="fal fa-search" />
                            </span>
                            <input 
                                type="text" 
                                placeholder="Cari pempek..." 
                                className="w-full pl-10 pr-4 py-2 rounded-full border border-wk-gold/30 !bg-wk-maroon/20 !text-wk-beige placeholder:text-wk-beige/50 focus:outline-none focus:border-wk-gold transition-all"
                            />
                        </div>

                        <div className="flex items-center space-x-6">
                            <button className="relative !text-wk-gold hover:opacity-70 transition-opacity" onClick={handleCartSidebar}>
                                <i className="fal fa-shopping-cart text-2xl" />
                                <span className="absolute -top-2 -right-3 !bg-white !text-wk-maroon text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-wk-maroon focus:outline-none">
                                    <CartShow />
                                </span>
                            </button>
                            <Link href="/sign-in" className="!text-wk-beige hover:!text-wk-gold hover:opacity-70 transition-opacity">
                                <i className="fal fa-user text-2xl" />
                            </Link>
                            <Link href="/wishlist" className="relative !text-wk-beige hover:!text-wk-gold hover:opacity-70 transition-opacity">
                                <i className="fal fa-heart text-2xl" />
                                <span className="absolute -top-2 -right-3 !bg-wk-gold !text-wk-dark-maroon text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-wk-maroon focus:outline-none">
                                    <WishListShow />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
