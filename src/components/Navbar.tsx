import { useState } from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-0.5 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

    const [isSearchBar, setIsSearchBar] = useState(false);


    const extraContent = (
        <div className="bg-slate-950 w-full h-28 flex flex-col justify-center items-center text-white absolute top-20 md:top-24 xl:hidden">
            <div className="w-2/3 sm:w-1/3 divide-y divide-gray-400 flex flex-col items-center justify-center">
                <div className="w-full py-2">
                    <a href='#' className="no-underline py-1 text-xl">Submit a request</a>
                </div>
                <div className="w-full py-2">
                    <a href='#' className="no-underline py-1 text-xl">Sign in</a>
                </div>
            </div>
        </div>
    )

    const searchBar = (
        <div className="bg-white h-20 md:h-24 flex items-center justify-between px-3 sm:px-14 lg:px-28">
            <input className="w-full h-1/2 rounded-sm outline-0 focus:outline-none ring-1 ring-black focus:ring-black px-3 mr-1 placeholder:font-xl placeholder:text-slate-800" type="text" placeholder="Search" />
            <button className="h-12 w-12" onClick={() => {setIsSearchBar(!isSearchBar)}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7 sm:w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    )

    return (
        <div className="flex flex-col relative divide-y divide-gray-400">
            {!isSearchBar ? (
                <nav className='bg-slate-950 h-20 md:h-24 flex items-center justify-between px-3 sm:px-14 lg:px-28 flex-wrap'>
                    <div className="flex items-center">
                        <img src="src/assets/icons8-tesseract-48.png" className="h-8 w-8 sm:h-10 sm:w-10 mr-1 sm:mr-1.5 " />
                        <p className="text-white font-semibold text-xl mr-1.5">Abstract </p>
                        <p className="text-white font-medium text-xl">|</p>
                        <p className="text-white font-medium text-xl ml-1.5">Help Center</p>
                    </div>

                    <div className="flex items-center">
                        <button
                            className="xl:hidden flex justify-center items-center h-12 w-12"
                            onClick={() => setIsSearchBar(!isSearchBar)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-8 h-8 opacity-50 hover:opacity-100 transition ease transform duration-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                        <button 
                            className="xl:hidden flex flex-col h-12 w-12 rounded justify-center items-center group"
                            onClick={() => setIsOpen((prev: boolean) => !prev)}>
                            <div
                                className={`${genericHamburgerLine} ${
isOpen
? "rotate-45 translate-y-2.5 opacity-50 group-hover:opacity-100"
: "opacity-50 group-hover:opacity-100"
}`}
                            />
                            <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
                            <div
                                className={`${genericHamburgerLine} ${
isOpen
? "-rotate-45 -translate-y-2.5 opacity-50 group-hover:opacity-100"
: "opacity-50 group-hover:opacity-100"
}`}
                            />
                        </button>

                        <button className="hidden xl:inline bg-slate-800 hover:bg-slate-900 rounded-md text-white px-4 py-2 ring-1 ring-white mr-4 text-2xl transition ease duration-300">
                            Submit a request
                        </button>
                        <button className="hidden xl:inline bg-blue-700 hover:bg-blue-800 rounded-md text-white px-4 py-2  text-2xl transition ease duration-300">
                            Sign in
                        </button>
                    </div>
                </nav>

            ) : (
               searchBar 
            )}
            {isOpen && extraContent}
        </div>
    );
}
