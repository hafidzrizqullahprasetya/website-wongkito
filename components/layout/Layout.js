
'use client'
import { useEffect, useState } from "react"
import Link from 'next/link'
import BackToTop from '../elements/BackToTop'
import DataBg from "../elements/DataBg"
import PromoModal from "../elements/PromoModal"
import Breadcrumb from './Breadcrumb'
import HeaderCart from "./HeaderCart"
import Sidebar from "./Sidebar"
import Footer from './footer/Footer'
import Header from "./header/Header"

export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children }) {
    const [scroll, setScroll] = useState(0)
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => setMobileMenu(!isMobileMenu)

    // CartSidebar
    const [isCartSidebar, setCartSidebar] = useState(false)
    const handleCartSidebar = () => setCartSidebar(!isCartSidebar)

    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])
    return (
        <>
            {/* <PageHead headTitle={headTitle} /> */}
            <DataBg />
            <Header scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />
            <Sidebar isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
            <HeaderCart isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />
            <PromoModal />
            <main>
                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                {children}
            </main>

            <Footer />

            <BackToTop />
            {/* WhatsApp Floating Button */}
            <Link 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                className="fixed bottom-6 left-6 w-14 h-14 bg-[#25D366] text-white flex items-center justify-center rounded-full text-3xl z-[999] hover:opacity-85 transition-opacity" 
                aria-label="Pesan via WhatsApp"
            >
                <i className="fab fa-whatsapp" />
            </Link>
        </>
    )
}
