"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react" // Removed Heart and Bookmark since we’ll use custom icons
import { Sidebar } from "../components/Sidebar"

type Trade = {
  id: number
  image: string
  name: string
  description: string
}

export default function OpenTrades() {
  const trades: Trade[] = [
    { 
      id: 1, 
      image: "/src/assets/images/article.png", // Replace with actual image paths
      name: "Crochet",
      description: "Unique handmade crochet items by Artisan Jean Doe" 
    },
    { 
      id: 2, 
      image: "/src/assets/images/article2.png",
      name: "Choker",
      description: "Elegant handmade choker by Artisan Marie Smith" 
    },
    { 
      id: 3, 
      image: "/src/assets/images/article.png",
      name: "Pottery",
      description: "Hand-crafted ceramic pieces by Artisan John Miller" 
    },
    // Add more trades as needed
  ]

  // State to track the current center card index
  const [currentIndex, setCurrentIndex] = useState(0)

  // Function to handle moving to the previous card
  const prevCard = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? trades.length - 1 : prevIndex - 1
    )
  }

  // Function to handle moving to the next card
  const nextCard = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === trades.length - 1 ? 0 : prevIndex + 1
    )
  }

  // Get the three visible cards (previous, current, next)
  const getCarouselCards = () => {
    // Calculate indices with wraparound
    const prevIndex = (currentIndex - 1 + trades.length) % trades.length
    const nextIndex = (currentIndex + 1) % trades.length
    
    return [
      { card: trades[prevIndex], position: "left" },
      { card: trades[currentIndex], position: "center" },
      { card: trades[nextIndex], position: "right" }
    ]
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#fff2c0]">
      <div className="container mx-auto px-4 py-4 md:py-8 flex-grow flex flex-col">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-8 min-h-[calc(100vh-5rem)]">
          {/* Sidebar */}
          <Sidebar />

          <div className="flex-grow flex flex-col">
            {/* Breadcrumb */}
            <nav className="text-xs md:text-sm mb-4 md:mb-6 text-gray-600 flex items-center gap-1">
              <span className="hover:text-gray-800">MarketPlace</span>
              <span>/</span>
              <span className="hover:text-gray-800">Open Trades</span>
            </nav>

            <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-8">Open Trades</h1>

            {/* Trade Gallery */}
            <div className="flex-grow flex items-center justify-center rounded-lg p-2 md:p-4 lg:p-8 overflow-hidden">
              <div className="relative flex items-center justify-center w-full max-w-5xl">
                {/* Left Navigation Arrow */}
                <button
                  onClick={prevCard}
                  className="absolute left-0 md:-left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 md:p-2 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004d4d] transition-all z-20"
                  aria-label="Previous trade"
                >
                  <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
                </button>

                {/* Trades Container */}
                <div className="flex items-center justify-center w-full relative">
                  {getCarouselCards().map(({ card, position }, ) => (
                    <div
                      key={card.id}
                      className={`
                        absolute transition-all duration-300
                        ${position === "center" 
                          ? "transform translate-x-0 z-10 opacity-100 scale-100" 
                          : position === "left"
                            ? "transform -translate-x-[calc(100%+1rem)] md:-translate-x-[calc(100%+2rem)] opacity-50 scale-90 z-0"
                            : "transform translate-x-[calc(100%+1rem)] md:translate-x-[calc(100%+2rem)] opacity-50 scale-90 z-0"
                        }
                      `}
                    >
                      <div className={`
                        relative bg-[#EDDEAF] rounded-lg p-4 shadow-md
                        ${position !== "center" ? "opacity-70" : ""}
                      `}>
                        <img
                          src={card.image || "/placeholder.svg"}
                          alt={card.name}
                          className={`rounded-lg object-cover w-full
                            ${position === "center" 
                              ? "h-[200px] sm:h-[250px] md:h-[320px] lg:h-[400px]"
                              : "h-[150px] sm:h-[180px] md:h-[240px] lg:h-[320px]"
                            }
                          `}
                        />
                        <div className={`
                          mt-2 md:mt-4 bg-[#004d4d] text-white rounded-lg p-2 md:p-4
                          ${position !== "center" ? "opacity-70" : ""}
                        `}>
                          <div className="font-bold text-xs sm:text-sm md:text-base lg:text-lg">{card.name}</div>
                          <p className="text-xs sm:text-sm md:text-base text-gray-200 line-clamp-2">
                            {card.description}
                          </p>
                          <div className="flex justify-between mt-2">
                            <button className="bg-[#EDDEAF] p-2 rounded-full hover:bg-[#E3D4B0] transition-colors">
                              <img src="src/assets/images/like.png" alt="Like" className="w-6 h-6" /> {/* Use the thumbs-up icon from your image */}
                            </button>
                            <button className="bg-[#EDDEAF] p-2 rounded-full hover:bg-[#E3D4B0] transition-colors">
                              <img src="src/assets/images/save.png" alt="Save" className="w-6 h-6" /> {/* Use the bookmark icon from your image */}
                            </button>
                          </div>
                          {position === "center" && (
                            <button className="mt-2 bg-white hover:bg-gray-200 text-[#004d4d] text-base md:text-lg font-bold rounded-full px-6 py-3 transition-colors w-full">
                              Choisir
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Navigation Arrow */}
                <button
                  onClick={nextCard}
                  className="absolute right-0 md:-right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 md:p-2 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004d4d] transition-all z-20"
                  aria-label="Next trade"
                >
                  <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
                </button>
              </div>
            </div>

            {/* Wild Card Section */}
            <div className="mt-6 md:mt-8 text-center">
              <button className="bg-[#f0d878] hover:bg-[#e9cc5e] text-black text-sm md:text-base font-medium rounded-full px-8 py-3 md:px-10 md:py-4 transition-colors">
                Wild Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { OpenTrades } 
