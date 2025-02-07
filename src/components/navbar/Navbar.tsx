import { Search } from "lucide-react"
import { MdMenu } from "react-icons/md"
import { ResponsiveMenu } from "./ResponsiveMenu"
import { useNavbar } from "../../hooks/useNavbar"
import "../../css/navbar.css"

type NavbarProps = {
  onSectionChange: (section: string) => void
}

export const Navbar = ({ onSectionChange }: NavbarProps) => {
  const { sections, open, setOpen, activeSection, handleButtonClick, searchQuery, setSearchQuery, handleSearch, searchPlaceholder } = useNavbar(onSectionChange)

  return (
    <>
      <nav className="bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg">
        <div className="container flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <p className="text-white tracking-wide hover:text-emerald-100 transition-colors duration-200">
              Movie App
            </p>
          </div>
          {/* Menu */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {sections.map((section) => (
                <li key={section.name}>
                  <button
                    onClick={() => handleButtonClick(section.name)}
                    className={`py-2 px-4 font-medium rounded-full transition-all duration-200 hover:shadow-md
                      ${activeSection === section.name
                        ? "bg-white text-emerald-600 shadow-md"
                        : "bg-transparent text-white hover:bg-emerald-400"}`}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Search */}
          <form onSubmit={handleSearch} className="hidden lg:flex items-center relative">
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="py-2 px-4 pr-12 rounded-full bg-white/10 border border-white/20 
                text-white placeholder-white/60 focus:outline-none focus:bg-white/20 
                focus:border-white/30 transition-all duration-200"
            />
            <button type="submit" className="absolute right-4 bg-transparent">
              <Search className="w-5 h-5 text-white/70" />
            </button>
          </form>
          {/* Mobile hamburger */}
          <div className="lg:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-3xl text-white hover:text-emerald-100 transition-colors duration-200" />
          </div>
        </div>
      </nav>
      {/* Mobile sidebar */}
      <ResponsiveMenu open={open} activeSection={activeSection} onSectionChange={onSectionChange} handleButtonClick={handleButtonClick} searchPlaceholder={searchPlaceholder} />
    </>
  )
}

export default Navbar
