import Link from "next/link"

const formatRupiah = (num) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(num)

const ShopCard = ({ item, addToCart, addToWishlist }) => {
    return (
        <div className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-wk-gold/30 transition-colors duration-300">

            {/* Thumbnail container — images NOT inside <a> to avoid global opacity reset conflict */}
            <div className="relative overflow-hidden aspect-square">
                {/* Primary image (Always visible) */}
                <img
                    src={`https://placehold.co/600x600/f3f4f6/8B1A1A?text=${item.title ? item.title.replace(/ /g, '+') : 'Product'}+Depan`}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Secondary / hover image (Stacked on top) */}
                <img
                    src={`https://placehold.co/600x600/f3f4f6/8B1A1A?text=${item.title ? item.title.replace(/ /g, '+') : 'Product'}+Belakang`}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-1"
                />
                {/* Invisible click overlay to navigate */}
                <Link href={`/shop/${item.id}`} className="absolute inset-0 z-10" aria-label={item.title} />

                {/* Quick Action Buttons — appear on hover */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <button
                        onClick={() => addToCart(item.id)}
                        title="Tambah ke Keranjang"
                        className="w-9 h-9 !bg-wk-maroon !text-white rounded-full flex items-center justify-center hover:opacity-75 transition-opacity text-sm"
                    >
                        <i className="fal fa-shopping-basket" />
                    </button>
                    <button
                        onClick={() => addToWishlist(item.id)}
                        title="Wishlist"
                        className="w-9 h-9 !bg-white !text-wk-maroon border border-wk-gold/20 rounded-full flex items-center justify-center hover:opacity-75 transition-opacity text-sm"
                    >
                        <i className="fal fa-heart" />
                    </button>
                </div>
            </div>

            {/* Card Content */}
            <div className="p-4">
                <h3 className="text-sm font-bold !text-wk-dark-maroon mb-2 leading-snug line-clamp-2">
                    <Link href={`/shop/${item.id}`} className="hover:opacity-70 transition-opacity">
                        {item.title}
                    </Link>
                </h3>

                <div className="flex items-center justify-between mt-3">
                    <span className="text-base font-black !text-wk-maroon">
                        {formatRupiah(item.price.max)}
                    </span>
                    <div className="flex items-center gap-1">
                        <span className="flex text-[10px] !text-wk-gold">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                        </span>
                        <span className="text-[10px] !text-gray-400 font-medium">(81)</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ShopCard