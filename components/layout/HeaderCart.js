'use client'
import { addQty, deleteCart } from "@/features/shopSlice"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"

export default function HeaderCart({ isCartSidebar, handleCartSidebar }) {
    const { cart } = useSelector((state) => state.shop) || {}
    const dispatch = useDispatch()

    const deleteCartHandler = (id) => {
        dispatch(deleteCart(id))
    }

    let total = 0;
    cart?.forEach((item) => {
        const price = item.qty * item.price?.max;
        total = total + price;
    });

    return (
        <>
            <div className={`fixed top-0 right-0 h-full w-[350px] !bg-white z-[1000] transition-transform duration-500 ease-in-out transform ${isCartSidebar ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex flex-col h-full !bg-white border-l border-gray-100">
                    {/* Header Sidebar */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-100 !bg-wk-maroon/5">
                        <h4 className="text-xl font-extrabold !text-wk-maroon underline decoration-wk-gold/30">Keranjang Belanja</h4>
                        <button className="!text-wk-maroon hover:opacity-60 transition-opacity text-2xl" onClick={handleCartSidebar}>
                            <i className="fal fa-times-circle" />
                        </button>
                    </div>

                    {/* List Produk */}
                    <div className="flex-grow overflow-y-auto p-6 space-y-6">
                        {cart?.length > 0 ? (
                            <ul className="space-y-6">
                                {cart?.map((item, i) => (
                                    <li key={i} className="flex items-start !bg-wk-beige/10 p-4 rounded-xl border border-wk-beige/20 group relative overflow-hidden transition-all">
                                        <div className="w-20 h-20 flex-shrink-0 !bg-white rounded-lg border border-gray-100 overflow-hidden">
                                            <img src={`/assets/img/product/${item.imgf}`} alt={item.title} className="w-full h-full object-cover hover:opacity-80 transition-opacity duration-300" />
                                        </div>
                                        <div className="ml-4 flex-grow pr-6">
                                            <h5 className="text-sm font-bold !text-wk-dark-maroon mb-1 line-clamp-2 leading-snug">
                                                <Link href="/shop-details" className="hover:opacity-70 transition-opacity block">{item.title}</Link>
                                            </h5>
                                            <div className="flex items-center text-xs font-semibold text-gray-500 mt-2">
                                                <span className="!bg-wk-gold/20 !text-wk-maroon px-2 py-0.5 rounded mr-2">{item?.qty} x</span>
                                                <span className="!text-wk-maroon font-black text-sm">Rp {item?.price.max.toLocaleString()}</span>
                                            </div>
                                        </div>
                                        <button 
                                            onClick={() => deleteCartHandler(item?.id)}
                                            className="absolute top-2 right-2 text-gray-300 hover:!text-red-500 hover:opacity-100 transition-all opacity-40"
                                        >
                                            <i className="fal fa-trash-alt text-sm" />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-center py-20 opacity-40">
                                <i className="fal fa-shopping-basket text-6xl mb-4 !text-wk-maroon" />
                                <p className="font-bold !text-wk-dark-maroon">Keranjang kosong boss!</p>
                            </div>
                        )}
                    </div>

                    {/* Footer Sidebar (Total & Button) */}
                    <div className="p-6 !bg-gray-50 border-t border-gray-100">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-sm font-bold text-gray-400">Total Pembayaran:</span>
                            <span className="text-2xl font-black !text-wk-maroon">Rp {total.toLocaleString()}</span>
                        </div>
                        <div className="space-y-3">
                            <Link href="/cart" className="w-full border-2 border-wk-maroon !text-wk-maroon font-extrabold py-3 rounded-lg flex items-center justify-center hover:opacity-70 hover:!bg-transparent hover:!text-wk-maroon transition-opacity">
                                <i className="fal fa-shopping-bag mr-2" /> Lihat Keranjang
                            </Link>
                            <Link href="/checkout" className="w-full !bg-wk-maroon !text-wk-gold font-extrabold py-4 rounded-lg flex items-center justify-center hover:opacity-85 hover:!bg-wk-maroon hover:!text-wk-gold transition-opacity">
                                <i className="fal fa-check-circle mr-2" /> Checkout Sekarang
                            </Link>
                        </div>
                        <div className="mt-6 text-center">
                            <span className="text-[11px] text-gray-400 font-bold uppercase tracking-widest block">
                                <i className="fal fa-info-circle mr-1" /> Gratis Ongkir Area Sleman/Jogja
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Overlay Gelap */}
            {isCartSidebar && (
                <div 
                    className="fixed inset-0 !bg-wk-dark-maroon/60 backdrop-blur-sm z-[999] transition-opacity duration-500"
                    onClick={handleCartSidebar} 
                />
            )}
        </>
    )
}
