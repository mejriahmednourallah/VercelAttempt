
import { useState  } from "react"
import { Link , useLocation} from "react-router-dom"
import fourLogo from "../assets/images/fourLogo.png"

import {
  Search,
  Store,
  Users,
  Layers,
  MessageSquare,
  ShoppingCart,
  Percent,
  RefreshCw,
  Menu,
} from "lucide-react"

export function Sidebar() {
  const location = useLocation()

  // Define all menu items with their icons
  const mainMenuItems = [
    { icon: Store, label: "Produits" },
    { icon: Users, label: "Fournisseurs" , link: "/DetailsFournisseur"},
    { icon: Layers, label: "Categories" },
    { icon: MessageSquare, label: "Forum Feedback" },
    { icon: ShoppingCart, label: "Commandes" },
    { icon: Percent, label: "Promotions" },
    { icon: RefreshCw, label: "Trades", link:"/OpenTrades" },
  ]



  // State to track the currently selected item
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  // Determine if we are on the "DetailsFournisseur" or "Comparer" page
  const isFournisseurPage = location.pathname === "/DetailsFournisseur" || location.pathname === "/comparer" || location.pathname === "/OpenTrades";

  return (
    <div className="w-full md:w-64 bg-white/50 rounded-lg p-4 min-h-[90vh] flex flex-col">
      {/* Mobile Header with Toggle */}
      <div className="flex md:hidden items-center justify-between mb-4">
        <h2 className="text-xl font-bold">MarketPlace</h2>
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-md hover:bg-[#f0d878]"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Desktop Title - Hidden on Mobile */}
      <h2 className="hidden md:block text-2xl font-bold mb-6">MarketPlace</h2>

      {/* Content that can be toggled on mobile */}
      <div className={`${isMobileMenuOpen ? "flex" : "hidden"} md:flex flex-col flex-grow`}>
        {/* Dynamic highlighted section */}
      <div className="flex items-center justify-center bg-black text-white rounded-full px-4 py-1.5 mb-6 w-auto">
        <Users className="h-4 w-4 mr-2" />
        <span>{isFournisseurPage ? "Fournisseurs" : "Produits"}</span>
      </div>

        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Chercher un produit"
            className="w-full rounded-full border border-gray-300 pl-4 pr-10 py-2 text-sm"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>

        {/* Change "Produit 1" to "Knot & Thread" on specific pages */}
        <div className="text-center mb-6 py-2 bg-[#f9f0c8] rounded-lg flex items-center justify-center space-x-3">
        {isFournisseurPage ? (
          <>
            <img src={fourLogo} alt="Knot & Thread Logo" className="w-10 h-10 rounded-full mb-2" />
            <span className="font-semibold text-lg">Knot & Thread</span>
          </>
        ) : (
          <span className="font-semibold text-lg">Produit 1</span>
        )}
      </div>

        {/* Menu Items - Main */}
        <div className="space-y-3 mb-8">
          <h3 className="text-sm font-semibold px-2 mb-2">Menu Principal</h3>
          {mainMenuItems.map((item, index) => (
            <Link
            to={item.link || "#"}
            key={index}
            className={`flex items-center justify-between w-full rounded-full px-4 py-2.5 text-sm transition-colors ${
              (isFournisseurPage && item.label === "Fournisseurs") ||
              (!isFournisseurPage && item.label === "Produits")
                ? "bg-[#e9cc5e] font-medium"
                : "bg-[#f0d878] hover:bg-[#e9cc5e]"
            }`}
          >
            <div className="flex items-center">
              <item.icon className="h-4 w-4 mr-2" />
              <span>{item.label}</span>
            </div>
            {(isFournisseurPage && item.label === "Fournisseurs"   ) ||
            
            (!isFournisseurPage && item.label === "Produits") ? (
              <div className="h-2 w-2 rounded-full bg-black"></div>
            ) : null}
          </Link>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-[#e9cc5e] text-xs text-center text-gray-500">MarketPlace © 2025</div>
      </div>
    </div>
  )
}

