import { AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';

type ResponsiveMenuProps = {
    open: boolean;
    activeSection: string;
    onSectionChange: (section: string) => void;
    handleButtonClick: (section: string) => void;
};

export const ResponsiveMenu = ({ open, activeSection, handleButtonClick }: ResponsiveMenuProps) => {
    return (
        <AnimatePresence>
            {open && (
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 mx-4 my-2 rounded-2xl shadow-xl">
                    <div className="py-6 flex flex-col justify-center items-center">
                        {/* Search container */}
                        <div className="relative w-11/12 md:w-3/4">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full py-2.5 px-4 pr-12 rounded-full bg-white/10 border border-white/20 
                                         text-white placeholder-white/60 focus:outline-none focus:bg-white/20 
                                         focus:border-white/30 transition-all duration-200"
                            />
                            <Search className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70" />
                        </div>
                    </div>
                    <ul className="flex flex-col justify-center items-center gap-4 pb-6">
                        <li className="w-11/12 md:w-3/4">
                            <button 
                                onClick={() => handleButtonClick('Trending Movies')} 
                                className={`w-full py-3 px-4 font-medium rounded-full transition-all duration-200
                                    ${activeSection === 'Trending Movies' 
                                        ? 'bg-white text-emerald-600 shadow-md' 
                                        : 'bg-transparent text-white hover:bg-emerald-400/30'}`}
                            >
                                Trending Movies
                            </button>
                        </li>
                        <li className="w-11/12 md:w-3/4">
                            <button 
                                onClick={() => handleButtonClick('Trending People')} 
                                className={`w-full py-3 px-4 font-medium rounded-full transition-all duration-200
                                    ${activeSection === 'Trending People' 
                                        ? 'bg-white text-emerald-600 shadow-md' 
                                        : 'bg-transparent text-white hover:bg-emerald-400/30'}`}
                            >
                                Trending People
                            </button>
                        </li>
                        <li className="w-11/12 md:w-3/4">
                            <button 
                                onClick={() => handleButtonClick('Trending TV')} 
                                className={`w-full py-3 px-4 font-medium rounded-full transition-all duration-200
                                    ${activeSection === 'Trending TV' 
                                        ? 'bg-white text-emerald-600 shadow-md' 
                                        : 'bg-transparent text-white hover:bg-emerald-400/30'}`}
                            >
                                Trending TV
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ResponsiveMenu;