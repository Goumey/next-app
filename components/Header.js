import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-[#f7f7f7] shadow flex justify-between">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h3 className="text-3xl font-bold text-gray-900">Logo</h3>
            </div>
            <ul className="w-3/4 mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-around">
                <li className="text-xl font-bold text-gray-900"><Link href="/">Home</Link></li>
                <li className="text-xl font-bold text-gray-900"><Link href="/instagram">Instagram</Link></li>
                <li className="text-xl font-bold text-gray-900"><Link href="/facebook">Facebook</Link></li>
                <li className="text-xl font-bold text-gray-900"><Link href="/tiktok">Tiktok</Link></li>
                <li className="text-xl font-bold text-gray-900"><Link href="/calculate">Calculate</Link></li>

            </ul>
        </header>
    )
}