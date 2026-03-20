'use client'
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { addQty, deleteCart } from "@/features/shopSlice"

const formatRupiah = (num) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(num)

const CartItems = () => {
    const { cart } = useSelector((state) => state.shop) || {}
    const dispatch = useDispatch()

    const deleteCartHandler = (id) => dispatch(deleteCart(id))
    const qtyHandler = (id, qty) => dispatch(addQty({ id, qty }))

    return (
        <>
            {cart?.map((item) => (
                <div
                    key={item.id}
                    className="grid grid-cols-[64px_1fr] md:grid-cols-[80px_1fr_120px_120px_120px_60px] gap-4 items-center px-6 py-4 border-b border-gray-100 last:border-b-0"
                >
                    {/* Image */}
                    <Link href={`/shop/${item.id}`} className="flex-shrink-0">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border border-gray-100">
                            <img
                                src={`https://placehold.co/100x100/f3f4f6/8B1A1A?text=Product`}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </Link>

                    {/* Name */}
                    <div className="md:col-auto col-span-1">
                        <Link href={`/shop/${item.id}`} className="text-sm font-bold !text-wk-dark-maroon leading-snug hover:opacity-70 transition-opacity line-clamp-2">
                            {item.title}
                        </Link>
                        {/* Mobile: price shown here */}
                        <span className="md:hidden block text-xs font-black !text-wk-maroon mt-1">
                            {formatRupiah(item.price.max)}
                        </span>
                    </div>

                    {/* Unit price — hidden on mobile */}
                    <div className="hidden md:block">
                        <span className="text-sm font-bold !text-wk-dark-maroon">
                            {formatRupiah(item.price.max)}
                        </span>
                    </div>

                    {/* Qty */}
                    <div className="hidden md:block">
                        <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden w-fit">
                            <input
                                type="number"
                                defaultValue={item?.qty}
                                min={1}
                                onChange={(e) => qtyHandler(item?.id, e.target.value)}
                                className="w-14 py-2 text-center text-sm font-bold !text-wk-dark-maroon outline-none"
                            />
                        </div>
                    </div>

                    {/* Subtotal */}
                    <div className="hidden md:block">
                        <span className="text-sm font-black !text-wk-maroon">
                            {formatRupiah(item?.qty * item?.price.max)}
                        </span>
                    </div>

                    {/* Remove */}
                    <div className="hidden md:flex justify-end">
                        <button
                            onClick={() => deleteCartHandler(item?.id)}
                            title="Hapus dari keranjang"
                            className="w-8 h-8 rounded-full !bg-red-50 !text-red-400 flex items-center justify-center hover:opacity-70 transition-opacity text-sm"
                        >
                            <i className="fal fa-times" />
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CartItems
