const Header = () => {
    return (
        <div className="bg-indigo-200 flex flex-col items-center py-20 z-0">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl mb-6 text-semibold tracking-tighter">How can we help?</h1>
            <div className="w-11/12 lg:w-8/12 max-w-3xl flex justify-start items-center bg-white rounded-md px-3 shadow-lg ring-1 ring-slate-900 group hover:ring-blue-700 transition ease duration-150">
                <label htmlFor="search" className="w-full cursor-text mr-1">
                    <input id="search" className="w-full focus:outline-none h-14" type="text" placeholder="Search" />
                </label>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 group-hover:stroke-blue-700 transition ease duration-150">
                    <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>


            </div>
        </div>
    );
}

export default Header;
