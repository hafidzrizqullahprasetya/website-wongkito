'use client'
import BrandLevel from "../filter/Brand"
import CategoryLevel from "../filter/Categories"
import ColorLevel from "../filter/Colors"
import PriceRangeSlider from "../filter/PriceRangeSlider"

const FilterSidebar = () => {
    return (
        <div className="space-y-10">
            {/* Sidebar Widget: Category */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-500 group">
                <div className="flex items-center gap-3 mb-8">
                    <span className="w-2 h-6 !bg-wk-gold rounded-full block" />
                    <h4 className="text-sm font-black !text-wk-dark-maroon uppercase tracking-widest leading-none">Kategori</h4>
                </div>
                <div className="pl-5 border-l-2 border-gray-50 group-hover:border-wk-gold/20 transition-all">
                    <CategoryLevel />
                </div>
            </div>

            {/* Sidebar Widget: Price Filter */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-500">
                <div className="flex items-center gap-3 mb-8">
                    <span className="w-2 h-6 !bg-wk-maroon rounded-full block" />
                    <h4 className="text-sm font-black !text-wk-dark-maroon uppercase tracking-widest leading-none">Filter Harga</h4>
                </div>
                <div className="px-2">
                    <PriceRangeSlider />
                </div>
            </div>

            {/* Sidebar Widget: Color (If relevant for Pempek, otherwise we could hide it or style it) */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-500 group">
                <div className="flex items-center gap-3 mb-8">
                    <span className="w-2 h-6 !bg-wk-gold rounded-full block" />
                    <h4 className="text-sm font-black !text-wk-dark-maroon uppercase tracking-widest leading-none">Varian</h4>
                </div>
                <div className="pl-5 border-l-2 border-gray-50 group-hover:border-wk-gold/20 transition-all">
                    <ColorLevel />
                </div>
            </div>

            {/* Sidebar Widget: Brand / Merk */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-500 group">
                <div className="flex items-center gap-3 mb-8">
                    <span className="w-2 h-6 !bg-wk-maroon rounded-full block" />
                    <h4 className="text-sm font-black !text-wk-dark-maroon uppercase tracking-widest leading-none">Merk</h4>
                </div>
                <div className="pl-5 border-l-2 border-gray-50 group-hover:border-wk-maroon/20 transition-all">
                    <BrandLevel />
                </div>
            </div>

            {/* Sticky Promo / Help Widget */}
            <div className="bg-wk-maroon p-8 rounded-3xl shadow-xl shadow-wk-maroon/20 relative overflow-hidden group">
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 !bg-wk-gold/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative z-10">
                    <i className="fal fa-headset text-3xl !text-wk-gold mb-6 block" />
                    <h4 className="text-lg font-black text-white leading-tight mb-4 uppercase tracking-tight">Butuh bantuan memesan?</h4>
                    <p className="text-[11px] font-medium text-white/60 mb-8 leading-loose uppercase tracking-[0.1em]">Admin kami siap membantu Anda memilih paket pempek terbaik untuk keluarga.</p>
                    <a href="#" className="inline-flex items-center gap-3 px-6 py-3 !bg-wk-gold !text-wk-dark-maroon font-black text-[10px] uppercase tracking-widest rounded-xl hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-black/10">
                        Chat WhatsApp <i className="fab fa-whatsapp text-sm" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FilterSidebar
