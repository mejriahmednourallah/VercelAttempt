import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { DetailsFournisseur } from "./pages/DetailsFournisseur"
import {ListeDesCommandes} from "./pages/listeDesCommandes"
import {DetailsCommande} from "./pages/DetailsCommande"
import { AvisProduits } from "./pages/AvisProduits"
import { Elearning } from "./pages/Elearning"
import { ComparerFour } from "./pages/ComparerFour"
import { Home } from "./pages/Home"
import {OpenTrades} from "./pages/OpenTrades"
import {ComparisonOfStrategies} from "./pages/ComparisonOfStrategies"

import MentorCarousel from "./components/MentorCarousel"; 
import MentorDetails from "./components/MentorDetails"; 
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/DetailsFournisseur" element={<DetailsFournisseur />} />
          <Route path="/listcomandes" element={<ListeDesCommandes />} />
          <Route path="/detailscommande" element={<DetailsCommande />} />
          <Route path="/Avisproduits" element={<AvisProduits />} />
          <Route path="/elearning" element={<Elearning />} />
          <Route path="/comparer" element={<ComparerFour />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mentors" element={<MentorCarousel />} /> {/* Add the new route */}
          <Route path="/mentor/:name" element={<MentorDetails />} /> {/* Add this route */}
          <Route path="/opentrades" element={<OpenTrades />} />
          <Route path="/comparaison-strategie" element={< ComparisonOfStrategies/>} />

          {/* Add more routes here as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

