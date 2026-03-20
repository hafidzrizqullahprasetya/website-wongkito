'use client'
import Layout from "@/components/layout/Layout"
import products from "@/data/products"
import { addCart, addQty } from "@/features/shopSlice"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const formatRupiah = (num) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(num)

const relatedSwiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 2,
    spaceBetween: 16,
    autoplay: { delay: 3500, disableOnInteraction: false },
    navigation: { nextEl: '.rel-nxt', prevEl: '.rel-prv' },
    breakpoints: {
        640:  { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 },
    },
}

const conditionItems = [
    { icon: 'fal fa-truck',         text: 'Gratis ongkir area Maguwoharjo & sekitarnya' },
    { icon: 'fal fa-leaf',          text: 'Bahan pilihan, tanpa pengawet, segar setiap hari' },
    { icon: 'fal fa-undo',          text: 'Komplain? Kami ganti atau kembalikan dana' },
    { icon: 'fal fa-shield-check',  text: 'Produksi higienis, terjamin kualitasnya' },
]

const detailTabs = [
    { id: 1, label: 'Deskripsi' },
    { id: 2, label: 'Informasi Produk' },
    { id: 3, label: 'Ulasan (3)' },
]

const reviews = [
    { name: 'Dewi Rahayu',   date: '10 Maret 2026', img: 'https://placehold.co/100x100/f3f4f6/8B1A1A?text=Dewi', text: 'Pempeknya enak banget! Cuko-nya pas asem manisnya, gak terlalu pedas. Kapal selamnya telurnya penuh. Puas banget, pasti order lagi!' },
    { name: 'Budi Santoso',  date: '15 Maret 2026', img: 'https://placehold.co/100x100/f3f4f6/8B1A1A?text=Budi', text: 'Paket campur-nya juara. Semua jenis pempek tersedia, fresh banget sampai di rumah. Cocok buat keluarga.' },
    { name: 'Rina Kusuma',   date: '18 Maret 2026', img: 'https://placehold.co/100x100/f3f4f6/8B1A1A?text=Rina', text: 'Sudah langganan tiap minggu. Rasa konsisten, packaging rapi, pengiriman tepat waktu. Recommended!' },
]

export default function ShopSingleDynamicV1() {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [activeTab, setActiveTab] = useState(1)
    const [selectedImg, setSelectedImg] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        if (id) setProduct(products.find((item) => item.id == id) || {})
    }, [id])

    const addToCart = () => {
        const item = products?.find((item) => item.id == product.id)
        if (item) dispatch(addCart({ product: item }))
    }
    const qtyHandler = (qty) => dispatch(addQty({ id: product?.id, qty }))

    const images = [
        product.imgf ? `https://placehold.co/800x800/f3f4f6/8B1A1A?text=Main+Product` : null,
        product.imgb ? `https://placehold.co/800x800/f3f4f6/8B1A1A?text=Back+Product` : null,
    ].filter(Boolean)

    const relatedProducts = products.filter((p) => p.id != id).slice(0, 10)

    return (
        <Layout breadcrumbTitle="Detail Produk">

            {/* ── Product Detail Section ── */}
            <section className="py-14 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-10">

                        {/* Col 1: Images */}
                        <div className="lg:w-5/12">
                            {/* Main image */}
                            <div className="rounded-2xl overflow-hidden border border-gray-100 aspect-square mb-3">
                                <img
                                    src={images[selectedImg] || 'https://placehold.co/800x800/f3f4f6/8B1A1A?text=Product'}
                                    alt={product?.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Thumbnails */}
                            {images.length > 1 && (
                                <div className="flex gap-3">
                                    {images.map((src, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSelectedImg(i)}
                                            className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all hover:opacity-80 ${selectedImg === i ? 'border-wk-gold' : 'border-gray-100'}`}
                                        >
                                            <img src={src} alt="" className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Col 2: Detail Info */}
                        <div className="lg:w-5/12">
                            {/* Badge & Rating */}
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 !bg-wk-gold/10 !text-wk-maroon text-[10px] font-black uppercase tracking-widest rounded-full">
                                    Paket Pempek
                                </span>
                                <div className="flex items-center gap-1 !text-wk-gold text-xs">
                                    <i className="fas fa-star" /><i className="fas fa-star" />
                                    <i className="fas fa-star" /><i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <span className="text-xs !text-gray-400 font-medium">3 Ulasan</span>
                            </div>

                            {/* Title & Stock */}
                            <div className="flex items-start gap-3 mb-4 flex-wrap">
                                <h1 className="text-2xl font-black !text-wk-dark-maroon leading-tight flex-1">
                                    {product?.title || '—'}
                                </h1>
                                <span className="px-3 py-1 !bg-green-50 !text-green-700 text-[10px] font-black uppercase tracking-widest rounded-full flex-shrink-0">
                                    Tersedia
                                </span>
                            </div>

                            {/* Price */}
                            <div className="flex items-baseline gap-3 mb-5">
                                <span className="text-3xl font-black !text-wk-maroon">
                                    {product?.price?.max ? formatRupiah(product.price.max) : '—'}
                                </span>
                                {product?.price?.min && product.price.min !== product.price.max && (
                                    <del className="text-base !text-gray-400 font-medium">
                                        {formatRupiah(product.price.min + 10000)}
                                    </del>
                                )}
                            </div>

                            {/* Description */}
                            <p className="text-sm !text-gray-500 leading-relaxed mb-8">
                                Pempek segar buatan harian dari dapur Wong Kito. Dibuat dari ikan belida pilihan, tepung sagu berkualitas, dan cuko asli khas Palembang yang kental dan menggugah selera. Cocok untuk makan siang, makan malam, atau oleh-oleh keluarga.
                            </p>

                            {/* Qty & Cart */}
                            <div className="flex items-center gap-4 mb-8 flex-wrap">
                                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                                    <span className="px-3 py-3 !text-gray-400 text-sm font-medium">Qty</span>
                                    <input
                                        type="number"
                                        defaultValue={1}
                                        min={1}
                                        onChange={(e) => qtyHandler(e.target.value)}
                                        className="w-16 py-3 text-center !text-wk-dark-maroon font-bold text-sm outline-none border-l border-gray-200"
                                    />
                                </div>
                                <button
                                    onClick={addToCart}
                                    className="flex items-center gap-2 px-7 py-3 !bg-wk-maroon !text-white font-black text-xs uppercase tracking-widest rounded-xl hover:opacity-80 transition-opacity flex-1"
                                >
                                    <i className="fal fa-shopping-cart" />
                                    Tambah ke Keranjang
                                </button>
                                <button className="w-12 h-12 border border-gray-200 rounded-xl flex items-center justify-center !text-wk-maroon hover:opacity-70 transition-opacity">
                                    <i className="fal fa-heart" />
                                </button>
                            </div>

                            {/* Meta info */}
                            <div className="space-y-3 text-sm border-t border-gray-100 pt-6">
                                <div className="flex gap-2">
                                    <span className="font-black !text-wk-dark-maroon w-24 flex-shrink-0">Kategori</span>
                                    <span className="!text-gray-500">Paket Pempek, Campur</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="font-black !text-wk-dark-maroon w-24 flex-shrink-0">SKU</span>
                                    <span className="!text-gray-500">WK-{String(product?.id || '001').padStart(3, '0')}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-black !text-wk-dark-maroon w-24 flex-shrink-0">Bagikan</span>
                                    <div className="flex gap-2">
                                        {['fa-whatsapp','fa-instagram','fa-facebook-f'].map((icon, i) => (
                                            <a key={i} href="#" className="w-8 h-8 rounded-full !bg-gray-50 flex items-center justify-center !text-wk-maroon text-sm hover:opacity-70 transition-opacity">
                                                <i className={`fab ${icon}`} />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Col 3: Keunggulan */}
                        <div className="lg:w-2/12">
                            <div className="space-y-5">
                                {conditionItems.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-9 h-9 rounded-full !bg-wk-maroon/5 flex items-center justify-center flex-shrink-0">
                                            <i className={`${item.icon} !text-wk-maroon text-sm`} />
                                        </div>
                                        <p className="text-xs !text-gray-500 leading-relaxed">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Tabs: Deskripsi / Info / Ulasan ── */}
            <div className="bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-4 py-12">

                    {/* Tab nav */}
                    <div className="flex gap-2 mb-8 flex-wrap">
                        {detailTabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-opacity border
                                    ${activeTab === tab.id
                                        ? '!bg-wk-maroon !text-white border-wk-maroon'
                                        : '!bg-white !text-wk-dark-maroon border-gray-200 hover:opacity-70'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab 1: Deskripsi */}
                    <div className={activeTab === 1 ? 'block' : 'hidden'}>
                        <div className="max-w-3xl space-y-4 text-sm !text-gray-500 leading-relaxed">
                            <p>Pempek Wong Kito dibuat setiap hari dari ikan segar pilihan tanpa bahan pengawet. Setiap gigitan menghadirkan tekstur kenyal yang pas dengan rasa ikan yang autentik — persis seperti yang ada di Palembang.</p>
                            <p>Cuko kami dimasak dari campuran cuka aren, gula merah, cabai rawit, dan rempah pilihan. Rasanya khas: asam, manis, dan pedas yang seimbang. Tersedia dalam dua level kepedasan: reguler dan ekstra pedas.</p>
                            <p>Setiap paket dikemas dengan higienis menggunakan wadah food-grade yang rapat agar pempek tetap segar hingga tiba di tangan Anda. Cocok untuk makan di tempat (dine-in) maupun dibawa pulang (take-away).</p>
                        </div>
                    </div>

                    {/* Tab 2: Informasi Produk */}
                    <div className={activeTab === 2 ? 'block' : 'hidden'}>
                        <div className="max-w-lg">
                            <table className="w-full text-sm">
                                <tbody>
                                    {[
                                        ['Berat',         'Sekitar 300–500 gram (tergantung paket)'],
                                        ['Isi',           'Kapal Selam, Lenjer, Adaan, Kulit'],
                                        ['Cuko',          '2 porsi cuko (tersedia reguler & pedas)'],
                                        ['Daya Tahan',    'Maksimum 1 hari suhu ruang, 3 hari kulkas'],
                                        ['Tanpa',         'Pengawet, Pewarna Buatan, MSG'],
                                        ['Produksi',      'Setiap hari pukul 06.00 WIB'],
                                    ].map(([key, val], i) => (
                                        <tr key={i} className={i % 2 === 0 ? '!bg-white' : '!bg-gray-50'}>
                                            <td className="py-3 px-4 font-black !text-wk-dark-maroon rounded-l-lg w-36">{key}</td>
                                            <td className="py-3 px-4 !text-gray-500 rounded-r-lg">{val}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Tab 3: Ulasan */}
                    <div className={activeTab === 3 ? 'block' : 'hidden'}>
                        <div className="max-w-2xl space-y-6 mb-10">
                            {reviews.map((r, i) => (
                                <div key={i} className="flex gap-4">
                                    <img src={r.img} alt={r.name} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
                                    <div>
                                        <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
                                            <div>
                                                <span className="font-black !text-wk-dark-maroon text-sm">{r.name}</span>
                                                <span className="block text-[10px] !text-gray-400">{r.date}</span>
                                            </div>
                                            <div className="flex !text-wk-gold text-xs gap-0.5">
                                                {[...Array(4)].map((_, j) => <i key={j} className="fas fa-star" />)}
                                                <i className="far fa-star" />
                                            </div>
                                        </div>
                                        <p className="text-sm !text-gray-500 leading-relaxed">{r.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Add Review Form */}
                        <div className="max-w-xl">
                            <h4 className="text-base font-black !text-wk-dark-maroon mb-5 uppercase tracking-wide">Tulis Ulasan</h4>
                            <div className="space-y-4">
                                <textarea
                                    placeholder="Ceritakan pengalamanmu..."
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm !text-wk-dark-maroon placeholder:text-gray-300 focus:border-wk-gold outline-none transition-colors resize-none"
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" placeholder="Nama Anda*"  className="px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-wk-gold outline-none transition-colors" />
                                    <input type="email" placeholder="Email Anda*" className="px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-wk-gold outline-none transition-colors" />
                                </div>
                                <button type="submit" className="px-8 py-3 !bg-wk-maroon !text-white font-black text-xs uppercase tracking-widest rounded-xl hover:opacity-80 transition-opacity">
                                    Kirim Ulasan
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* ── Related Products ── */}
            <div className="py-14 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <span className="inline-block px-3 py-1 !bg-wk-gold !text-wk-maroon text-[10px] font-black uppercase tracking-widest mb-3 rounded">Rekomendasi</span>
                            <h2 className="text-2xl font-black !text-wk-dark-maroon uppercase tracking-tight">Produk Terkait</h2>
                        </div>
                        <div className="flex gap-2">
                            <button className="rel-prv w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center !text-wk-maroon hover:opacity-70 transition-opacity">
                                <i className="far fa-long-arrow-left" />
                            </button>
                            <button className="rel-nxt w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center !text-wk-maroon hover:opacity-70 transition-opacity">
                                <i className="far fa-long-arrow-right" />
                            </button>
                        </div>
                    </div>

                    <Swiper {...relatedSwiperOptions}>
                        {relatedProducts.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-wk-gold/30 transition-colors duration-300">
                                    <div className="relative aspect-square overflow-hidden">
                                        <img src={`https://placehold.co/600x600/f3f4f6/8B1A1A?text=${item.title}+Front`} alt={item.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
                                        <img src={`https://placehold.co/600x600/f3f4f6/8B1A1A?text=${item.title}+Back`} alt={item.title}
                                            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                        <Link href={`/shop/${item.id}`} className="absolute inset-0 z-10" />
                                    </div>
                                    <div className="p-3">
                                        <h3 className="text-xs font-bold !text-wk-dark-maroon leading-snug line-clamp-2 mb-2">
                                            <Link href={`/shop/${item.id}`} className="hover:opacity-70 transition-opacity">{item.title}</Link>
                                        </h3>
                                        <span className="text-sm font-black !text-wk-maroon">{formatRupiah(item.price.max)}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

        </Layout>
    )
}
