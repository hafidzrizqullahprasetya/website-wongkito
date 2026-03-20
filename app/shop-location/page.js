'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function ShopLocation() {
    return (
        <Layout breadcrumbTitle="Lokasi Toko">
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    
                    {/* Header Section */}
                    <div className="max-w-3xl mx-auto text-center mb-16 px-4">
                        <span className="inline-block px-3 py-1 !bg-wk-gold !text-wk-dark-maroon text-[10px] font-black uppercase tracking-[0.3em] mb-4 rounded">Kunjungi Kami</span>
                        <h2 className="text-3xl md:text-5xl font-black !text-wk-dark-maroon uppercase tracking-tight leading-none mb-6">
                            Toko Utama <br className="hidden md:block" />
                            <span className="!text-wk-maroon">Maguwoharjo</span>
                        </h2>
                        <p className="text-sm md:text-base !text-gray-500 font-medium leading-relaxed">
                            Nikmati sajian pempek hangat langsung dari dapur kami. Lokasi strategis, nyaman, dan mudah dijangkau di area Sleman, Yogyakarta.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10 items-stretch">
                        
                        {/* 1. Alamat & Info Card (FLAT) */}
                        <div className="w-full lg:w-5/12">
                            <div className="h-full bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-black !text-wk-dark-maroon uppercase tracking-tight mb-10 border-b-2 border-wk-gold/20 pb-4 inline-block">Detail Lokasi</h3>
                                    
                                    <div className="space-y-8">
                                        {/* Address */}
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center flex-shrink-0">
                                                <i className="fal fa-map-marker-alt !text-wk-maroon" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase tracking-widest !text-wk-gold mb-1">Alamat Lengkap</p>
                                                <p className="text-sm !text-wk-dark-maroon font-black leading-relaxed">
                                                    Jl. Maguwoharjo No. 123, Depok, <br/>
                                                    Sleman, Yogyakarta 55282
                                                </p>
                                            </div>
                                        </div>

                                        {/* Contact */}
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center flex-shrink-0">
                                                <i className="fab fa-whatsapp !text-wk-maroon" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase tracking-widest !text-wk-gold mb-1">WhatsApp Admin</p>
                                                <p className="text-sm !text-wk-dark-maroon font-black">+62 812-3456-7890</p>
                                            </div>
                                        </div>

                                        {/* Hours */}
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center flex-shrink-0">
                                                <i className="fal fa-clock !text-wk-maroon" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase tracking-widest !text-wk-gold mb-1">Jam Operasional</p>
                                                <p className="text-sm !text-wk-dark-maroon font-black">08.00 – 21.00 WIB (Setiap Hari)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 flex flex-col gap-3">
                                    <Link 
                                        href="https://maps.google.com" 
                                        target="_blank"
                                        className="w-full py-4 !bg-wk-maroon !text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl flex items-center justify-center gap-3 active:scale-95 transition-all"
                                    >
                                        Buka Google Maps <i className="fal fa-external-link text-xs" />
                                    </Link>
                                    <Link 
                                        href="https://wa.me/6281234567890" 
                                        className="w-full py-4 border-2 border-wk-maroon !text-wk-maroon text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl flex items-center justify-center gap-3 hover:bg-white active:scale-95 transition-all"
                                    >
                                        Chat WhatsApp <i className="fab fa-whatsapp text-sm" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* 2. Map Section (FLAT) */}
                        <div className="w-full lg:w-7/12">
                            <div className="h-[400px] md:h-full min-h-[400px] rounded-[2.5rem] overflow-hidden border border-gray-100 bg-gray-50 flex">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15817.89!2d110.4117!3d-7.7796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59b0a7c2d4c9%3A0x0!2sMaguwoharjo%2C+Depok%2C+Sleman+Regency%2C+Special+Region+of+Yogyakarta!5e0!3m2!1sen!2sid!4v1710900000000"
                                    className="w-full h-full grayscale-[0.2] contrast-[1.1]"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </Layout>
    )
}