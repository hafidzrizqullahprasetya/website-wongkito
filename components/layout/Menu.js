'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Menu() {
    const pathname = usePathname()

    return (
        <ul className="flex flex-col space-y-2 p-4">
            <li>
                <Link href="/" className={`!text-wk-beige hover:!text-wk-gold hover:opacity-75 transition-opacity ${pathname === "/" ? "!text-wk-gold font-bold" : ""}`}>Beranda</Link>
            </li>
            <li>
                <Link href="/shop" className={`!text-wk-beige hover:!text-wk-gold hover:opacity-75 transition-opacity ${pathname === "/shop" ? "!text-wk-gold font-bold" : ""}`}>Menu</Link>
            </li>
        </ul>
    )
}
