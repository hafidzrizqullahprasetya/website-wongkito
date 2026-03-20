import Link from "next/link"

const ShopCardList = ({ item, addToCart, addToWishlist }) => {
    const formatRupiah = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(num)

    return (
        <div className="group relative bg-white rounded-3xl border border-gray-100 overflow-hidden hover:border-wk-maroon/20 hover:shadow-2xl hover:shadow-wk-maroon/5 transition-all duration-500">
            <div className="flex flex-col md:flex-row gap-0 md:gap-8">
                
                {/* Image Section */}
                <div className="md:w-1/3 relative aspect-[4/3] md:aspect-square overflow-hidden bg-gray-50">
                    <img 
                        src={`/assets/img/product/${item.imgf}`} 
                        alt={item.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" 
                    />
                    {/* Hover Overlay Image */}
                    <img 
                        src={`/assets/img/product/${item.imgb}`} 
                        alt={item.title} 
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100 z-1" 
                    />
                    <Link href={`/shop/${item.id}`} className="absolute inset-0 z-10" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1 !bg-wk-gold !text-wk-dark-maroon text-[9px] font-black uppercase tracking-widest rounded-full shadow-sm">
                            Wong Kito
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6 md:py-8 md:pr-10">
                    <div className="flex flex-col h-full">
                        <div className="flex justify-between items-start gap-4 mb-3">
                            <div>
                                <h3 className="text-lg md:text-xl font-black !text-wk-dark-maroon group-hover:!text-wk-maroon transition-colors leading-tight uppercase tracking-tight mb-2">
                                    <Link href={`/shop/${item.id}`}>{item.title}</Link>
                                </h3>
                                <div className="flex items-center gap-2">
                                    <div className="flex text-[10px] !text-wk-gold">
                                        {[...Array(5)].map((_, i) => (
                                            <i key={i} className={`${i < 4 ? 'fas' : 'far'} fa-star`}></i>
                                        ))}
                                    </div>
                                    <span className="text-[10px] !text-gray-400 font-bold uppercase tracking-wider">(81 Ulasan)</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="block text-xl font-black !text-wk-maroon">{formatRupiah(item.price.max)}</span>
                                <del className="text-xs !text-gray-300 font-bold tracking-tighter">Rp{item.price.max + 15000}</del>
                            </div>
                        </div>

                        <p className="text-sm !text-gray-500 leading-relaxed line-clamp-2 md:line-clamp-3 mb-8">
                            Pempek Wong Kito asli Palembang, dibuat segar setiap hari dari ikan pilihan kualitas terbaik. Tanpa pengawet, higienis, dan dilengkapi dengan cuko kental khas yang asam-manis-pedasnya pas.
                        </p>

                        {/* Action Buttons */}
                        <div className="mt-auto flex items-center gap-4">
                            <button 
                                onClick={() => addToCart(item.id)}
                                className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-3.5 !bg-wk-maroon !text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-xl hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-wk-maroon/20"
                            >
                                <i className="fal fa-shopping-basket text-sm"></i> Tambah Keranjang
                            </button>
                            <button 
                                onClick={() => addToWishlist(item.id)}
                                className="w-12 h-12 flex items-center justify-center rounded-xl border-2 border-gray-100 !text-wk-maroon hover:!bg-gray-50 transition-all active:scale-95"
                            >
                                <i className="fal fa-heart text-lg"></i>
                            </button>
                            <button className="hidden sm:flex w-12 h-12 items-center justify-center rounded-xl border-2 border-gray-100 !text-wk-maroon hover:!bg-gray-50 transition-all active:scale-95">
                                <i className="fal fa-eye text-lg"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopCardList