import { Sidebar } from "../components/Sidebar";
import { Link } from "react-router-dom";
import article1 from "../assets/images/article.png";

export function DetailsCommande() {
  return (
    <main className="flex-grow bg-[#fff2c0] relative">
      {/* Star decorations */}
      <div className="absolute top-20 left-10 text-yellow-300 text-4xl">★</div>
      <div className="absolute top-40 right-20 text-yellow-300 text-4xl">★</div>
      <div className="absolute bottom-20 left-40 text-yellow-300 text-4xl">★</div>

      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="text-sm mb-4 text-gray-600">
          <Link to="/">Accueil</Link> /{" "}
          <Link to="/listcomandes">liste_des_commandes</Link> /{" "}
          <Link to="/detailscommande">Commande_détails</Link>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <Sidebar />

          {/* Main content */}
          <div className="flex-grow flex flex-col gap-6 relative">
            {/* Page Title */}
            <h1 className="text-4xl font-bold text-center mb-6">
              COMMANDE DÉTAILS
            </h1>

            {/* Card */}
            <div className="bg-[#fff8e0] rounded-lg p-6 flex flex-col md:flex-row items-center relative">
              {/* Buttons positioned at the top right */}
              

              {/* Image */}
              <div className="flex-shrink-0 mr-6">
                <div className="w-[239px] h-[488px] rounded overflow-hidden">
                  <img
                    src={article1}
                    alt="Cardigan Vert En Laine"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-grow ml-6 bottom-16">
                <h2 className="text-xl font-bold mb-2">
                  Cardigan Vert En Laine Fait Main
                </h2>
                <p className="text-gray-700 mb-1">
                  Une pièce unique pour ajouter une touche de douceur et
                  d’élégance à votre tenue pendant les jours frais. Chaque
                  cardigan est confectionné avec amour et soin.
                </p>
                <h2 className="text-xl font-bold mb-2">Détails commande</h2>
                <p className="text-gray-700 mb-1">Num Commande : 239846</p>
                <p className="text-gray-700 mb-1">Totale Commande : 80DT</p>
                <p className="text-gray-700 mb-1">
                  Temps Estimé : 1j:18h:20m
                </p>
                <p className="text-gray-700">Statut : En Route</p>
                <h2 className="text-xl font-bold mb-2">Détails Acheteur</h2>
                <p className="text-gray-700 mb-1">
                  Nom et prénom : Ben rebah mouna
                </p>
                <p className="text-gray-700 mb-1">
                  Adresse : 47 rue des fruit chotrana 3 sokra
                </p>
                <p className="text-gray-700 mb-1">Num Tél : 55447395</p>
              </div>
              <div className="absolute bottom-3 right-4 flex space-x-4">
                <button className="flex items-center justify-center min-w-[200px] rounded-full px-4 py-2.5 text-sm transition-colors bg-[#F1F1F1] font-bold shadow-lg">
                  Annuler la commande
                </button>
                <button className="flex items-center justify-center min-w-[200px] rounded-full px-4 py-2.5 text-sm transition-colors bg-[#e9cc5e] font-bold shadow-lg">
                  Détails
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DetailsCommande;
