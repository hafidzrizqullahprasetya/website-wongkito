'use client'
import { useState } from "react"
import FilterShopBox from "../shop/FilterShopBox"

const tabs = [
    { id: 1, label: 'Semua',        start: 0,  end: 10 },
    { id: 2, label: 'Paket Seragam', start: 10, end: 20 },
    { id: 3, label: 'Paket Campur',  start: 20, end: 30 },
    { id: 4, label: 'Beli Satuan',   start: 15, end: 25 },
]

export default function Product() {
    const [activeIndex, setActiveIndex] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 8 // items per page

    const handleTabChange = (id) => {
        setActiveIndex(id)
        setCurrentPage(1) // Reset to first page when changing categories
    }

    const currentTab = tabs.find(t => t.id === activeIndex)
    const totalItems = currentTab.end - currentTab.start
    const totalPages = Math.ceil(totalItems / pageSize)

    const paginatedStart = currentTab.start + (currentPage - 1) * pageSize
    const paginatedEnd = Math.min(currentTab.start + currentPage * pageSize, currentTab.end)

    return (
        <section className="py-10 md:py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Header row */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 md:mb-14">
                    {/* Section Title — Proper alignment with flexbox */}
                    <div className="flex flex-col items-center md:items-start">
                        <span className="inline-block px-3 py-1 rounded-md !bg-wk-maroon text-[10px] font-black !text-wk-gold uppercase tracking-[0.3em] mb-4">
                            Pilihan Terbaik
                        </span>
                        <h2 className="text-2xl md:text-3xl font-black !text-wk-dark-maroon uppercase tracking-tight text-center md:text-left">
                            Menu Populer
                        </h2>
                        <div className="w-16 h-1 !bg-wk-gold rounded-full mt-4" />
                    </div>

                    {/* Tab Filter — 2 Column Grid on Mobile, Flex on Desktop */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex items-center gap-2 lg:gap-3 w-full lg:w-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => handleTabChange(tab.id)}
                                className={`px-4 py-2.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all border text-center
                                    ${activeIndex === tab.id
                                        ? '!bg-wk-maroon !text-white border-wk-maroon'
                                        : '!bg-transparent !text-wk-dark-maroon border-gray-200 hover:border-wk-gold/50'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content — Paginated Grid */}
                <div className="relative min-h-[400px]">
                    <div key={activeIndex + '-' + currentPage} className="animate-fadeIn">
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-5">
                            <FilterShopBox2 itemStart={paginatedStart} itemEnd={paginatedEnd} />
                        </div>
                    </div>
                </div>

                {/* Pagination Controls — Balanced responsive spacing */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-3 mt-20 md:mt-16">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(prev => prev - 1)}
                            className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-wk-dark-maroon hover:bg-wk-maroon hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-wk-dark-maroon transition-all shadow-sm"
                        >
                            <i className="fal fa-arrow-left" />
                        </button>

                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`w-10 h-10 rounded-full border text-xs font-bold transition-all shadow-sm
                                    ${currentPage === i + 1
                                        ? '!bg-wk-maroon !text-white border-wk-maroon'
                                        : 'bg-white border-gray-100 text-wk-dark-maroon hover:border-wk-maroon/30 hover:text-wk-maroon'
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(prev => prev + 1)}
                            className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-wk-dark-maroon hover:bg-wk-maroon hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-wk-dark-maroon transition-all shadow-sm"
                        >
                            <i className="fal fa-arrow-right" />
                        </button>
                    </div>
                )}

            </div>
        </section>
    )
}
