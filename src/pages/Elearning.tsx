"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ElearningSidebar } from "../components/ElearningSidebar"
import { Link } from "react-router-dom"

// Import images for the carousel
import slide1 from "../assets/images/slide1.jpg"
import slide2 from "../assets/images/slide2.jpg"
import slide3 from "../assets/images/slide3.jpg"
import lesson from "../assets/images/lesson.png"

// Replace the slides array with the imported images
const slides = [
  {
    id: 1,
    image: slide1,
    title: "Group Learning",
  },
  {
    id: 2,
    image: slide2,
    title: "Digital Training Interface",
  },
  {
    id: 3,
    image: slide3,
    title: "Professional Development",
  },
]

export function Elearning() {
  const [currentSlide, setCurrentSlide] = useState(1) // Start with middle slide

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  // Helper function to get visible slides
  const getVisibleSlides = () => {
    const prev = currentSlide === 0 ? slides.length - 1 : currentSlide - 1
    const next = currentSlide === slides.length - 1 ? 0 : currentSlide + 1
    return [prev, currentSlide, next]
  }

  return (
    <main className="flex-grow bg-[#fff2c0] relative min-h-[90vh]">
      {/* Star decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] text-yellow-300 text-4xl">★</div>
        <div className="absolute top-[20%] right-[10%] text-yellow-300 text-4xl">★</div>
        <div className="absolute bottom-[15%] left-[20%] text-yellow-300 text-4xl">★</div>
      </div>

      <div className="container mx-auto px-4 py-8">
       

        <div className="flex flex-col lg:flex-row gap-8">
          <ElearningSidebar />

          <div className="flex-grow flex flex-col">
             {/* Breadcrumb */}
        <nav className="text-sm mb-6 text-gray-600 flex items-center gap-1">
          <Link to="/" className="hover:text-gray-800">
            E-Apprentissage
          </Link>
          <span>/</span>
          <Link to="/modules" className="hover:text-gray-800">
            Modules
          </Link>
          <span>/</span>
          <span className="font-medium">Module3</span>
        </nav>
            <h1 className="text-4xl font-bold text-center mb-8">Module 3</h1>

            {/* Enhanced Carousel - Responsive version */}
            <div className="bg-[#fff8e0] rounded-[1rem] md:rounded-[2rem] p-2 md:p-4 mb-4 md:mb-6 overflow-hidden">
              <div className="relative flex items-center justify-center h-[180px] md:h-[250px] px-4 md:px-10">
                {/* Left Navigation Button */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 md:left-2 z-20 text-black"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
                </button>

                {/* Slides Container */}
                <div className="flex items-center justify-center w-full">
                  {getVisibleSlides().map((slideIndex, i) => {
                    // Calculate position and styling based on position
                    let position = "center"
                    if (i === 0) position = "left"
                    if (i === 2) position = "right"

                    return (
                      <div
                        key={slides[slideIndex].id}
                        className={`transition-all duration-300 ease-in-out ${
                          position === "center"
                            ? "z-10 scale-[1.15] relative"
                            : position === "left"
                              ? "z-0 scale-[0.85] absolute left-[18%] transform -translate-x-1/2 hidden sm:block"
                              : "z-0 scale-[0.85] absolute right-[18%] transform translate-x-1/2 hidden sm:block"
                        }`}
                      >
                        <div className="overflow-hidden rounded-[0.75rem] md:rounded-[1.5rem]">
                          <img
                            src={slides[slideIndex].image || "/placeholder.svg"}
                            alt={slides[slideIndex].title}
                            className="w-[200px] md:w-[300px] h-[140px] md:h-[200px] object-cover"
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Right Navigation Button */}
                <button
                  onClick={nextSlide}
                  className="absolute right-0 md:right-2 z-20 text-black"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
                </button>
              </div>
            </div>

            {/* Content Sections - Improved responsive grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Career Skills Section */}
              <div className="bg-[#fff8e0] rounded-lg p-4 md:p-6">
                <img
                  src={lesson || "/placeholder.svg"}
                  alt="Career Skills"
                  className="w-full h-[150px] md:h-[200px] object-cover rounded-lg mb-3 md:mb-4"
                />
                <h2 className="text-lg md:text-xl font-bold text-center text-[#004d4d]">
                  ESSENTIAL SKILLS TO UNLOCK CAREER SUCCESS
                </h2>
              </div>

              {/* Lesson Section */}
              <div className="bg-[#f0d878] rounded-lg p-4 md:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 md:mb-4">
                  <h2 className="text-lg md:text-xl font-bold mb-2 sm:mb-0">Module 3</h2>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm md:text-base">LESSON 30</span>
                    <div className="w-16 md:w-24 h-4 md:h-6 bg-black rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-1 md:space-y-2 text-sm md:text-base">
                  <p>After starting with a small online store in a home garage,</p>
                  <p>Tony turned a passion for Business into a thriving</p>
                  <p>business. Through relentless innovation, customer focus, and</p>
                  <p>strategic partnerships, they grew their brand to a multi-</p>
                  <p>million-dollar enterprise in just five years.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

