'use client'
import { addCart } from "@/features/shopSlice"
import { addWishlist } from "@/features/wishlistSlice"
import { Fragment, useState, useRef, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import products from "../../data/products"
import {
    addPerPage,
    addSort,
    addprice,
    clearBrand,
    clearCategory,
    clearColor,
} from "../../features/filterSlice"
import {
    clearBrandToggle,
    clearCategoryToggle,
    clearColorToggle,
} from "../../features/productSlice"
import ShopCard from "./ShopCard"
import ShopCardList from "./ShopCardList"

const FilterShopBox = () => {
    const { shopList, shopSort } = useSelector((state) => state.filter)
    const { price, category, color, brand } = shopList || {}
    const { sort, perPage } = shopSort
    const dispatch = useDispatch()

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 8 // Default items per page
    
    // UI State
    const [isSortOpen, setIsSortOpen] = useState(false)
    const sortRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(2)

    const addToCart = (id) => {
        const item = products?.find((item) => item.id === id)
        dispatch(addCart({ product: item }))
    }
    const addToWishlist = (id) => {
        const item = products?.find((item) => item.id === id)
        dispatch(addWishlist({ product: item }))
    }

    const handleOnClick = (index) => setActiveIndex(index)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sortRef.current && !sortRef.current.contains(event.target)) setIsSortOpen(false)
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    // Logic Filters
    const priceFilter = (item) => item?.price?.min >= price?.min && item?.price?.max <= price?.max
    const categoryFilter = (item) => category?.length !== 0 && item?.category !== undefined ? category?.includes(item?.category[0]?.type.toLocaleLowerCase().split(" ").join("-")) : item
    const colorFilter = (item) => color?.length !== 0 && item?.color !== undefined ? color?.includes(item?.color[0]?.type.toLocaleLowerCase().split(" ").join("-")) : item
    const brandFilter = (item) => brand?.length !== 0 && item?.brand !== undefined ? brand?.includes(item?.brand[0]?.type.toLocaleLowerCase().split(" ").join("-")) : item
    const sortFilter = (a, b) => sort === "des" ? a.id > b.id && -1 : a.id < b.id && -1

    const finalFiltered = products
        ?.filter(priceFilter)
        ?.filter(categoryFilter)
        ?.filter(colorFilter)
        ?.filter(brandFilter)
        ?.sort(sortFilter)

    // Pagination Logic
    const totalPages = Math.ceil(finalFiltered.length / (perPage.end || itemsPerPage))
    const currentItems = finalFiltered.slice(
        (currentPage - 1) * (perPage.end || itemsPerPage),
        currentPage * (perPage.end || itemsPerPage)
    )

    const clearAll = () => {
        dispatch(addprice({ min: 0, max: 100 }))
        dispatch(clearCategory()); dispatch(clearCategoryToggle())
        dispatch(clearColor()); dispatch(clearColorToggle())
        dispatch(clearBrand()); dispatch(clearBrandToggle())
        dispatch(addSort(""))
        dispatch(addPerPage({ start: 0, end: 0 }))
        setCurrentPage(1)
    }

    const sortOptions = [
        { value: "", label: "Urutkan (Default)" },
        { value: "asc", label: "Terbaru" },
        { value: "des", label: "Terlama" }
    ]

    return (
        <>
            {/* ── FILTER TOP BAR ── */}
            <div className="bg-white p-4 lg:p-5 rounded-3xl mb-8 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl !bg-wk-maroon flex items-center justify-center shadow-lg shadow-wk-maroon/20">
                        <span className="text-white font-black text-sm">{finalFiltered?.length}</span>
                    </div>
                    <div>
                        <p className="text-[10px] font-black !text-wk-dark-maroon uppercase tracking-widest leading-none mb-1">Ditemukan</p>
                        <p className="text-xs !text-gray-400 font-bold">Produk Tersedia</p>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 w-full md:w-auto">
                    {(price?.min !== 0 || price?.max !== 100 || category?.length !== 0 || sort !== "") && (
                        <button onClick={clearAll} className="px-4 py-3 !bg-red-50 !text-red-500 text-[10px] font-black uppercase tracking-widest rounded-xl border border-red-100 hover:bg-red-500 hover:text-white transition-all">Clear All</button>
                    )}

                    <div className="relative min-w-[180px]" ref={sortRef}>
                        <button onClick={() => setIsSortOpen(!isSortOpen)} className="w-full bg-white border border-gray-200 px-5 py-3 rounded-xl text-[11px] font-black !text-wk-dark-maroon uppercase tracking-wider flex items-center justify-between hover:border-wk-gold transition-all">
                            <span>{sortOptions.find(o => o.value === sort)?.label || "Urutkan"}</span>
                            <i className={`fal fa-chevron-down text-[10px] transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isSortOpen && (
                            <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl py-2 z-50 animate-fadeInUp">
                                {sortOptions.map(opt => (
                                    <button key={opt.value} onClick={() => { dispatch(addSort(opt.value)); setIsSortOpen(false); setCurrentPage(1); }} className={`w-full text-left px-5 py-3 text-[11px] font-black uppercase tracking-wider transition-all border-l-4 ${sort === opt.value ? '!text-wk-maroon bg-wk-gold/10 border-wk-gold' : '!text-gray-400 border-transparent hover:!text-wk-dark-maroon hover:bg-gray-50'}`}>{opt.label}</button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-200">
                        {[{ id: 2, icon: 'far fa-th' }, { id: 1, icon: 'far fa-list-ul' }].map(tab => (
                            <button key={tab.id} onClick={() => handleOnClick(tab.id)} className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${activeIndex === tab.id ? '!bg-wk-maroon !text-white transform scale-105 shadow-md' : '!text-gray-300 hover:!text-wk-maroon'}`}><i className={tab.icon}/></button>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── PRODUCT LISTING ── */}
            <div className="mb-14">
                <div className="tab-content">
                    {/* List View */}
                    <div className={activeIndex === 1 ? "animate-fadeIn" : "hidden"}>
                        <div className="space-y-8">
                            {currentItems.map((item, i) => (
                                <ShopCardList key={i} item={item} addToCart={addToCart} addToWishlist={addToWishlist} />
                            ))}
                        </div>
                    </div>

                    {/* Grid View (Locked 2 Cols on Mobile) */}
                    <div className={activeIndex === 2 ? "animate-fadeIn" : "hidden"}>
                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                            {currentItems.map((item, i) => (
                                <ShopCard key={i} item={item} addToCart={addToCart} addToWishlist={addToWishlist} />
                            ))}
                        </div>
                    </div>

                    {/* Empty State */}
                    {currentItems.length === 0 && (
                        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-100">
                            <i className="fal fa-search text-4xl !text-gray-200 mb-4 block" />
                            <p className="font-black !text-wk-dark-maroon uppercase tracking-widest text-sm">Produk tidak ditemukan</p>
                        </div>
                    )}
                </div>
            </div>

            {/* ── PAGINATION ── */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-3 mt-10 mb-10">
                    <button 
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                        className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center !text-wk-maroon hover:!bg-wk-gold/10 transition-all disabled:opacity-30"
                    >
                        <i className="fal fa-chevron-left"></i>
                    </button>
                    
                    {[...Array(totalPages)].map((_, i) => (
                        <button 
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`w-10 h-10 rounded-xl font-black text-xs transition-all border ${currentPage === i + 1 ? '!bg-wk-maroon !text-white border-wk-maroon shadow-lg shadow-wk-maroon/20' : 'bg-white !text-wk-dark-maroon border-gray-100 hover:border-wk-gold'}`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button 
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                        className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center !text-wk-maroon hover:!bg-wk-gold/10 transition-all disabled:opacity-30"
                    >
                        <i className="fal fa-chevron-right"></i>
                    </button>
                </div>
            )}
        </>
    )
}

export default FilterShopBox
