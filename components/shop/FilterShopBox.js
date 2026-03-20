'use client'
import { addCart } from "@/features/shopSlice"
import { addWishlist } from "@/features/wishlistSlice"
import { Fragment, useState } from "react"
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

    return (
        <>
            {/* ── FILTER TOP BAR ── */}
            <div className="bg-gray-50/50 p-4 lg:p-6 rounded-2xl mb-10 border border-gray-100 shadow-sm">
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
                            <button onClick={clearAll} className="px-4 py-3 !bg-red-50 !text-red-500 text-[10px] font-black uppercase tracking-widest rounded-xl border border-red-100 hover:bg-red-500 hover:text-white transition-all">
                                Clear All
                            </button>
                        )}

                        {/* Sorting Select */}
                        <div className="relative group min-w-[140px]">
                            <select 
                                value={sort} 
                                onChange={(e) => dispatch(addSort(e.target.value))}
                                className="w-full bg-white border border-gray-200 px-4 py-3 rounded-xl text-[11px] font-black !text-wk-dark-maroon uppercase tracking-wider appearance-none outline-none focus:border-wk-gold transition-all cursor-pointer"
                            >
                                <option value="">Urutkan (Terbaru)</option>
                                <option value="asc">Terbaru</option>
                                <option value="des">Terlama</option>
                            </select>
                            <i className="fal fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-[10px] pointer-events-none !text-wk-maroon"></i>
                        </div>

                        {/* View Switchers */}
                        <div className="flex bg-white p-1 rounded-xl border border-gray-200">
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
            <div className="mb-20">
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
