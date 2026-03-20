import Layout from "@/components/layout/Layout"
import Category from "@/components/sections/Category"
import DealProduct from "@/components/sections/DealProduct"
import Product from "@/components/sections/Product"
import Shop from "@/components/sections/Shop"
import Slider from "@/components/sections/Slider"
export const metadata = {
  title: 'Pempek "Asli" Wong Kito — Cita Rasa Palembang Asli, Langsung ke Pintu Anda',
  description: 'Pesan Pempek Asli Wong Kito khas Palembang. Tersedia Paket Sikok, Duo, Tigo, Ampera, Musi dan banyak lagi. Dine-in & take away di Maguwoharjo, atau pesan via WhatsApp!',
}
export default function Home() {
    return (
        <>
            <Layout>
                <Slider />
                <Category />
                <Product />
                <DealProduct />
                <Shop />
            </Layout>
        </>
    )
}