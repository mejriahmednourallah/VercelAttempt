
import { Sidebar } from "../components/Sidebar"
import { Link } from "react-router-dom"
import article1 from "../assets/images/article.png";
import article2 from "../assets/images/article2.png";




export function ListeDesCommandes () {
  return (
<main className="flex-grow bg-[#fff2c0] relative">
      {/* Star decorations */}
      <div className="absolute top-20 left-10 text-yellow-300 text-4xl">★</div>
      <div className="absolute top-40 right-20 text-yellow-300 text-4xl">★</div>
      <div className="absolute bottom-20 left-40 text-yellow-300 text-4xl">★</div>

      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="text-sm mb-4 text-gray-600">
          <Link to="/">Accueil</Link> / <Link to="/listcomandes">liste_des_commandes</Link> 
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <Sidebar />

       
        {/* Command List */}
        <div className="flex-grow flex flex-col gap-6">
             {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-6">LISTE DES COMMANDES</h1>

          {/* Card 1 */}
          <div className="bg-[#fff8e0] rounded-lg p-6 flex items-center">
            {/* Image */}
            <div className="w-32 h-32 rounded overflow-hidden flex-shrink-0">
              <img
                src={article1}
                alt="Cardigan Vert En Laine"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Text Content */}
            <div className="flex-grow ml-6">
              <h2 className="text-xl font-bold mb-2">Cardigan Vert En Laine Fait Main</h2>
              <p className="text-gray-700 mb-1">Num Commande : 239846</p>
              <p className="text-gray-700 mb-1">Totale Commande : 80DT</p>
              <p className="text-gray-700 mb-1">Temps Estimé : 1j:18h:20m</p>
              <p className="text-gray-700">Statut : En Route</p>
            </div>

            {/* Details Button */}
            <div className="ml-auto">
  <Link
    to="/detailscommande"
    className="
      flex items-center justify-center
      min-w-[200px]
      rounded-full px-4 py-2.5 text-sm
      transition-colors bg-[#e9cc5e]
      font-medium text-center font-bold mb-2
    "
  >
    Détails
  </Link>
</div>

          </div>

          {/* Card 2 */}
          <div className="bg-[#fff8e0] rounded-lg p-6 flex items-center">
            {/* Image */}
            <div className="w-32 h-32 rounded overflow-hidden flex-shrink-0">
              <img
                src={article2}
                alt="Cardigan Vert En Laine"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Text Content */}
            <div className="flex-grow ml-6">
              <h2 className="text-xl font-bold mb-2">Cardigan Vert En Laine Fait Main</h2>
              <p className="text-gray-700 mb-1">Num Commande : 239846</p>
              <p className="text-gray-700 mb-1">Totale Commande : 80DT</p>
              <p className="text-gray-700 mb-1">Temps Estimé : 1j:18h:20m</p>
              <p className="text-gray-700">Statut : En Route</p>
            </div>

            {/* Details Button */}
            <div className="ml-auto">
            <button className="
   items-center justify-between
  min-w-[200px]  /* Au moins 200px */
  rounded-full px-4 py-2.5 text-sm 
  transition-colors bg-[#e9cc5e] 
  font-medium text-center
">
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
;
export default ListeDesCommandes; // ✅ Bien exporté
