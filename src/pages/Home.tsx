import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { useState } from 'react';

// Example placeholder images (replace these with your own)
import knotAndThreadLogo from '../assets/images/homephotopng.png';
import marketplaceImage from '../assets/images/markt.png';
import chatspaceImage from '../assets/images/chatsp.png';
import vitrineImage from '../assets/images/vitr.png';
import entrepreneurImg from '../assets/images/persona.png';

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <main className="flex-grow bg-[#FFF2C0]">
      {/* Hero Section */}
      <div className="relative">
        <section className="bg-[#D4C8B0] mx-4 md:mx-40 mt-16 rounded-2xl overflow-hidden min-h-[400px] md:min-h-[425px]">
          <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 relative">
            {/* Text Content */}
            <div className="max-w-xl space-y-0 relative">
              <div className="relative">
                <div className="transform -rotate-6 mb-2">
                  <span className="inline-block bg-[#C85B8E] text-black px-6 py-2 text-5xl font-black tracking-tight">
                    Chaque pièce
                  </span>
                </div>
                <div className="transform -rotate-6 mb-2">
                  <span className="inline-block bg-[#FFD699] text-black px-6 py-2 text-5xl font-black tracking-tight">
                    est unique et
                  </span>
                </div>
                <div className="transform -rotate-6 mb-2">
                  <span className="inline-block bg-white text-black px-6 py-2 text-5xl font-black tracking-tight">
                    fabriquée avec
                  </span>
                </div>
                <div className="transform -rotate-6">
                  <span className="inline-block text-black px-6 py-2 text-5xl font-black tracking-tight">
                    amour pour vous
                  </span>
                </div>
              </div>
              {/* Star near text */}
              <span className="absolute bottom-0 left-0 text-gray-400 text-xl">★</span>
            </div>

            {/* Logo Badge */}
            <div className="relative w-250 h-250 mt-8 md:mt-0">
              <img
                src={knotAndThreadLogo}
                alt="Knot & Thread Logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Star decorations */}
            <span className="absolute top-4 right-8 text-[#C85B8E] text-xl">★</span>
            <span className="absolute top-1/4 right-1/4 text-gray-400 text-xl">★</span>
            <span className="absolute bottom-1/4 right-8 text-gray-400 text-xl">★</span>
            <span className="absolute bottom-8 left-1/4 text-gray-400 text-xl">★</span>
          </div>
        </section>

        {/* Carousel Dots */}
        <div className="flex justify-center mt-6 mb-6">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full mx-2 ${
                currentSlide === index ? 'bg-black' : 'bg-white border border-black'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Instagram Follow Bar */}
      <div className="bg-[#F0D878] py-5">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <span className="font-medium text-lg text-black">Suivez-nous sur Instagram</span>
          <Link to="https://instagram.com/Pocket_Biz" className="flex items-center gap-2">
            <Instagram className="h-6 w-6 text-[#E1306C]" />
            <span className="font-medium text-lg text-black">Pocket_Biz</span>
          </Link>
        </div>
      </div>

      {/* SERVICES SECTION #1 */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>

          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            {/* MarketPlace */}
            <div className="flex flex-col items-center flex-1">
              <div className="mb-6 h-[400px] w-full flex items-center justify-center">
                <img
                  src={marketplaceImage || '/placeholder.svg?height=192&width=192'}
                  alt="MarketPlace"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center">
                <div className="flex items-center">
                  <h3 className="text-xl font-semibold">MarketPlace</h3>
                  <Link to="/Avisproduits">
                    <span className="text-2xl ml-2">→</span>
                  </Link>
                </div>
                <p className="text-gray-700 text-sm mb-4">Un assistant intelligent</p>
              </div>
            </div>

            {/* ChatSpace */}
            <div className="flex flex-col items-center flex-1">
              <div className="mb-6 h-[400px] w-full flex items-center justify-center">
                <img
                  src={chatspaceImage || '/placeholder.svg?height=192&width=192'}
                  alt="ChatSpace"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center">
                <div className="flex items-center">
                  <h3 className="text-xl font-semibold">ChatSpace</h3>
                  <span className="text-2xl ml-2">→</span>
                </div>
                <p className="text-gray-700 text-sm mb-4">Un assistant intelligent</p>
              </div>
            </div>

            {/* Vitrine */}
            <div className="flex flex-col items-center flex-1">
              <div className="mb-6 h-[400px] w-full flex items-center justify-center">
                <img
                  src={vitrineImage || '/placeholder.svg?height=192&width=192'}
                  alt="Vitrine"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center">
                <div className="flex items-center">
                  <h3 className="text-xl font-semibold">Vitrine</h3>
                  <span className="text-2xl ml-2">→</span>
                </div>
                <p className="text-gray-700 text-sm mb-4">Personnaliser votre Vitrine</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION #2 (PocketBiz Offer) */}
      <section className="py-16 bg-[#FFF2C0]">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4 gap-12">
          {/* Left Image */}
          <div className="md:w-1/2 flex justify-center relative">
            <div className="absolute top-20 left-30 text-yellow-300 text-4xl">★</div>
            <div className="absolute top-40 right-20 text-yellow-300 text-4xl">★</div>
            <div className="absolute bottom-20 left-40 text-yellow-300 text-4xl">★</div>
            <div className="absolute top-20 left-10 text-yellow-300 text-4xl">★</div>
            <div className="absolute top-40 right-20 text-yellow-300 text-4xl">★</div>
            <div className="absolute bottom-20 left-40 text-yellow-300 text-4xl">★</div>
            <img
              src={entrepreneurImg}
              alt="Entrepreneur"
              className="max-h-96 object-contain"
            />
          </div>

          {/* Right Text Content */}
          <div className="md:w-1/2 text-left bg-[#E0C340] rounded-lg p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="text-l md:text-2xl font-bold mb-6">
              <div className="bg-white px-4 py-2 inline-block rounded-lg">PocketBiz -</div>
              Votre Passerelle <br/>vers l’Entrepreneuriat
            </h3>
            <p className="text-gray-700 mb-6 text-lg">
              Trouvez des opportunités d’affaires ou mettez votre entreprise en vente en toute simplicité.
            </p>
            <p className="text-gray-700 mb-6 text-lg">
              <strong>1 Décembre - 10 Janvier</strong>
              <br />
              Profitez d’une offre exclusive pour votre lancement !
            </p>
            <button className="text-white bg-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
              Profiter maintenant
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}