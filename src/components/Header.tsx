"use client"

import { useState} from "react"
import { Link , useLocation} from "react-router-dom"
import { Home, Store, ShoppingBag, MessageCircle, Bell, Laptop, Menu, X, ChevronDown } from "lucide-react"
import logoPocketBiz from "../assets/images/logoPocketBiz.png"
import userPhoto from "../assets/images/user.png"

import { UserCircle } from "lucide-react"; // Import UserCircle icon



export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [profileMenuOpen, setProfileMenuOpen] = useState(false)
  const location = useLocation()

  // Check if current page is Fournisseur related
  const isMarketPlacePages = location.pathname === "/DetailsFournisseur" || location.pathname === "/comparer" || location.pathname === "/Avisproduits"
  const isHomePage = location.pathname === "/home"
  const isMentorPage = location.pathname === "/mentors" || location.pathname.includes("/mentor/")
  const isElearningPage = location.pathname === "/elearning"
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    setProfileMenuOpen(false)
  }

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen)
    setMobileMenuOpen(false)
  }

  const navItems = [
    { icon: Home, label: "Accueil", link: "/home" , customStyles: isHomePage ? "text-pinkCustom" : "" }, // Apply pink text if on Fournisseur page
    { icon: Store,
      label: "MarketPlace",
      link: "/Avisproduits",
      customStyles: isMarketPlacePages ? "text-pinkCustom" : "", // Apply pink text if on Fournisseur page

     },
    { icon: ShoppingBag, label: "Services", link: "/comparaison-strategie" },
    { icon: MessageCircle, label: "ChatSpace", link: "/chatspace" },
    { icon: Bell, label: "Notification", link: "/notifications" },
    { icon: Laptop, label: "E-learning", link: "/elearning" , customStyles: isElearningPage ? "text-pinkCustom" : "" },
    { icon: UserCircle, label: "Mentors", link: "/mentors", customStyles: isMentorPage ? "text-pinkCustom" : "" },

  ]

  return (
    <header className="bg-[#004448] text-white py-2 md:py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logoPocketBiz || "/placeholder.svg"} alt="PocketBiz Logo" className="h-[60px] w-auto md:h-[80px]" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <Link key={index} to={item.link} className={`flex flex-col items-center group ${item.customStyles || ""}`} >
              <item.icon className="h-6 w-6 mb-1 group-hover:text-yellow-300 transition-colors" />
              <span className="text-sm font-medium group-hover:text-yellow-300 transition-colors">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="p-2 focus:outline-none focus:ring-2 focus:ring-white">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* User Profile */}
        <div className="hidden md:flex items-center">
          <div className="relative">
            <button
              onClick={toggleProfileMenu}
              className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-white rounded-full"
            >
              <img
                src={userPhoto || "/placeholder.svg"}
                alt="User Profile"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <span className="text-sm font-medium mr-1">Chayme Fouzri</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {profileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Profile
                </Link>
                <Link to="/listcomandes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Commandes
                </Link>
                <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Settings
                </Link>
                <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-[#004d4d] mt-2">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="flex items-center space-x-3 py-2 px-4 rounded-md hover:bg-[#006666]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon className="h-6 w-6" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
            <div className="md:hidden pt-4 border-t border-[#006666]">
              <div className="flex items-center space-x-3">
                <img
                  src={userPhoto || "/placeholder.svg"}
                  alt="User Profile"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <span className="text-sm font-medium">Chayme Fouzri</span>
              </div>
              <div className="mt-3 space-y-2">
                <Link to="/profile" className="block py-2 px-4 text-sm hover:bg-[#006666] rounded-md">
                  Profile
                </Link>
                <Link to="/settings" className="block py-2 px-4 text-sm hover:bg-[#006666] rounded-md">
                  Settings
                </Link>
                <Link to="/logout" className="block py-2 px-4 text-sm hover:bg-[#006666] rounded-md">
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header

