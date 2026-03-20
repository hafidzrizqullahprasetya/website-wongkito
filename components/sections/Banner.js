import Link from "next/link"

export default function Banner1() {
    return (
        <section className="relative py-12 md:py-16 !bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {/* Kolom Kiri - 2 Item Kecil */}
                    <div className="md:col-span-3 space-y-4">
                        {[
                            { title: 'Paket Hemat', items: '15 Produk', img: '01' },
                            { title: 'Beli Satuan', items: '20 Produk', img: '02' }
                        ].map((banner, i) => (
                            <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[4/5] border border-gray-100">
                                <img src={`/assets/img/banner/banner-2-${banner.img}.jpg`} alt={banner.title} className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-wk-dark-maroon/90 via-wk-maroon/30 to-transparent p-6 flex flex-col justify-end">
                                    <span className="text-wk-gold text-xs font-black uppercase tracking-widest mb-1">{banner.items}</span>
                                    <h4 className="text-xl font-black !text-white mb-4 leading-tight">{banner.title}</h4>
                                    <Link href="/shop" className="w-10 h-10 !bg-wk-gold !text-wk-dark-maroon rounded-full flex items-center justify-center hover:opacity-85 transition-opacity">
                                        <i className="far fa-long-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Kolom Tengah - 1 Item Besar */}
                    <div className="md:col-span-6">
                        <div className="group relative overflow-hidden rounded-2xl h-full border border-gray-100 min-h-[400px]">
                            <img src="/assets/img/banner/banner-2-03.jpg" alt="Menu Spesial" className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-wk-dark-maroon/90 via-wk-maroon/40 to-transparent p-10 flex flex-col justify-end items-center text-center">
                                <span className="text-wk-gold text-sm font-black uppercase tracking-widest mb-2">Paling Laris</span>
                                <h4 className="text-3xl md:text-5xl font-black !text-white mb-6 leading-tight">Paket Campur <br /> Spesial Jogja</h4>
                                <Link href="/shop" className="px-8 py-3 !bg-wk-gold !text-wk-dark-maroon font-black uppercase tracking-widest rounded-full hover:opacity-85 transition-opacity text-sm">
                                    Pesan Sekarang
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Kolom Kanan - 1 Item Tinggi */}
                    <div className="md:col-span-3">
                        <div className="group relative overflow-hidden rounded-2xl h-full border border-gray-100 min-h-[400px]">
                            <img src="/assets/img/banner/banner-2-04.jpg" alt="Hampers" className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-wk-dark-maroon/90 via-wk-maroon/40 to-transparent p-6 flex flex-col justify-end items-start">
                                <span className="text-wk-gold text-xs font-black uppercase tracking-widest mb-1">Edisi Terbatas</span>
                                <h4 className="text-2xl font-black !text-white mb-4 leading-tight text-left">Hampers <br /> Pempek Cantik</h4>
                                <Link href="/shop" className="w-12 h-12 !bg-wk-gold !text-wk-dark-maroon rounded-full flex items-center justify-center hover:opacity-85 transition-opacity text-xl">
                                    <i className="far fa-long-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
