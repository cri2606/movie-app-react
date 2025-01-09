import { AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';

type ResponsiveMenuProps = {
    open: boolean;
    activeSection: string;
    onSectionChange: (section: string) => void;
    handleButtonClick: (section: string) => void;
};

export const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ open, activeSection, handleButtonClick }) => {
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
                        <li><button onClick={() => handleButtonClick('Trending Movies')} className={`inline-block py-1 px-3 font-semibold rounded-lg ${activeSection === 'Trending Movies' ? 'bg-white text-green-400' : 'bg-green-400 text-[#213547]'}`}>Trending Movies</button></li>
                        <li><button onClick={() => handleButtonClick('Trending People')} className={`inline-block py-1 px-3 font-semibold rounded-lg ${activeSection === 'Trending People' ? 'bg-white text-green-400' : 'bg-green-400 text-[#213547]'}`}>Trending People</button></li>
                        <li><button onClick={() => handleButtonClick('Trending TV')} className={`inline-block py-1 px-3 font-semibold rounded-lg ${activeSection === 'Trending TV' ? 'bg-white text-green-400' : 'bg-green-400 text-[#213547]'}`}>Trending TV</button></li>
                    </ul>
                </div>
            )}
        // </AnimatePresence>
    );
};

export default ResponsiveMenu;
