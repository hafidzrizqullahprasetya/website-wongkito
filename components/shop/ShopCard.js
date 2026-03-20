import Link from "next/link"

const formatRupiah = (num) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(num)

const ShopCard = ({ item, addToCart, addToWishlist }) => {
    return (
        <div className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-wk-gold/30 transition-colors duration-300">

            {/* Thumbnail container — images NOT inside <a> to avoid global opacity reset conflict */}
            <div className="relative overflow-hidden aspect-square rounded-t-2xl">
                {/* Primary image */}
                <img
                    src={`https://placehold.co/600x600/f3f4f6/8B1A1A?text=${item.title ? item.title.replace(/ /g, '+') : 'Product'}+Depan`}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Secondary / hover image */}
                <img
                    src={`https://placehold.co/600x600/f3f4f6/8B1A1A?text=${item.title ? item.title.replace(/ /g, '+') : 'Product'}+Belakang`}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-1"
                />
                {/* Invisible click overlay */}
                <Link href={`/shop/${item.id}`} className="absolute inset-0 z-10" aria-label={item.title} />

                {/* Quick Action Buttons — Always visible on mobile, hover on desktop */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex flex-col gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 z-20 transform lg:translate-x-4 lg:group-hover:translate-x-0">
                    <button
                        onClick={() => addToCart(item.id)}
                        title="Tambah ke Keranjang"
                        className="w-8 h-8 sm:w-9 sm:h-9 !bg-wk-maroon !text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all text-xs sm:text-sm"
                    >
                        <i className="fal fa-shopping-basket" />
                    </button>
                    <button
                        onClick={() => addToWishlist(item.id)}
                        title="Wishlist"
                        className="w-8 h-8 sm:w-9 sm:h-9 !bg-white !text-wk-maroon border border-wk-gold/20 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all text-xs sm:text-sm"
                    >
                        <i className="fal fa-heart" />
                    </button>
                </div>
            </div>

            {/* Card Content */}
            <div className="p-3 sm:p-4">
                <h3 className="text-[13px] sm:text-sm font-bold !text-wk-dark-maroon mb-1.5 sm:mb-2 leading-snug line-clamp-2 min-h-[2.4em]">
                    <Link href={`/shop/${item.id}`} className="hover:text-wk-maroon transition-colors">
                        {item.title}
                    </Link>
                </h3>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mt-auto">
                    <span className="text-sm sm:text-base font-black !text-wk-maroon">
                        {formatRupiah(item.price.max)}
                    </span>
                    <div className="flex items-center gap-1">
                        <span className="flex text-[9px] sm:text-[10px] !text-wk-gold">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                        </span>
                        <span className="text-[9px] sm:text-[10px] !text-gray-400 font-medium">(81)</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ShopCard