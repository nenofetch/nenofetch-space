import Link from "next/link"
function Header() {
    return (
        <div className=" shadow-slate-500 drop-shadow-xl dark:drop-shadow-gray-400">
            <div className="hidden lg:flex lg:min-w-0 justify-start dark:text-white">
                <Link
                    href={"/"}
                    className='font-bold font-sans  hover:text-red-500'
                >Brand Logo Temp</Link>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 justify-end lg:gap-x-14 mr-[150px] pb-10 font-family text-xl dark:text-white">
                <Link
                    href={"/"}
                    className="font-bold font-san"
                >Home</Link>
                <Link
                    href={"/about"}
                    className="font-bold font-sans hover:text-red-900 "
                >About</Link>
                <Link
                    href={"/portofolio"}
                    className="font-bold font-sans hover:text-red-900 "
                >Portofolio</Link>
                <Link
                    href={"/contact"}
                    className="font-bold font-sans hover:text-red-900 "
                >Contact</Link>
                </div>
            </div>
    )
}

export default Header