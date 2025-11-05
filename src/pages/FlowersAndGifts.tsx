import { useState } from "react";
import { useCart } from "../context/CartContext";
import flower3 from "../assets/flower 3.jpg";
import flower4 from "../assets/flower 4.jpg";
import flower5 from "../assets/flower 5.jpg";
import flower6 from "../assets/flower 6.jpg";
import flower7 from "../assets/flower 7.jpg";
import gift1 from "../assets/gift 1.jpg";
import gift2 from "../assets/gift 2.jpg";
import gift3 from "../assets/gift 3.jpg";
import gift4 from "../assets/gift 4.jpg";

type Item = {
  id: string;
  type: "flower" | "gift";
  title: string;
  price: number;
  image: string;
  short: string;
  long: string;
};

const items: Item[] = [
  // Flowers
  {
    id: "f1",
    type: "flower",
    title: "Bloom & Brunch Signature Bouquet",
    price: 45,
    image: flower3,
    short: "Mixed roses, eucalyptus & baby's breath",
    long:
      "A romantic blend of seasonal roses, soft eucalyptus, and delicate baby’s breath — hand-tied and wrapped with artisanal paper.",
  },
  {
    id: "f2",
    type: "flower",
    title: "Sunshine Bouquet",
    price: 40,
    image: flower4,
    short: "Yellow tulips, daisies & sunflowers",
    long:
      "A cheerful bright bouquet packed with sunny tones — perfect for celebrations and pick-me-ups.",
  },
  {
    id: "f3",
    type: "flower",
    title: "Romantic Roses Box",
    price: 60,
    image: flower5,
    short: "Red & pink roses in a velvet box",
    long:
      "Classic romance in a luxurious square velvet box — arranged to present beautifully and last longer.",
  },
  {
    id: "f4",
    type: "flower",
    title: "Pastel Garden",
    price: 55,
    image: flower6,
    short: "Peonies, hydrangeas & white roses",
    long:
      "Soft peonies and hydrangeas combined with pristine white roses for an elegant, dreamy arrangement.",
  },
  {
    id: "f5",
    type: "flower",
    title: "Minimalist Greens",
    price: 35, 
    image: flower7,
    short: "Eucalyptus & white lilies",
    long:
      "Calm and refined — a modern arrangement of eucalyptus and white lilies for a clean, natural feel.",
  },

  // Gifts
  {
    id: "g1",
    type: "gift",
    title: "Gift Box (mini arrangement + candle + card)",
    price: 30,
    image: gift1,
    short: "Hand-curated gift box",
    long:
      "A thoughtful set with a mini flower arrangement, a scented candle, and a handwritten card. Perfect for appreciation and celebrations.",
  },
  {
    id: "g2",
    type: "gift",
    title: "Scented Candle",
    price: 12,
    image: gift2,
    short: "Lavender • Vanilla • Citrus",
    long:
      "Soy wax candles scented with natural essential oils — choose lavender, vanilla or citrus for a warm, cozy scent.",
  },
  {
    id: "g3",
    type: "gift",
    title: "Handwritten Note Card",
    price: 4,
    image: gift3,
    short: "Personal message card",
    long:
      "A high-quality card with your personal message hand-written in ink. Makes every gift more personal.",
  },
  {
    id: "g4",
    type: "gift",
    title: "Mini Chocolate Box",
    price: 9,
    image: gift4,
    short: "Assorted mini chocolates",
    long:
      "A curated selection of mini chocolates — great as an add-on or a sweet standalone gift.",
  },
];

const FlowersAndGifts = () => {
  const [selected, setSelected] = useState<Item | null>(null);
  const [qty, setQty] = useState(1);
  const [showConfirm, setShowConfirm] = useState<string | null>(null);
  const { cart, addToCart: addToCartContext } = useCart();

  function handleAddToCart(item: Item, q = 1) {
    addToCartContext({
      id: item.id,
      type: item.type,
      title: item.title,
      price: item.price,
      image: item.image,
      short: item.short,
    }, q);
    setShowConfirm(`${item.title} added to cart`);
    setTimeout(() => setShowConfirm(null), 2500);
  }

  return (
    <section className="bg-pink-50 min-h-screen px-6 pt-24 pb-24 font-sans">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-green-900">
            Flowers & Gifts
          </h1>
          <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
            Curated floral designs and thoughtful add-ons — handcrafted with
            care. Click any item to learn more or add to your order.
          </p>
        </div>

        {/* Filter / mini-controls */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <button
            onClick={() => {
              // scroll to flowers: filter by type
              const el = document.getElementById("flowers");
              el?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="px-4 py-2 rounded-full bg-green-700 text-white font-medium hover:bg-green-800 transition"
          >
            Browse Flowers
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("gifts");
              el?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="px-4 py-2 rounded-full bg-pink-300 text-green-900 font-medium hover:bg-pink-400 transition"
          >
            Gifts & Add-ons
          </button>
          <div className="ml-2 text-sm text-gray-600">
            Cart: <span className="font-medium">{cart.length}</span> item(s)
          </div>
        </div>

        {/* FLOWERS SECTION */}
        <section id="flowers" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif text-green-800 mb-6">
             Flowers
          </h2>

          {/* Masonry-like grid using CSS columns */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-6">
            {items
              .filter((i) => i.type === "flower")
              .map((it) => (
                <article
                  key={it.id}
                  className="break-inside-avoid bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-64">
                    <img
                      src={it.image}
                      alt={it.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  <div className="p-4">
                    <h3 className="font-serif text-lg text-green-900 mb-1">
                      {it.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{it.short}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-pink-700 font-semibold">${it.price}</div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => {
                            setSelected(it);
                            setQty(1);
                          }}
                          className="px-3 py-1 rounded-full bg-green-700 text-white text-sm hover:bg-green-800 transition"
                        >
                          Quick view
                        </button>
                        <button
                          onClick={() => handleAddToCart(it, 1)}
                          className="px-3 py-1 rounded-full border border-green-700 text-green-700 text-sm hover:bg-green-100 transition"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </section>

        {/* GIFTS SECTION */}
        <section id="gifts">
          <h2 className="text-2xl md:text-3xl font-serif text-green-800 mb-6">
            Gifts & Add-ons
          </h2>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-6">
            {items
              .filter((i) => i.type === "gift")
              .map((it) => (
                <article
                  key={it.id}
                  className="break-inside-avoid bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-52">
                    <img
                      src={it.image}
                      alt={it.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                  </div>

                  <div className="p-4">
                    <h3 className="font-serif text-lg text-green-900 mb-1">
                      {it.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{it.short}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-pink-700 font-semibold">${it.price}</div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => {
                            setSelected(it);
                            setQty(1);
                          }}
                          className="px-3 py-1 rounded-full bg-green-700 text-white text-sm hover:bg-green-800 transition"
                        >
                          Quick view
                        </button>
                        <button
                          onClick={() => handleAddToCart(it, 1)}
                          className="px-3 py-1 rounded-full border border-green-700 text-green-700 text-sm hover:bg-green-100 transition"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </section>
      </div>

      {/* Confirmation banner */}
      {showConfirm && (
        <div className="fixed right-6 bottom-6 z-50 bg-green-700 text-white px-4 py-2 rounded-lg shadow">
          {showConfirm}
        </div>
      )}

      {/* Modal (glassmorphism) */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelected(null)}
        >
          {/* blurred backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          <div
            className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl max-w-3xl w-full mx-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="md:flex">
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="md:w-1/2 p-6">
                <h3 className="font-serif text-2xl text-green-900 mb-2">
                  {selected.title}
                </h3>
                <p className="text-pink-700 font-semibold mb-4">${selected.price}</p>
                <p className="text-gray-700 mb-4">{selected.long}</p>

                <div className="flex items-center gap-3 mb-4">
                  <label className="text-sm text-gray-700">Quantity</label>
                  <div className="flex items-center border rounded-full overflow-hidden">
                    <button
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="px-3 py-1 bg-white/60 hover:bg-white/80"
                    >
                      −
                    </button>
                    <div className="px-4 py-1 font-medium">{qty}</div>
                    <button
                      onClick={() => setQty((q) => q + 1)}
                      className="px-3 py-1 bg-white/60 hover:bg-white/80"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      handleAddToCart(selected, qty);
                      setSelected(null);
                    }}
                    className="flex-1 px-4 py-2 rounded-full bg-green-700 text-white font-medium hover:bg-green-800 transition"
                  >
                    Add to cart • ${ (selected.price * qty).toFixed(2) }
                  </button>

                  <button
                    onClick={() => setSelected(null)}
                    className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FlowersAndGifts;
