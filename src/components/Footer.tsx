const Footer = () => {
    return (
        <div className="bg-slate-950 flex flex-col items-center text-white py-8">
            <div className="w-9/12 sm:w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-gap-20 auto-cols-min divide-y sm:divide-y-0">
                <div className="py-5"> 
                    <p className="text-center sm:text-left text-xl font-bold mb-3">Abstract</p>
                    <div className="flex flex-col text-center sm:text-left">
                        <a className="hover:underline" href="#">Start Trial</a>
                        <a className="hover:underline" href="#">Pricing</a>
                        <a className="hover:underline" href="#">Download</a>
                    </div>
                </div>
                <div className="py-5">
                    <p className="text-center sm:text-left text-xl font-bold mb-3">Resources</p>
                    <div className="text-center sm:text-left flex flex-col">
                        <a className="hover:underline" href="#">Blog</a>
                        <a className="hover:underline" href="#">Help Center</a>
                        <a className="hover:underline" href="#">Release Notes</a>
                        <a className="hover:underline" href="#">Status</a>
                    </div>
                </div>
                <div className="py-5"> 
                    <p className="text-center sm:text-left text-xl font-bold mb-3">Community</p>
                    <div className="flex flex-col text-center sm:text-left">
                        <a className="hover:underline" href="#">Twitter</a>
                        <a className="hover:underline" href="#">LinkedIn</a>
                        <a className="hover:underline" href="#">Facebook</a>
                        <a className="hover:underline" href="#">Dribbble</a>
                        <a className="hover:underline" href="#">Podcast</a>
                    </div>
                </div>
                <div className="py-5"> 
                    <div className="flex flex-col text-center sm:text-left mb-3">
                        <p className="text-xl font-bold text-center sm:text-left mb-3">Company</p>
                        <a className="hover:underline" href="#">About Us</a>
                        <a className="hover:underline" href="#">Careers</a>
                        <a className="hover:underline" href="#">Legal</a>
                    </div>

                    <div className="flex flex-col">
                        <p className="text-lg font-semibold text-center sm:text-left mb-3">Contact Us</p>
                        <a className="text-lg text-center sm:text-left hover:underline" href="#">info@abstract.com</a>
                    </div>
                </div>
                <div className="flex flex-col items-start pt-8"> 
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
