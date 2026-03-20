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

    // State for Custom Dropdown
    const [isSortOpen, setIsSortOpen] = useState(false)
    const sortRef = useRef(null)

    const addToCart = (id) => {
        const item = products?.find((item) => item.id === id)
        dispatch(addCart({ product: item }))
    }
    const addToWishlist = (id) => {
        const item = products?.find((item) => item.id === id)
        dispatch(addWishlist({ product: item }))
    }

    const [activeIndex, setActiveIndex] = useState(2)
    const handleOnClick = (index) => setActiveIndex(index)

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sortRef.current && !sortRef.current.contains(event.target)) setIsSortOpen(false)
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    // filters
    const priceFilter = (item) => item?.price?.min >= price?.min && item?.price?.max <= price?.max
    const categoryFilter = (item) => category?.length !== 0 && item?.category !== undefined ? category?.includes(item?.category[0]?.type.toLocaleLowerCase().split(" ").join("-")) : item
    const colorFilter = (item) => color?.length !== 0 && item?.color !== undefined ? color?.includes(item?.color[0]?.type.toLocaleLowerCase().split(" ").join("-")) : item
    const brandFilter = (item) => brand?.length !== 0 && item?.brand !== undefined ? brand?.includes(item?.brand[0]?.type.toLocaleLowerCase().split(" ").join("-")) : item
    const sortFilter = (a, b) => sort === "des" ? a.id > b.id && -1 : a.id < b.id && -1

    const filteredContent = products
        ?.filter(priceFilter)
        ?.filter(categoryFilter)
        ?.filter(colorFilter)
        ?.filter(brandFilter)
        ?.sort(sortFilter)
        .slice(perPage.start, perPage.end !== 0 ? perPage.end : 10)

    const clearAll = () => {
        dispatch(addprice({ min: 0, max: 100 }))
        dispatch(clearCategory()); dispatch(clearCategoryToggle())
        dispatch(clearColor()); dispatch(clearColorToggle())
        dispatch(clearBrand()); dispatch(clearBrandToggle())
        dispatch(addSort(""))
        dispatch(addPerPage({ start: 0, end: 0 }))
    }

    const sortOptions = [
        { value: "", label: "Urutkan (Default)" },
        { value: "asc", label: "Terbaru" },
        { value: "des", label: "Terlama" }
    ]

    return (
        <>
            {/* ── FILTER TOP BAR ── */}
            <div className="bg-white p-4 lg:p-5 rounded-2xl mb-8 border border-gray-100 shadow-sm">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    
                    {/* Item Counter */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl !bg-wk-maroon flex items-center justify-center shadow-lg shadow-wk-maroon/20">
                            <span className="text-white font-black text-sm">{filteredContent?.length}</span>
                        </div>
                        <div>
                            <p className="text-[10px] font-black !text-wk-dark-maroon uppercase tracking-widest leading-none mb-1">Ditemukan</p>
                            <p className="text-xs !text-gray-400 font-bold">Produk Tersedia</p>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 w-full md:w-auto">
                        
                        {/* Clear All Button */}
                        {(price?.min !== 0 || price?.max !== 100 || category?.length !== 0 || sort !== "" || perPage.start !== 0) && (
                            <button onClick={clearAll} className="px-4 py-3 !bg-red-50 !text-red-500 text-[10px] font-black uppercase tracking-widest rounded-xl border border-red-100 hover:bg-red-500 hover:text-white transition-all shadow-sm">
                                Clear All
                            </button>
                        )}

                        {/* CUSTOM DROPDOWN SORTING */}
                        <div className="relative min-w-[200px]" ref={sortRef}>
                            <button 
                                onClick={() => setIsSortOpen(!isSortOpen)}
                                className="w-full bg-white border border-gray-200 px-5 py-3 rounded-xl text-[11px] font-black !text-wk-dark-maroon uppercase tracking-wider flex items-center justify-between hover:border-wk-gold transition-all"
                            >
                                <span>{sortOptions.find(opt => opt.value === sort)?.label || "Urutkan"}</span>
                                <i className={`fal fa-chevron-down text-[10px] transition-transform duration-300 ${isSortOpen ? 'rotate-180' : ''}`}></i>
                            </button>

                            {/* Dropdown Menu */}
                            {isSortOpen && (
                                <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl py-2 z-50 animate-fadeInUp">
                                    {sortOptions.map(option => (
                                        <button 
                                            key={option.value}
                                            onClick={() => {
                                                dispatch(addSort(option.value))
                                                setIsSortOpen(false)
                                            }}
                                            className={`w-full text-left px-5 py-3 text-[11px] font-black uppercase tracking-wider transition-all border-l-4 ${sort === option.value ? '!text-wk-maroon bg-wk-gold/10 border-wk-gold' : '!text-gray-400 border-transparent hover:!text-wk-dark-maroon hover:bg-gray-50'}`}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* View Switchers */}
                        <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-200">
                            {[
                                { id: 2, icon: 'far fa-th' },
                                { id: 1, icon: 'far fa-list-ul' }
                            ].map(tab => (
                                <button 
                                    key={tab.id}
                                    onClick={() => handleOnClick(tab.id)}
                                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${activeIndex === tab.id ? '!bg-wk-maroon !text-white transform scale-105 shadow-md' : '!text-gray-300 hover:!text-wk-maroon'}`}
                                >
                                    <i className={tab.icon}></i>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── PRODUCT LISTING ── */}
            <div className="mb-10"> {/* Margin dikurangi agar lebih dekat ke footer */}
                <div className="tab-content">
                    {/* List View */}
                    <div className={activeIndex === 1 ? "animate-fadeIn" : "hidden"}>
                        <div className="space-y-6">
                            {filteredContent?.map((item, i) => (
                                <ShopCardList key={i} item={item} addToCart={addToCart} addToWishlist={addToWishlist} />
                            ))}
                        </div>
                    </div>

                    {/* Grid View */}
                    <div className={activeIndex === 2 ? "animate-fadeIn" : "hidden"}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                            {filteredContent?.map((item, i) => (
                                <ShopCard key={i} item={item} addToCart={addToCart} addToWishlist={addToWishlist} />
                            ))}
                        </div>
                    </div>

                    {/* Empty State */}
                    {filteredContent?.length === 0 && (
                        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-100">
                            <i className="fal fa-search text-4xl !text-gray-200 mb-4 block"></i>
                            <p className="font-black !text-wk-dark-maroon uppercase tracking-widest text-sm">Produk tidak ditemukan</p>
                            <p className="text-xs !text-gray-400 mt-2">Coba atur ulang filter Anda</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default FilterShopBox
