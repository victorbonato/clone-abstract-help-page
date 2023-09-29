const Footer = () => {
    return (
        <div className="bg-slate-950 flex flex-col items-center text-white py-8">
            <div className="w-9/12 sm:w-11/12 xl:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-gap-20 auto-cols-min divide-y sm:divide-y-0">
                <div className="py-5"> 
                    <p className="text-left text-xl font-bold mb-3 whitespace-wrap">Abstract</p>
                    <div className="flex flex-col text-left">
                        <a className="hover:underline flex-wrap flex-wrap" href="#">Start Trial</a>
                        <a className="hover:underline flex-wrap" href="#">Pricing</a>
                        <a className="hover:underline flex-wrap" href="#">Download</a>
                    </div>
                </div>
                <div className="py-5">
                    <p className="text-left text-xl font-bold mb-3">Resources</p>
                    <div className="text-left flex flex-col">
                        <a className="hover:underline flex-wrap" href="#">Blog</a>
                        <a className="hover:underline flex-wrap" href="#">Help Center</a>
                        <a className="hover:underline flex-wrap" href="#">Release Notes</a>
                        <a className="hover:underline flex-wrap" href="#">Status</a>
                    </div>
                </div>
                <div className="py-5"> 
                    <p className="text-left text-xl font-bold mb-3">Community</p>
                    <div className="flex flex-col text-left">
                        <a className="hover:underline flex-wrap" href="#">Twitter</a>
                        <a className="hover:underline flex-wrap" href="#">LinkedIn</a>
                        <a className="hover:underline flex-wrap" href="#">Facebook</a>
                        <a className="hover:underline flex-wrap" href="#">Dribbble</a>
                        <a className="hover:underline flex-wrap" href="#">Podcast</a>
                    </div>
                </div>
                <div className="py-5"> 
                    <div className="flex flex-col text-left mb-3">
                        <p className="text-xl font-bold text-left mb-3">Company</p>
                        <a className="hover:underline flex-wrap" href="#">About Us</a>
                        <a className="hover:underline flex-wrap" href="#">Careers</a>
                        <a className="hover:underline flex-wrap" href="#">Legal</a>
                    </div>

                    <div className="flex flex-col">
                        <p className="text-lg font-semibold text-left mb-3">Contact Us</p>
                        <a className="text-lg text-left hover:underline flex-wrap" href="#">info@abstract.com</a>
                    </div>
                </div>
                <div className="flex flex-col items-start pt-5"> 
                    <img src="src/assets/icons8-tesseract-48.png" className="h-5 w-5 mb-2" />
                    <p className="w-full text-left mb-0.5">© Copyright 2023</p>
                    <p className="w-full text-left mb-0.5">Abstract Studio Design, Inc.</p>
                    <p className="w-full text-left mb-0.5">All rights reserved</p>
                </div>
            </div>
        </div>
    )

}

export default Footer;
