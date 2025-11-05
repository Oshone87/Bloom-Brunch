import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { cart } = useCart()

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50 font-sans">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl md:text-3xl font-serif font-bold text-green-700 tracking-wide"
        >
          Bloom & Brunch 🌸
        </Link>

        {/* Hamburger icon (mobile) */}
        <button
          className="md:hidden text-green-700 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Links (desktop) */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium font-sans text-base items-center">
          <li><Link to="/" className="hover:text-green-700 transition-colors duration-200">Home</Link></li>
          <li><Link to="/about" className="hover:text-green-700 transition-colors duration-200">About</Link></li>
          <li><Link to="/menu" className="hover:text-green-700 transition-colors duration-200">Menu</Link></li>
          <li><Link to="/flowers-gifts" className="hover:text-green-700 transition-colors duration-200">Flowers & Gifts</Link></li>
          <li><Link to="/contact" className="hover:text-green-700 transition-colors duration-200">Contact</Link></li>
          <li>
            <Link 
              to="/cart" 
              className="relative hover:text-green-700 transition-colors duration-200 flex items-center gap-1"
            >
              <span className="text-xl">🛒</span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white text-center pb-4 space-y-3 font-medium font-sans shadow-md text-gray-700">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link></li>
          <li><Link to="/flowers-gifts" onClick={() => setMenuOpen(false)}>Flowers & Gifts</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li>
            <Link to="/cart" onClick={() => setMenuOpen(false)} className="flex items-center justify-center gap-2">
              🛒 Cart
              {cart.length > 0 && (
                <span className="bg-pink-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                  {cart.length}
                </span>
              )}
            </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
