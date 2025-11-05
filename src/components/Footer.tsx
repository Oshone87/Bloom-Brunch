import { FaInstagram, FaFacebookF, FaTiktok, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-pink-50 py-12 px-6 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-pink-200 mb-3">
            Bloom & Brunch 🌸
          </h2>
          <p className="text-pink-100 leading-relaxed font-sans text-base">
            A cozy café and floral space where fresh blooms meet wholesome brunch.
            Established in <span className="font-semibold">2019</span>, we’ve grown with
            love, creativity, and a passion for community.
          </p>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-xl md:text-2xl font-serif font-semibold text-pink-200 mb-3">
            Opening Hours
          </h3>
          <ul className="space-y-2 text-pink-100 font-sans">
            <li>Monday – Friday: 8:00 AM – 6:00 PM</li>
            <li>Saturday – Sunday: 9:00 AM – 7:00 PM</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl md:text-2xl font-serif font-semibold text-pink-200 mb-3">
            Contact Us
          </h3>
          <ul className="space-y-3 text-pink-100 font-sans">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-pink-300" />
              <span>+234 812 555 2389</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-pink-300" />
              <span>hello@bloomandbrunch.com</span>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-pink-300" />
              <span>22A Admiralty Way, Lekki Phase 1, Lagos</span>
            </li>
          </ul>

          {/* Socials */}
          <div className="flex items-center gap-4 mt-5 text-xl">
            <a href="#" className="hover:text-pink-300 transition-colors duration-200">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-pink-300 transition-colors duration-200">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-300 transition-colors duration-200">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-pink-300 mt-10 pt-6 text-center text-pink-200 text-sm font-sans">
        © {new Date().getFullYear()} Bloom & Brunch Café — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
