import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <section className="bg-pink-50 min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
        <div className="max-w-md">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-green-900 mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-gray-700 mb-8 text-lg">
            Looks like you haven't added anything to your cart yet. Browse our beautiful flowers and gifts!
          </p>
          <Link
            to="/flowers-gifts"
            className="inline-block bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800 transition font-medium"
          >
            Shop Flowers & Gifts
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-pink-50 min-h-screen px-6 pt-24 pb-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-green-900">
            Shopping Cart
          </h1>
          <button
            onClick={clearCart}
            className="text-sm text-red-600 hover:text-red-800 underline font-medium"
          >
            Clear All
          </button>
        </div>

        {/* Cart Items */}
        <div className="space-y-4 mb-8">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col sm:flex-row"
            >
              {/* Image */}
              <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-serif text-xl text-green-900 font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{item.short}</p>
                      <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-pink-100 text-pink-700 font-medium">
                        {item.type === "flower" ? "🌸 Flower" : "🎁 Gift"}
                      </span>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition text-sm font-medium"
                      title="Remove from cart"
                    >
                      ✕ Remove
                    </button>
                  </div>
                </div>

                {/* Quantity & Price */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600 font-medium">Qty:</span>
                    <div className="flex items-center gap-2 border border-gray-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.qty - 1)}
                        className="px-3 py-1 hover:bg-gray-100 transition text-lg font-semibold text-gray-700"
                      >
                        −
                      </button>
                      <span className="px-4 py-1 font-medium text-green-900">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.qty + 1)}
                        className="px-3 py-1 hover:bg-gray-100 transition text-lg font-semibold text-gray-700"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-gray-600">
                      ${item.price.toFixed(2)} each
                    </p>
                    <p className="text-xl font-bold text-green-900">
                      ${(item.price * item.qty).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary & Checkout */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 sticky bottom-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-gray-600 text-sm mb-1">Total Items: {cart.length}</p>
              <p className="text-3xl font-bold text-green-900">
                ${cartTotal.toFixed(2)}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                to="/flowers-gifts"
                className="px-6 py-3 rounded-full border-2 border-green-700 text-green-700 font-medium hover:bg-green-50 transition text-center"
              >
                Continue Shopping
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-full bg-green-700 text-white font-medium hover:bg-green-800 transition text-center"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
