import { Search } from 'lucide-react';
import '../../css/navbar.css';
import { MdMenu } from 'react-icons/md';
import React, { useEffect } from 'react';
import ResponsiveMenu from './ResponsiveMenu';

export const Navbar = () => {
    const [open, setOpen] = React.useState(false);

        //chiude il responsive menu quando riporto la pagina a larghezza desktop
        useEffect(() => {
            const handleResize = () => {
                if (window.innerWidth >= 992) setOpen(false);
            };
                window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);
        
    return (
        <>
            <nav className="bg-green-400 shadow-md">
                <div className="container flex justify-between items-center py-6">
                    {/*Logo*/}
                    <div className="text-2xl flex items-center gap-2 font-bold">
                        <p>Movie App</p>
                    </div>
                    {/* Menu */}
                    <div className="hidden lg:block">
                        <ul className="flex items-center gap-6">
                            <li><a href="#" className="inline-block text-[#213547] py-1 px-3 font-semibold">Trending Movies</a></li>
                            <li><a href="#" className="inline-block text-[#213547] py-1 px-3 font-semibold">Trending People</a></li>
                            <li><a href="#" className="inline-block text-[#213547]  py-1 px-3 font-semibold">Trending TV</a></li>
                        </ul>
                    </div>
                    {/* Search */}
                    <div className="hidden lg:flex items-center relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        />
                        <Search className="w-5 h-5 absolute right-3 text-gray-400" />
                    </div>
                    {/* Mobile hamburger */}
                    <div className="lg:hidden" onClick={() => setOpen(!open)}>
                        <MdMenu className="text-4xl" />
                    </div>
                </div>
            </nav>
            {/* Mobile sidebar */}
            <ResponsiveMenu open={open} />
        </>
    );

};

export default Navbar;