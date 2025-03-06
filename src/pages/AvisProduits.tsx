"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Sidebar } from "../components/Sidebar"
import choco1 from "../assets/images/OIP.jpeg"
import choco2 from "../assets/images/chocolate-corporativo.webp"
import choco3 from "../assets/images/il_fullxfull.1902635190_p0uq.jpg"
import persona from "../assets/images/persona.png"

type Product = {
  id: number
  image: string
  rating: number
  isTop?: boolean
}

export function AvisProduits() {
  const products: Product[] = [
    { id: 1, image: choco1, rating: 360, isTop: true },
    { id: 2, image: choco2, rating: 50 },
    { id: 3, image: choco3, rating: 100 },
    { id: 4, image: choco1, rating: 250 },
    { id: 5, image: choco3, rating: 175, isTop: true },
  ]

  const [centerIndex, setCenterIndex] = useState(1)

  const scrollLeft = () => {
    setCenterIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : products.length - 1))
  }

  const scrollRight = () => {
    setCenterIndex((prevIndex) => (prevIndex < products.length - 1 ? prevIndex + 1 : 0))
  }

  const getVisibleProducts = () => {
    const leftIndex = (centerIndex - 1 + products.length) % products.length
    const rightIndex = (centerIndex + 1) % products.length
    return [products[leftIndex], products[centerIndex], products[rightIndex]]
  }

  return (
    <main className="flex-grow bg-[#fff2c0] relative min-h-screen">
      {/* Star decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] text-yellow-300 text-2xl md:text-4xl animate-pulse">★</div>
        <div className="absolute top-[20%] right-[10%] text-yellow-300 text-2xl md:text-4xl animate-pulse delay-100">
          ★
        </div>
        <div className="absolute bottom-[15%] left-[20%] text-yellow-300 text-2xl md:text-4xl animate-pulse delay-200">
          ★
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 md:py-8 min-h-screen">
       

        <div className="flex flex-col lg:flex-row gap-4 md:gap-8 min-h-[calc(100vh-5rem)]">
          <Sidebar />

          <div className="flex-grow flex flex-col">
             {/* Breadcrumb */}
        <nav className="text-xs md:text-sm mb-4 md:mb-6 text-gray-600 flex items-center gap-1">
          <span className="hover:text-gray-800">MarketPlace</span>
          <span>/</span>
          <span className="hover:text-gray-800">Produits</span>
          <span>/</span>
          <span className="font-medium">AvisProduits</span>
        </nav>
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-8">Avis Produits</h1>

            {/* Product Gallery */}
            <div className="flex-grow flex items-center justify-center bg-[#fff8e0] rounded-lg p-2 md:p-4 lg:p-8">
              <div className="relative flex items-center justify-center w-full max-w-5xl">
                {/* Navigation Arrows */}
                <button
                  onClick={scrollLeft}
                  className="absolute left-0 md:-left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 md:p-2 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004d4d] transition-all z-10"
                  aria-label="Previous product"
                >
                  <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
                </button>

                {/* Products Container */}
                <div className="flex items-center justify-center gap-2 md:gap-4 lg:gap-8">
                  {getVisibleProducts().map((product, index) => (
                    <div
                      key={product.id}
                      className={`transition-all duration-300 ${
                        index === 1
                          ? "w-[180px] sm:w-[220px] md:w-[280px] lg:w-[320px] transform scale-105 md:scale-110 z-10"
                          : "w-[100px] sm:w-[140px] md:w-[200px] lg:w-[240px] opacity-70 hidden sm:block"
                      }`}
                    >
                      <div className="relative">
                        {product.isTop && index === 1 && (
                          <div className="absolute top-1 left-1 md:top-2 md:left-2 bg-[#8aad6a] text-black px-2 py-0.5 md:px-3 md:py-1 rounded-md font-bold z-10 flex items-center">
                            <span className="text-xs md:text-sm lg:text-xl">TOP</span>
                            <img
                              src={persona || "/placeholder.svg"}
                              alt="Top badge"
                              className="w-4 h-4 md:w-6 md:h-6 lg:w-10 lg:h-10 -ml-1"
                            />
                          </div>
                        )}
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={`Product ${product.id}`}
                          className={`w-full rounded-lg object-cover shadow-md ${
                            index === 1
                              ? "h-[200px] sm:h-[240px] md:h-[320px] lg:h-[400px]"
                              : "h-[140px] sm:h-[180px] md:h-[240px] lg:h-[320px]"
                          }`}
                        />
                      </div>
                      {index === 1 && (
                        <div className="mt-2 md:mt-4 bg-[#004d4d] text-white rounded-lg p-2 md:p-4 w-full">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-bold text-xs sm:text-sm md:text-base lg:text-lg">Produit</div>
                              <div className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold">
                                {product.rating} Notes
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-1 md:gap-2">
                              <div className="flex gap-0.5">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star
                                    key={i}
                                    className="h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 fill-yellow-400 text-yellow-400"
                                  />
                                ))}
                              </div>
                              <button className="bg-[#f0d878] hover:bg-[#e9cc5e] text-black text-xs md:text-sm font-medium rounded px-2 py-1 md:px-4 md:py-2 transition-colors">
                                VOIR DETAILS
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                      {index !== 1 && (
                        <div className="mt-1 md:mt-3 bg-[#004d4d] text-white rounded-full px-2 py-1 md:px-4 md:py-2 flex items-center justify-between">
                          <span className="font-bold text-xs sm:text-sm md:text-base lg:text-xl">{product.rating}</span>
                          <div className="flex gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className="h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Right Navigation Arrow */}
                <button
                  onClick={scrollRight}
                  className="absolute right-0 md:-right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 md:p-2 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004d4d] transition-all z-10"
                  aria-label="Next product"
                >
                  <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

