import Layout from "@/components/layout/Layout"
import Link from "next/link"

const InputField = ({ icon, type, placeholder }) => (
    <div className="relative mb-4">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 !text-wk-maroon/50 text-sm">
            <i className={icon} />
        </span>
        <input
            type={type}
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 text-sm !text-wk-dark-maroon placeholder:text-gray-300 focus:border-wk-gold focus:outline-none transition-colors"
        />
    </div>
)

export default function SignIn() {
    return (
        <Layout breadcrumbTitle="Masuk / Daftar">
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">

                        {/* ── Login Card ── */}
                        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
                            {/* Banner image */}
                            <div className="relative h-40 overflow-hidden">
                                <img
                                    src="https://placehold.co/1200x400/3d0e0e/white?text=Banner+Login"
                                    alt="Login"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-wk-dark-maroon/80 to-transparent" />
                                <div className="absolute bottom-5 left-6 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full !bg-wk-gold/20 border border-wk-gold/30 flex items-center justify-center">
                                        <i className="fal fa-lock !text-wk-gold text-sm" />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-black !text-white leading-none">Masuk</h2>
                                        <span className="text-[10px] !text-white/50 font-medium">ke akun Wong Kito</span>
                                    </div>
                                </div>
                            </div>

                            {/* Form */}
                            <div className="p-7">
                                <p className="text-xs !text-gray-400 mb-6 leading-relaxed">
                                    Data Anda digunakan untuk mengelola akun dan mendukung pengalaman belanja yang lebih mudah.
                                </p>

                                <InputField icon="fal fa-user"  type="email" placeholder="Email / username" />
                                <InputField icon="fal fa-key"   type="password" placeholder="Password" />

                                <div className="flex items-center justify-between mb-6">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4 accent-wk-maroon rounded" />
                                        <span className="text-xs !text-gray-400 font-medium">Ingat saya</span>
                                    </label>
                                    <Link href="#" className="text-xs font-bold !text-wk-maroon hover:opacity-70 transition-opacity">
                                        Lupa password?
                                    </Link>
                                </div>

                                <button className="w-full flex items-center justify-center gap-2 py-3.5 !bg-wk-maroon !text-white font-black text-xs uppercase tracking-widest rounded-xl hover:opacity-80 transition-opacity">
                                    Masuk Sekarang
                                    <i className="fal fa-long-arrow-right" />
                                </button>
                            </div>
                        </div>

                        {/* ── Register Card ── */}
                        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
                            {/* Banner image */}
                            <div className="relative h-40 overflow-hidden">
                                <img
                                    src="https://placehold.co/1200x400/3d0e0e/white?text=Banner+Register"
                                    alt="Daftar"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-wk-dark-maroon/80 to-transparent" />
                                <div className="absolute bottom-5 left-6 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full !bg-wk-gold/20 border border-wk-gold/30 flex items-center justify-center">
                                        <i className="fal fa-user-plus !text-wk-gold text-sm" />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-black !text-white leading-none">Daftar</h2>
                                        <span className="text-[10px] !text-white/50 font-medium">akun baru gratis</span>
                                    </div>
                                </div>
                            </div>

                            {/* Form */}
                            <div className="p-7">
                                <p className="text-xs !text-gray-400 mb-6 leading-relaxed">
                                    Daftar sekarang untuk menikmati kemudahan pesan pempek favorit kapan saja dan di mana saja.
                                </p>

                                <InputField icon="fal fa-envelope" type="email"    placeholder="Alamat email" />
                                <InputField icon="fal fa-key"      type="password" placeholder="Buat password" />

                                <p className="text-xs !text-gray-400 mb-6">
                                    Sudah punya akun?{' '}
                                    <Link href="/sign-in" className="font-black !text-wk-maroon hover:opacity-70 transition-opacity">
                                        Masuk di sini
                                    </Link>
                                </p>

                                <button className="w-full flex items-center justify-center gap-2 py-3.5 !bg-wk-gold !text-wk-dark-maroon font-black text-xs uppercase tracking-widest rounded-xl hover:opacity-80 transition-opacity">
                                    Daftar Sekarang
                                    <i className="fal fa-long-arrow-right" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    )
}