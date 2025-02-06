import { AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { useNavbar } from '../../hooks/useNavbar';

type ResponsiveMenuProps = {
    open: boolean;
    activeSection: string;
    onSectionChange: (section: string) => void;
    handleButtonClick: (section: string) => void;
};

export const ResponsiveMenu = ({ open, activeSection, handleButtonClick }: ResponsiveMenuProps) => {
    const { searchQuery, setSearchQuery, handleSearch } = useNavbar(() => {});

    return (
        <AnimatePresence>
            {open && (
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 mx-4 my-2 rounded-2xl shadow-xl">
                    <div className="py-6 flex flex-col justify-center items-center">
                        {/* Search container */}
                        <form onSubmit={handleSearch} className="w-11/12 md:w-3/4 relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full py-2 px-4 pr-12 rounded-full bg-white/10 border border-white/20 
                                text-white placeholder-white/60 focus:outline-none focus:bg-white/20 
                                focus:border-white/30 transition-all duration-200"
                            />
                            <button type="submit" className="absolute right-4 bg-transparent">
                                <Search className="w-5 h-5 text-white/70" />
                            </button>
                        </form>
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
