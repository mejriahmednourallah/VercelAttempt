"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronDown, ChevronLeft, ChevronRight, X, SlidersHorizontal } from "lucide-react"
import { Sidebar } from "../components/Sidebar"
import ByKateCreations from "../assets/images/ByKateCreations.png"
import Bowlicious from "../assets/images/Bowlicious.png"
import BlossomCraft from "../assets/images/BlossomCraft.jpeg"

type ChartType = {
  id: number
  type: "bar" | "pie" | "line"
  title: string
}

export function ComparerFour() {
  const charts: ChartType[] = [
    { id: 1, type: "bar", title: "Graphique linéaire" },
    { id: 2, type: "pie", title: "diagramme circulaire" },
    { id: 3, type: "line", title: "Graphique linéaire" },
  ]

  const [centerIndex, setCenterIndex] = useState(1)

  const scrollLeft = () => {
    setCenterIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : charts.length - 1))
  }

  const scrollRight = () => {
    setCenterIndex((prevIndex) => (prevIndex < charts.length - 1 ? prevIndex + 1 : 0))
  }

  const getVisibleCharts = () => {
    const leftIndex = (centerIndex - 1 + charts.length) % charts.length
    const rightIndex = (centerIndex + 1) % charts.length
    return [charts[leftIndex], charts[centerIndex], charts[rightIndex]]
  }

  // Updated SVG chart components with simpler designs
  const BarChart = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect x="10" y="30" width="15" height="50" className="fill-black" />
      <rect x="35" y="20" width="15" height="60" className="fill-black" />
      <rect x="60" y="40" width="15" height="40" className="fill-black" />
      <rect x="85" y="25" width="15" height="55" className="fill-black" />
    </svg>
  )

  const PieChart = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* BlossomCraft - 15% */}
      <path d="M50,50 L50,10 A40,40 0 0,1 90,50 L50,50" className="fill-black" />
      {/* By Kate Creations - 25% */}
      <path d="M50,50 L90,50 A40,40 0 0,1 50,90 L50,50" className="fill-none stroke-black" />
      {/* Bowlicious - 12% */}
      <path d="M50,50 L50,90 A40,40 0 0,1 20,70 L50,50" className="fill-none stroke-black" />
      {/* Other - 48% */}
      <path d="M50,50 L20,70 A40,40 0 0,1 50,10 L50,50" className="fill-none stroke-black" />

      {/* Percentage Labels */}
      <text x="70" y="40" className="text-[6px] fill-white font-medium">
        15%
      </text>
      <text x="65" y="65" className="text-[6px] font-medium">
        25%
      </text>
      <text x="35" y="75" className="text-[6px] font-medium">
        12%
      </text>
      <text x="35" y="35" className="text-[6px] font-medium">
        48%
      </text>

      {/* Company Labels */}
      <text x="25" y="45" className="text-[4px]">
        BlossomCraft
      </text>
      <text x="70" y="70" className="text-[4px]">
        By Kate Creations
      </text>
      <text x="30" y="80" className="text-[4px]">
        Bowlicious
      </text>
    </svg>
  )

  const LineChart = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M10,70 L30,40 L50,20 L70,50 L90,35" fill="none" stroke="#000000" strokeWidth="1.5" />
      <circle cx="10" cy="70" r="2" className="fill-[#000000]" />
      <circle cx="30" cy="40" r="2" className="fill-[#000000]" />
      <circle cx="50" cy="20" r="2" className="fill-[#000000]" />
      <circle cx="70" cy="50" r="2" className="fill-[#000000]" />
      <circle cx="90" cy="35" r="2" className="fill-[#000000]" />
      <line x1="5" y1="90" x2="95" y2="90" stroke="#000000" strokeWidth="1" />
      <line x1="5" y1="10" x2="5" y2="90" stroke="#000000" strokeWidth="1" />
    </svg>
  )

  return (
    <main className="flex-grow bg-[#FCEAB3] relative">
      {/* Star decorations - hide on small screens */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 text-yellow-300 text-xl sm:text-2xl md:text-4xl hidden sm:block">
        ★
      </div>
      <div className="absolute top-20 sm:top-40 right-10 sm:right-20 text-yellow-300 text-xl sm:text-2xl md:text-4xl hidden sm:block">
        ★
      </div>
      <div className="absolute bottom-10 sm:bottom-20 left-20 sm:left-40 text-yellow-300 text-xl sm:text-2xl md:text-4xl hidden sm:block">
        ★
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-2 sm:px-4 py-4 sm:py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <Sidebar />

          {/* Right-side content */}
          <div className="flex-grow flex flex-col gap-6">
            {/* Breadcrumb */}
            <div className="text-sm md:text-l mb-2 text-center mt-6 text-gray-600">
              <Link to="/">MarketPlace</Link> / <Link to="/fournisseurs">Fournisseurs</Link> /{" "}
              <span className="font-medium">Comparateur De Fournisseurs</span>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-4">
              <div className="flex-1 relative w-full">
                <input
                  type="text"
                  placeholder="chercher un fournisseur"
                  className="w-full rounded-full border border-gray-300 pl-4 pr-10 py-2 text-sm sm:text-base"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <X className="h-4 w-4 color-black" />
                </button>
              </div>

              <div className="flex items-center my-2 sm:my-0">
                <SlidersHorizontal className="h-5 w-5 color-black" />
              </div>

              <div className="flex-1 w-full">
                <button className="w-full flex items-center justify-between bg-white rounded-full px-3 sm:px-4 py-2 border border-gray-300 text-sm sm:text-base">
                  <span>Sélectionner un critère</span>
                  <ChevronDown className="h-4 w-4 color-black" />
                </button>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center mb-4 sm:mb-6">
              Comparateur
              <br className="md:block" />
              de fournisseurs
            </h1>

            {/* Supplier Comparison */}
            <div className="mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <h3 className="text-base sm:text-lg font-semibold whitespace-nowrap">Comparer Avec :</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {[
                    { img: ByKateCreations, name: "By Kate Creations" },
                    { img: Bowlicious, name: "Bowlicious" },
                    { img: BlossomCraft, name: "BlossomCraft" },
                  ].map((supplier, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 sm:gap-2 bg-[#013033] text-white rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xs sm:text-sm md:text-base"
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src={supplier.img || "/placeholder.svg"}
                          alt={supplier.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="truncate max-w-[80px] sm:max-w-[100px] md:max-w-none">{supplier.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Charts Section */}
            <div className="bg-[#fff8e0] rounded-lg p-3 sm:p-4 md:p-5 flex-grow">
              {/* Instructions */}
              <div className="mb-3 sm:mb-4 md:mb-8 text-center text-xs sm:text-sm md:text-base">
                Sélectionner le filtre de comparaison et afficher la part de marché correspondante du fournisseur.
              </div>

              <div className="relative flex items-center justify-center flex-grow px-4 sm:px-8 md:px-12">
                {/* Navigation Arrows */}
                <button
                  onClick={scrollLeft}
                  className="absolute -left-1 sm:-left-2 md:-left-4 z-10 p-1 sm:p-2 bg-white/30 rounded-full hover:bg-white/50"
                  aria-label="Previous chart"
                >
                  <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12" />
                </button>

                {/* Charts Container */}
                <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
                  {getVisibleCharts().map((chart, index) => (
                    <div
                      key={chart.id}
                      className={`relative transition-all duration-300 ${
                        index === 1
                          ? "w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px]"
                          : "w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] hidden sm:block"
                      }`}
                    >
                      <div
                        className={`relative h-full ${index !== 1 ? "bg-[#E5C643] rounded-[1rem] sm:rounded-[2rem] p-2 sm:p-4 lg:p-6" : "p-2 sm:p-4"}`}
                      >
                        {chart.type === "bar" && <BarChart />}
                        {chart.type === "pie" && <PieChart />}
                        {chart.type === "line" && <LineChart />}

                        {/* Title below chart */}
                        <div className="absolute bottom-1 sm:bottom-2 left-0 right-0 text-center text-xs sm:text-sm font-medium">
                          {chart.title}
                        </div>

                        {/* Star decoration for side charts */}
                        {index !== 1 && (
                          <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2">
                            <span className="text-yellow-300 text-xl sm:text-2xl">★</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Navigation Arrow */}
                <button
                  onClick={scrollRight}
                  className="absolute -right-1 sm:-right-2 md:-right-4 z-10 p-1 sm:p-2 bg-white/30 rounded-full hover:bg-white/50"
                  aria-label="Next chart"
                >
                  <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12" />
                </button>
              </div>

              {/* Small stars decoration */}
              <div className="relative">
                <span className="absolute -left-4 bottom-0 text-yellow-300 text-xl hidden sm:inline">★</span>
                <span className="absolute -right-4 bottom-0 text-yellow-300 text-xl hidden sm:inline">★</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

