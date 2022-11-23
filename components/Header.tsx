import Link from "next/link"
function Header() {
    return (
        <div className="border-b-4 border-gray-900">
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 justify-end lg:gap-x-12 mr-[150px]">
                <Link
                    href={"/"}
                    className="font-semibold text-gray-900 hover:text-gray-900"
                >Home</Link>
                <Link
                    href={"/about"}
                    className="font-semibold text-gray-900 hover:text-gray-900"
                >About</Link>
                <Link
                    href={"/portofolio"}
                    className="font-semibold text-gray-900 hover:text-gray-900"
                >Portofolio</Link>
                <Link
                    href={"/contact"}
                    className="font-semibold text-gray-900 hover:text-gray-900"
                >Contact</Link>
                </div>
            </div>
    )
}

export default Header