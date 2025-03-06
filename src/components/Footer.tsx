import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#013033] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">PocketBiz</h3>
            <p className="text-sm mb-4">La meilleure solution pour vous</p>
            <div className="flex space-x-2">
              <Link to="#" className="bg-blue-800 p-2 rounded">
                <FaFacebook className="w-6 h-6 text-white" />
              </Link>
              <Link to="#" className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded">
                <FaInstagram className="w-6 h-6 text-white" />
              </Link>
              <Link to="#" className="bg-blue-400 p-2 rounded">
                <FaTwitter className="w-6 h-6 text-white" />
              </Link>
              <Link to="#" className="bg-blue-600 p-2 rounded">
                <FaLinkedin className="w-6 h-6 text-white" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">A propos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#">Detail</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
              <li>
                <Link to="#">Support</Link>
              </li>
              <li>
                <Link to="#">Careers</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Liens</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#">Localisation</Link>
              </li>
              <li>
                <Link to="#">Orders</Link>
              </li>
              <li>
                <Link to="#">Tracking</Link>
              </li>
              <li>
                <Link to="#">Guide</Link>
              </li>
              <li>
                <Link to="#">FAQs</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#">Terms & conditions</Link>
              </li>
              <li>
                <Link to="#">Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
