"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Sidebar } from "../components/Sidebar"

export default function ComparisonOfStrategies() {
  const [selectedStrategyLeft, setSelectedStrategyLeft] = useState<string>("") // State for the left dropdown
  const [selectedStrategyRight, setSelectedStrategyRight] = useState<string>("") // State for the right dropdown

  const strategies = [
    "Strategy 1",
    "Strategy 2",
    "Strategy 3",
  ]

  const financialData = [
    { label: "CHIFFRE D'AFFAIRES", sigle: "CA", montant: "180,000.00", pourcentage: "100%" },
    { label: "CHARGES VARIABLES", sigle: "CV", montant: "60,000.00", pourcentage: "33%" },
    { label: "MARGE S/COUT VARIABLE", sigle: "MSCV", montant: "120,000.00", pourcentage: "67%" },
    { label: "CHARGES FIXES", sigle: "CF", montant: "100,000.00", pourcentage: "" },
    { label: "RESULTAT", sigle: "RN", montant: "20,000.00", pourcentage: "" },
  ]

  const handleStrategyChangeLeft = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStrategyLeft(e.target.value) // Update the left strategy state
  }

  const handleStrategyChangeRight = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStrategyRight(e.target.value) // Update the right strategy state
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#fff2c0]">
      <div className="container mx-auto px-4 py-4 md:py-8 flex-grow flex flex-col">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-8 min-h-[calc(100vh-5rem)]">
          {/* Sidebar */}

          <div className="flex-grow flex flex-col">
            {/* Breadcrumb */}
            <nav className="text-xs md:text-sm mb-4 md:mb-6 text-gray-600 flex items-center gap-1">
              <span className="hover:text-gray-800">Accueil</span>
              <span>/</span>
              <span className="hover:text-gray-800">Services</span>
              <span>/</span>
              <span className="hover:text-gray-800">Strategies</span>
              <span>/</span>
              <span className="font-medium">Comparison of Strategies</span>
            </nav>

            <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-8">Comparison of Strategies</h1>

            {/* Strategy Selection and Content */}
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start">
              {/* Left Column - Strategy Selection and Table */}
              <div className="w-full lg:w-1/2 bg-[#EDDEAF] rounded-lg p-4 md:p-6 shadow-md"> {/* Changed background to #EDDEAF */}
                <div className="mb-4">
                  <label
                    htmlFor="strategySelectLeft"
                    className="text-2xs md:text-xs font-medium text-gray-700"
                  >
                    Choose a Strategy
                  </label>
                  <div className="relative">
                    <select
                      id="strategySelectLeft"
                      value={selectedStrategyLeft}
                      onChange={handleStrategyChangeLeft}
                      className="w-[300px] h-[40px] p-2 md:p-3 bg-[#004448] text-2xs md:text-xs text-white border border-[#004448] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#004448] focus:border-transparent appearance-none"
                    >
                      <option value="">Select a Strategy</option>
                      {strategies.map((strategy) => (
                        <option key={strategy} value={strategy} className="bg-[#004448] text-2xs md:text-xs text-white">
                          {strategy}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white h-4 w-4 md:h-5 md:w-5 pointer-events-none" />
                  </div>
                </div>

                <table className="w-full text-left border-collapse bg-[#EDDEAF]"> {/* Changed table background to #EDDEAF */}
                  <tbody>
                    {financialData.map((data, index) => (
                      <tr key={index} className="border-t border-gray-200">
                        <td className="py-2 md:py-3 text-sm md:text-base font-medium text-gray-800">
                          {data.label}
                        </td>
                        <td className="py-2 md:py-3 text-sm md:text-base text-gray-600">{data.sigle}</td>
                        <td className="py-2 md:py-3 text-sm md:text-base font-bold text-gray-800">
                          {data.montant}
                        </td>
                        <td className="py-2 md:py-3 text-sm md:text-base text-gray-600">{data.pourcentage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="mt-4 flex justify-between">
                  <button className="bg-white text-[#004d4d] hover:bg-gray-200 text-sm md:text-base font-medium rounded-full px-4 py-2 transition-colors">
                    VOIR DETAILS
                  </button>
                  <button className="bg-white text-[#004d4d] hover:bg-gray-200 text-sm md:text-base font-medium rounded-full px-4 py-2 transition-colors">
                    Explain With Mr CreaBiz
                  </button>
                </div>
              </div>

              {/* Right Column - Strategy Selection and Graph Image */}
              <div className="w-full lg:w-1/2 bg-[#EDDEAF] rounded-lg p-4 md:p-6 shadow-md"> {/* Changed background to #EDDEAF */}
                <div className="mb-4">
                  <label
                    htmlFor="strategySelectRight"
                    className="text-2xs md:text-xs font-medium text-gray-700"
                  >
                    Choose a Strategy
                  </label>
                  <div className="relative">
                    <select
                      id="strategySelectRight"
                      value={selectedStrategyRight}
                      onChange={handleStrategyChangeRight}
                      className="w-[300px] h-[40px] p-2 md:p-3 bg-[#004448] text-2xs md:text-xs text-white border border-[#004448] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#004448] focus:border-transparent appearance-none"
                    >
                      <option value="">Select a Strategy</option>
                      {strategies.map((strategy) => (
                        <option key={strategy} value={strategy} className="bg-[#004448] text-2xs md:text-xs text-white">
                          {strategy}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white h-4 w-4 md:h-5 md:w-5 pointer-events-none" />
                  </div>
                </div>

                <div className="flex justify-center items-center mb-4">
                  <img
                    src="/src/assets/images/graph.png" // Kept the placeholder path as requested
                    alt="Strategy Comparison Graph"
                    className="max-w-[350px] max-h-[400px] w-auto h-auto rounded-lg"
                  />
                </div>

                <div className="mt-4 flex justify-between">
                  <button className="bg-white text-[#004d4d] hover:bg-gray-200 text-sm md:text-base font-medium rounded-full px-4 py-2 transition-colors">
                    VOIR DETAILS
                  </button>
                  <button className="bg-white text-[#004d4d] hover:bg-gray-200 text-sm md:text-base font-medium rounded-full px-4 py-2 transition-colors">
                    Explain With Mr CreaBiz
                  </button>
                </div>
              </div>
            </div>

            {/* Compare Button */}
            <div className="mt-6 md:mt-8 flex justify-center">
              <button className="bg-[#f0d878] hover:bg-[#e9cc5e] text-black text-sm md:text-base font-medium rounded-full w-[360px] h-[51px] transition-colors flex items-center justify-center gap-2">
                <span>★</span> Compare ★
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ComparisonOfStrategies }