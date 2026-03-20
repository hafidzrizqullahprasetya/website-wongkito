'use client'
import { useState } from "react"
import FilterShopBox2 from "../shop/FilterShopBox2"

const tabs = [
    { id: 1, label: 'Semua',        start: 0,  end: 10 },
    { id: 2, label: 'Paket Seragam', start: 10, end: 20 },
    { id: 3, label: 'Paket Campur',  start: 20, end: 30 },
    { id: 4, label: 'Beli Satuan',   start: 15, end: 25 },
]

export default function Product() {
    const [activeIndex, setActiveIndex] = useState(1)

    return (
        <section className="py-10 md:py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Header row */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 md:mb-10">
                    {/* Section Title */}
                    <div className="text-center lg:text-left">
                        <span className="inline-block px-3 py-1 rounded-md !bg-wk-maroon text-[10px] font-black !text-wk-gold uppercase tracking-[0.3em] mb-3">
                            Pilihan Terbaik
                        </span>
                        <h2 className="text-2xl md:text-3xl font-black !text-wk-dark-maroon uppercase tracking-tight">
                            Menu Populer
                        </h2>
                        <div className="w-16 h-1 !bg-wk-gold rounded-full mt-4 mx-auto lg:mx-0" />
                    </div>

                    {/* Tab Filter — 2 Column Grid on Mobile, Flex on Desktop */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex items-center gap-2 lg:gap-3 w-full lg:w-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveIndex(tab.id)}
                                className={`px-4 py-2.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all border text-center
                                    ${activeIndex === tab.id
                                        ? '!bg-wk-maroon !text-white border-wk-maroon shadow-md'
                                        : '!bg-transparent !text-wk-dark-maroon border-gray-200 hover:border-wk-gold/50'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="relative">
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={activeIndex === tab.id ? 'block animate-fadeIn' : 'hidden'}
                        >
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-5">
                                <FilterShopBox2 itemStart={tab.start} itemEnd={tab.end} />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
