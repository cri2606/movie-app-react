import { AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';

export const ResponsiveMenu = ({ open }: any) => {
    return (
        <AnimatePresence>
            {open && (
                <div className="text-xl font-semibold bg-green-400 py-8 m-6 rounded">
                    <div className="py-8 flex flex-col justify-center items-center">
                        {/* Contenitore con classe relative */}
                        <div className="relative w-3/4 md:w-1/2">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="py-2 px-4 pr-10 w-full rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                            <Search className="w-5 h-5 absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>
                    <ul className="flex flex-col justify-center items-center gap-10 text-white">
                        <li><a href="#" className="inline-block text-[#213547] py-1 px-3 font-semibold">Trending Movies</a></li>
                        <li><a href="#" className="inline-block text-[#213547] py-1 px-3 font-semibold">Trending People</a></li>
                        <li><a href="#" className="inline-block text-[#213547] py-1 px-3 font-semibold">Trending TV</a></li>
                    </ul>
                </div>
            )}
        // </AnimatePresence>
    );
};

export default ResponsiveMenu;
