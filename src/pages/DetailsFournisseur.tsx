import { Star } from "lucide-react"
import { Sidebar } from "../components/Sidebar"
import { Link } from "react-router-dom"
import fourLogo from "../assets/images/fourLogo.png"
import ByKateCreations from "../assets/images/ByKateCreations.png"
import Bowlicious from "../assets/images/Bowlicious.png"
import BlossomCraft from "../assets/images/BlossomCraft.jpeg"
import avisLogo from "../assets/images/avis.png"

export function DetailsFournisseur() {
  return (
    <main className="flex-grow bg-[#FCEAB3] relative">
      {/* Star decorations - hidden on small screens */}
      <div className="absolute top-20 left-10 text-yellow-300 text-2xl sm:text-3xl md:text-4xl hidden sm:block">★</div>
      <div className="absolute top-40 right-20 text-yellow-300 text-2xl sm:text-3xl md:text-4xl hidden sm:block">★</div>
      <div className="absolute bottom-20 left-40 text-yellow-300 text-2xl sm:text-3xl md:text-4xl hidden sm:block">
        ★
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-4 py-4 sm:py-6">
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
          <Sidebar />

          {/* Right-side content */}
          <div className="flex-grow flex flex-col gap-4 sm:gap-6">
            {/* Breadcrumb */}
            <div className="text-sm sm:text-base md:text-lg mb-2 text-center mt-4 sm:mt-6 text-gray-600">
              <Link to="/" className="font-thin">
                MarketPlace
              </Link>{" "}
              /
              <Link to="/fournisseurs" className="font-thin">
                Fournisseurs
              </Link>{" "}
              /<span className="font-extralight">Knot & Thread</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-center mb-3 sm:mb-6">Details Fournisseur</h1>

            {/* Supplier Details Card */}
            <div className="bg-white/50 rounded-[20px] p-4 sm:p-6 md:p-7 mb-4 sm:mb-6 flex-grow">
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                {/* Supplier Logo */}
                <div className="flex-shrink-0 flex justify-center md:justify-start">
                  <div className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden border-4 border-[#ffffff]">
                    <div className="w-full h-full rounded-full flex items-center justify-center">
                      <img
                        src={fourLogo || "/placeholder.svg"}
                        alt="Knot & Thread Logo"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Supplier Information */}
                <div className="flex-grow mt-4 md:mt-0">
                  <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                    <div>
                      <span className="font-bold">Nom Du Fournisseur : </span>
                      <span>Knot & Thread</span>
                    </div>
                    <div>
                      <span className="font-bold">Numéro De Téléphone : </span>
                      <span>+216 24 835 000</span>
                    </div>
                    <div>
                      <span className="font-bold">Adresse : </span>
                      <span>15 Rue De La République, Tunis, Tunisie</span>
                    </div>
                    <div>
                      <span className="font-bold">Email : </span>
                      <span>knotetthread@Gmail.Com</span>
                    </div>
                    <div>
                      <span className="font-bold">Catégorie De Produits/Services : </span>
                      <span className="break-words">
                        Créations Artisanales En Crochet Et Tricot (Accessoires, Décorations, Vêtements)
                      </span>
                    </div>
                    <div>
                      <span className="font-bold">Conditions De Paiement : </span>
                      <span>Paiement À La Commande</span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center md:justify-end">
                    <Link
                      to="/comparer"
                      className="bg-[#E7C845] text-black font-bold rounded-[16px] px-4 sm:px-6 py-2 text-sm sm:text-base hover:bg-[#e9cc5e] transition-colors shadow-lg w-[183px] h-[40px] flex items-center justify-center"
                    >
                      Comparer
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews and Chart Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 flex-grow">
              {/* Reviews Section */}
              <div className="bg-white/50 rounded-lg p-4 sm:p-6 md:p-7">
                <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-4">
                  {/* Logo & Title Section */}
                  <div className="flex flex-col items-center mb-4 sm:mb-0">
                    <img src={avisLogo || "/placeholder.svg"} alt="Avis Logo" className="w-32 sm:w-40 h-auto" />
                    <h3 className="text-center font-bold mt-1 text-sm sm:text-base">Les Avis</h3>
                  </div>

                  {/* Review Items */}
                  <div className="space-y-2 sm:space-y-3 w-full sm:w-auto">
                    <div className="bg-[#013033] text-white rounded-[40px] p-2 sm:p-3 flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-[35px] overflow-hidden mr-2 sm:mr-3 flex-shrink-0">
                        <img
                          src={ByKateCreations || "/placeholder.svg"}
                          alt="Kate Creations"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="mr-2 text-xs sm:text-sm truncate max-w-[80px] sm:max-w-none">
                        By Kate Creations
                      </span>
                      <div className="flex ml-auto">
                        {[1, 2, 3, 4, 5].map((star, index) => (
                          <Star
                            key={star}
                            className={`h-3 w-3 sm:h-4 sm:w-4 ${index < 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-white text-white'}`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="bg-[#013033] text-white rounded-[40px] p-2 sm:p-3 flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-[35px] overflow-hidden mr-2 sm:mr-3 flex-shrink-0">
                        <img
                          src={Bowlicious || "/placeholder.svg"}
                          alt="Bowlicious"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="mr-2 text-xs sm:text-sm truncate max-w-[80px] sm:max-w-none">Swellicious</span>
                      <div className="flex ml-auto">
                        {[1, 2, 3, 4, 5].map((star, index) => (
                          <Star
                            key={star}
                            className={`h-3 w-3 sm:h-4 sm:w-4 ${index < 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-white text-white'}`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="bg-[#013033] text-white rounded-[40px] p-2 sm:p-3 flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-[35px] overflow-hidden mr-2 sm:mr-3 flex-shrink-0">
                        <img
                          src={BlossomCraft || "/placeholder.svg"}
                          alt="BlossomCraft"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="mr-2 text-xs sm:text-sm truncate max-w-[80px] sm:max-w-none">BlossomCraft</span>
                      <div className="flex ml-auto">
                        {[1, 2, 3, 4, 5].map((star, index) => (
                          <Star
                            key={star}
                            className={`h-3 w-3 sm:h-4 sm:w-4 ${index < 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-white text-white'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chart Section */}
              <div className="bg-white/50 rounded-lg p-3 sm:p-4 md:p-6 flex flex-col items-center max-h-[350px] w-full relative">
                {/* Chart Container */}
                <div className="flex items-end justify-around w-full h-[150px] sm:h-[180px] md:h-[200px] space-x-2 sm:space-x-4 relative">
                  {/* Y-axis Line */}
                  <div
                    className="absolute left-0 bottom-0 top-0 w-[2px] sm:w-[3px] bg-black"
                    style={{ left: "5%", bottom: "13%" }}
                  ></div>

                  {/* X-axis Line */}
                  <div
                    className="absolute left-0 right-0 bottom-0 h-[2px] sm:h-[3px] bg-black"
                    style={{ left: "2%", bottom: "13%" }}
                  ></div>

                  {/* Chart Bars */}
                  {[
                    { month: "Jan", height: "h-[40px] sm:h-[50px]" },
                    { month: "Feb", height: "h-[60px] sm:h-[80px]" },
                    { month: "Mar", height: "h-[80px] sm:h-[100px]" },
                    { month: "Apr", height: "h-[100px] sm:h-[120px]" },
                    { month: "May", height: "h-[120px] sm:h-[150px]" },
                  ].map(({ month, height }, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div
                        className={`w-8 sm:w-10 md:w-12 bg-[#E7C845] rounded-t-lg ${height} border-2 border-black`}
                      ></div>
                      <span className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">{month}</span>
                    </div>
                  ))}
                </div>

                {/* Title - Moved under the chart */}
                <h3 className="text-center font-bold mt-4 sm:mt-6 text-sm sm:text-base">
                  Avancement Des Revenus Cette Année
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

