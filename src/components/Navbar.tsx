import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

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
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium font-sans text-base">
          <li><Link to="/" className="hover:text-green-700 transition-colors duration-200">Home</Link></li>
          <li><Link to="/about" className="hover:text-green-700 transition-colors duration-200">About</Link></li>
          <li><Link to="/menu" className="hover:text-green-700 transition-colors duration-200">Menu</Link></li>
          <li><Link to="/flowers-gifts" className="hover:text-green-700 transition-colors duration-200">Flowers & Gifts</Link></li>
          <li><Link to="/contact" className="hover:text-green-700 transition-colors duration-200">Contact</Link></li>
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
        </ul>
      )}
    </nav>
  )
}

export default Navbar
