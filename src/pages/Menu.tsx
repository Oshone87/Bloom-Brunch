import { useState } from "react";
import menu1 from "../assets/menu 1.jpg";
import menu2 from "../assets/menu 2.jpg";
import menu3 from "../assets/menu 3.jpg";
import menu4 from "../assets/menu 4.jpg";
import menu5 from "../assets/menu 5.jpg";
import menu6 from "../assets/menu 6.jpg";
import menu7 from "../assets/menu 7.jpg";
import menu8 from "../assets/menu 8.jpg";
import menu9 from "../assets/menu 9.jpg";
import menu10 from "../assets/menu 10.jpg";
import menu11 from "../assets/menu 11.jpg";
import menu12 from "../assets/menu 12.jpg";
import menu13 from "../assets/menu 13.jpg";
import menu14 from "../assets/menu 14.jpg";

const menuData = {
  "Main Dishes": [
    { name: "Avocado Toast with Poached Egg", image: menu1 },
    { name: "Pancake Stack with Maple Syrup", image: menu2 },
    { name: "Classic French Toast", image: menu3 },
    { name: "Grilled Chicken Sandwich", image: menu4 },
    { name: "Veggie Omelette", image: menu5 },
  ],
  Drinks: [
    { name: "Iced Latte", image: menu6 },
    { name: "Fresh Orange Juice", image: menu7 },
    { name: "Matcha Latte", image: menu8 },
    { name: "Cappuccino", image: menu9 },
    { name: "Iced Tea", image: menu10 },
  ],
  Pastries: [
    { name: "Croissants", image: menu11 },
    { name: "Cinnamon Rolls", image: menu12 },
    { name: "Blueberry Muffins", image: menu13 },
    { name: "Chocolate Chip Cookies", image: menu14 },
  ],
};

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const getRandomPrice = () => (Math.floor(Math.random() * 10) + 6).toFixed(2);

  return (
    <section className="py-16 px-6 bg-pink-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-green-900 text-center mb-12">
          Our Menu
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto mb-16 text-lg">
        Discover a blend of comforting brunch dishes, freshly baked pastries, and refreshing drinks —
        all made to bring warmth and joy to your day.
      </p>

        {Object.entries(menuData).map(([category, items]) => (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-semibold text-green-800 mb-6">
              {category}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer hover:shadow-xl hover:scale-105 transition-transform"
                  onClick={() =>
                    setSelectedItem({
                      ...item,
                      price: getRandomPrice(),
                      description: `Delicious ${item.name.toLowerCase()} made with the freshest ingredients, served with love at Bloom & Brunch.`,
                    })
                  }
                >
                  <div className="w-full h-40 bg-gray-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-green-900">{item.name}</h3>
                    <p className="text-pink-700 font-medium mt-1">
                      ${getRandomPrice()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-lg max-w-md w-full mx-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-2">
                {selectedItem.name}
              </h3>
              <p className="text-pink-800 text-lg font-semibold mb-3">
                ${selectedItem.price}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {selectedItem.description}
              </p>
              <button
                onClick={() => setSelectedItem(null)}
                className="mt-6 w-full bg-green-900 text-pink-50 py-2 rounded-lg hover:bg-green-800 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Menu;
