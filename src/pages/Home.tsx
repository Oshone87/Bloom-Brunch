import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-pink-50 min-h-screen flex flex-col justify-start items-center text-center px-6 pt-24 pb-16 font-sans">
      {/* Hero Text */}
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-green-900 mb-4 leading-tight">
          Bloom & Brunch 
        </h1>
        <p className="text-lg text-gray-700 mb-8 font-sans leading-relaxed">
          Where fresh flowers meet cozy brunches. Indulge in handcrafted
          arrangements, delightful pastries, and refreshing drinks — all in one
          place.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/menu"
            className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition font-medium font-sans"
          >
            View Menu
          </Link>
          <Link
            to="/flowers-gifts"
            className="bg-pink-300 text-green-900 px-6 py-3 rounded-full hover:bg-pink-400 transition font-medium font-sans"
          >
            Explore Flowers & Gifts
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-12 relative md:min-h-[22rem] flex flex-col items-center space-y-6 md:space-y-0 md:flex-row md:justify-center">
        {/* Left Image */}
        <img
          src="src/assets/orange juice.jpg"
          alt="orange juice"
          className="w-64 h-64 object-cover rounded-2xl shadow-xl transform border-4 border-white z-20 md:absolute md:top-14 md:left-[90%] transition-transform duration-300 hover:scale-105"
        />

        {/* Middle Image */}
        <img
          src="src/assets/main flower.jpg"
          alt="main flower"
          className="w-72 h-72 object-cover rounded-2xl shadow-xl transform border-4 border-white z-10 transition-transform duration-300 hover:scale-105"
        />

        {/* Right Image */}
        <img
          src="src/assets/main dish.jpg"
          alt="main dish"
          className="w-64 h-64 object-cover rounded-2xl shadow-xl transform border-4 border-white z-0 md:absolute md:top-12 md:right-[90%] transition-transform duration-300 hover:scale-105 mt-6 md:mt-0"
        />
      </div>

      {/* Caption Section */}
      <div className="mt-12 text-center px-6 max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-green-800 mb-2">
          Our Signature Trio
        </h2>
        <p className="text-gray-700 leading-relaxed font-sans">
          A blend of nature’s beauty and flavor — from handpicked blooms to
          freshly made brunch favorites. Experience the charm of{" "}
          <span className="text-green-700 font-semibold">Bloom & Brunch</span>.
        </p>
      </div>
    </section>
  );
};

export default Home;
