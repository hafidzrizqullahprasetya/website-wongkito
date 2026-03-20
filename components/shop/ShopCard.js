import Link from "next/link"

const formatRupiah = (num) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(num)

const ShopCard = ({ item, addToCart, addToWishlist }) => {
    return (
        <div className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-wk-gold/40 hover:shadow-2xl hover:shadow-wk-maroon/10 transition-all duration-500 h-full flex flex-col">

            {/* Thumbnail container */}
            <div className="relative overflow-hidden aspect-square flex-shrink-0 border-b border-gray-50">
                {/* Primary image */}
                <img
                    src={`https://placehold.co/600x600/f3f4f6/8B1A1A?text=${item.title ? item.title.replace(/ /g, '+') : 'Product'}+Depan`}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                {/* Secondary / hover image */}
                <img
                    src={`https://placehold.co/600x600/f3f4f6/8B1A1A?text=${item.title ? item.title.replace(/ /g, '+') : 'Product'}+Belakang`}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100 z-1"
                />
                
                {/* Invisible click overlay */}
                <Link href={`/shop/${item.id}`} className="absolute inset-0 z-10" aria-label={item.title} />

                {/* Quick Action Buttons */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex flex-col gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 z-20 transform lg:translate-x-4 lg:group-hover:translate-x-0">
                    <button
                        onClick={() => addToCart(item.id)}
                        title="Tambah ke Keranjang"
                        className="w-8 h-8 sm:w-9 sm:h-9 !bg-wk-maroon !text-white rounded-full flex items-center justify-center hover:bg-wk-dark-maroon transition-colors text-xs sm:text-sm shadow-md"
                    >
                        <i className="fal fa-shopping-basket" />
                    </button>
                    <button
                        onClick={() => addToWishlist(item.id)}
                        title="Wishlist"
                        className="w-8 h-8 sm:w-9 sm:h-9 !bg-white !text-wk-maroon border border-wk-gold/20 rounded-full flex items-center justify-center hover:bg-wk-gold/10 transition-colors text-xs sm:text-sm shadow-md"
                    >
                        <i className="fal fa-heart" />
                    </button>
                </div>
            </div>

            {/* Card Content */}
            <div className="p-4 sm:p-5 flex flex-col flex-1 bg-gradient-to-b from-white to-gray-50/30">
                <h3 className="text-[13px] sm:text-sm font-black !text-wk-dark-maroon mb-2.5 leading-snug line-clamp-2 min-h-[2.8em] group-hover:text-wk-maroon transition-colors">
                    <Link href={`/shop/${item.id}`}>
                        {item.title}
                    </Link>
                </h3>

                <div className="mt-auto pt-3 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-sm sm:text-base font-black !text-wk-maroon">
                        {formatRupiah(item.price.max)}
                    </span>
                    <div className="flex items-center gap-1.5">
                        <span className="flex text-[8px] sm:text-[9px] !text-wk-gold">
                            {[...Array(5)].map((_, i) => (
                                <i key={i} className={i < 4 ? "fas fa-star" : "far fa-star"} />
                            ))}
                        </span>
                        <span className="text-[9px] sm:text-[10px] !text-gray-400 font-black tracking-tighter">(81)</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ShopCard