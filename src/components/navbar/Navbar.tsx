import { Search } from 'lucide-react';
import { MdMenu } from 'react-icons/md';
import ResponsiveMenu from './ResponsiveMenu';
import { useNavbar } from '../../hooks/useNavbar';
import '../../css/navbar.css';

type NavbarProps = {
    onSectionChange: (section: string) => void; // Funzione per cambiare la sezione
}

export const Navbar: React.FC<NavbarProps> = ({ onSectionChange }) => {
    const { open, setOpen, activeSection, handleButtonClick } = useNavbar(onSectionChange);

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
                            <li><button onClick={() => handleButtonClick('Trending Movies')} className={`py-1 px-3 font-semibold rounded-lg ${activeSection === 'Trending Movies' ? 'bg-white text-green-400' : 'bg-green-400 text-[#213547]'}`}>Trending Movies</button></li>
                            <li><button onClick={() => handleButtonClick('Trending People')} className={`py-1 px-3 font-semibold rounded-lg ${activeSection === 'Trending People' ? 'bg-white text-green-400' : 'bg-green-400 text-[#213547]'}`}>Trending People</button></li>
                            <li><button onClick={() => handleButtonClick('Trending TV')} className={`py-1 px-3 font-semibold rounded-lg ${activeSection === 'Trending TV' ? 'bg-white text-green-400' : 'bg-green-400 text-[#213547]'}`}>Trending TV</button></li>
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
            <ResponsiveMenu open={open} activeSection={activeSection} onSectionChange={onSectionChange} handleButtonClick={handleButtonClick} />
        </>
    );

};

export default Navbar;