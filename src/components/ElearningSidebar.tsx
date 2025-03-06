"use client"

import { useState } from "react"
import { Search, X, FileText, SlidersHorizontal, Shield, Book, MessageCircle, Trophy, Menu } from "lucide-react"

export function ElearningSidebar() {
  // Define all menu items with their icons
  const menuItems = [
    { id: "progression", label: "Progression", icon: SlidersHorizontal },
    { id: "certifications", label: "Certifications", icon: Shield },
    { id: "favoris", label: "Mes Favoris", icon: Book },
    { id: "support", label: "Aide&Support", icon: MessageCircle },
    { id: "feedback", label: "Feedback", icon: FileText },
    { id: "trophees", label: "Trophés et realisations", icon: Trophy },
  ]

  // State to track the currently selected item
  const [selectedItem, setSelectedItem] = useState(menuItems[0])
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const clearSearch = () => {
    setSearchQuery("")
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="w-full md:w-64 bg-[#fff8e0] rounded-lg p-4 min-h-[90vh] flex flex-col">
      {/* Mobile Header with Toggle */}
      <div className="flex md:hidden items-center justify-between mb-4">
        <h2 className="text-xl font-bold">E-Apprentissage</h2>
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-md hover:bg-[#f0d878]"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Desktop Title - Hidden on Mobile */}
      <h2 className="hidden md:block text-2xl font-bold mb-6">E-Apprentissage</h2>

      {/* Content that can be toggled on mobile */}
      <div className={`${isMobileMenuOpen ? "flex" : "hidden"} md:flex flex-col flex-grow`}>
        {/* Modules Button */}
        <button className="flex items-center gap-2 w-full bg-black text-white rounded-lg px-4 py-2 mb-4">
          <FileText className="h-5 w-5" />
          <span>Modules</span>
        </button>

        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="flex items-center bg-white rounded-lg border border-gray-200 overflow-hidden">
            <input
              type="text"
              placeholder="chercher un module"
              className="w-full px-4 py-2 text-sm focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button onClick={clearSearch} className="p-2 hover:bg-gray-100" aria-label="Clear search">
                <X className="h-4 w-4 text-gray-400" />
              </button>
            )}
            <button className="p-2 hover:bg-gray-100" aria-label="Search">
              <Search className="h-4 w-4 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Module 3 Text */}
        <div className="text-lg font-medium mb-4 text-center">Module 3</div>

        {/* Dynamic highlighted section */}
        <div className="flex items-center justify-center bg-black text-white rounded-full px-4 py-1.5 mb-6 w-auto">
          <selectedItem.icon className="h-4 w-4 mr-2" />
          <span>{selectedItem.label}</span>
        </div>

        {/* Navigation Buttons */}
        <div className="space-y-3">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`flex items-center justify-between w-full rounded-full px-4 py-2.5 text-sm transition-colors ${
                selectedItem.id === item.id ? "bg-[#e9cc5e] font-medium" : "bg-[#f0d878] hover:bg-[#e9cc5e]"
              }`}
            >
              <div className="flex items-center">
                <item.icon className="h-5 w-5 mr-2" />
                <span>{item.label}</span>
              </div>
              {selectedItem.id === item.id && <div className="h-2 w-2 rounded-full bg-black"></div>}
            </button>
          ))}
        </div>

        <div className="mt-auto pt-4 text-xs text-center text-gray-500">E-learning © 2025</div>
      </div>
    </div>
  )
}

