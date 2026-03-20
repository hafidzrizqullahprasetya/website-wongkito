'use client'
import { store } from "@/features/store"
import { Plus_Jakarta_Sans, Dancing_Script } from 'next/font/google'
import { Provider } from "react-redux"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify"
import "../public/assets/css/animate.css"
import "../public/assets/css/bootstrap.min.css"
import "../public/assets/css/fontawesome.min.css"
import "../public/assets/css/nice-select.css"
import "../public/assets/css/slick.css"
import "../public/assets/css/swiper-bundle.css"
import "../public/assets/css/magnific-popup.css"
import "../public/assets/css/meanmenu.css"
import "../public/assets/css/spacing.css"
import "../public/assets/css/tailwind.css"
const jakarta = Plus_Jakarta_Sans({
    weight: ['300', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
    variable: "--tp-ff-body",
    display: 'swap',
})

const dancingScript = Dancing_Script({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--font-dancing",
    display: 'swap',
})

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${jakarta.variable} ${dancingScript.variable} font-jakarta overflow-x-hidden`}>
                <Provider store={store}>
                    {children}
                    <ToastContainer
                        position="bottom-right"
                        autoClose={500}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                    />
                </Provider>
            </body>
        </html>
    )
}
