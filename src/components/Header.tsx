const Header = () => {
    return (
    <div className="bg-indigo-200 flex flex-col items-center py-20 z-0">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl mb-6 text-semibold tracking-tighter">How can we help?</h1>
        <div className="w-11/12 lg:w-8/12 max-w-3xl flex justify-start items-center bg-white rounded-md px-3 shadow-lg ring-1 ring-slate-900 hover:ring-blue-700">
            <label htmlFor="search" className="w-full cursor-text mr-1">
                    <input id="search" className="w-full focus:outline-none h-14" type="text" placeholder="Search" />
            </label>
            <img src="src/assets/icons8-arrow-50.png" className="w-5 h-5 cursor-pointer" />

        </div>
    </div>
    );
}

export default Header;
