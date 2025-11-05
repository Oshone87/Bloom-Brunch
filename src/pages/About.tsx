import flower2 from "../assets/flower 2.jpg";
import shopArea from "../assets/shop area.jpg";

const About = () => {
  return (
    <section className="bg-pink-50 min-h-screen flex flex-col items-center px-6 pt-24 pb-16 text-center md:text-left font-sans">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-green-900 mb-8 text-center">
         About Us
      </h1>

      {/* Story Section */}
      <div className="max-w-3xl text-gray-700 leading-relaxed mb-12 text-center md:text-left">
        <p className="mb-4 font-sans text-lg">
          <span className="font-semibold text-green-800">Bloom & Brunch</span> started as a
          small weekend pop-up where Sarah sold homemade pastries and fresh flowers from
          her garden. People fell in love with the cozy blend of food and floral vibes — 
          so in <span className="font-semibold">2019</span>, she opened a full café combining both passions.
        </p>
        <p className="font-sans text-lg">
          Today, Bloom & Brunch continues to serve wholesome brunch dishes alongside
          beautifully curated flower arrangements for every occasion — creating an
          atmosphere where freshness, beauty, and comfort meet.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
        <img
          src={flower2}
          alt="Flower arrangement"
          className="w-72 h-72 object-cover rounded-2xl shadow-lg border-4 border-white transform hover:scale-105 transition"
        />
        <img
          src={shopArea}
          alt="shop area"
          className="w-72 h-72 object-cover rounded-2xl shadow-lg border-4 border-white transform md:-translate-y-6 hover:scale-105 transition"
        />
      </div>

      {/* Core Values */}
      <div className="max-w-2xl text-gray-700">
        <h2 className="text-3xl font-serif font-semibold text-green-800 mb-6 text-center md:text-left">
          Our Core Values
        </h2>

        <div className="space-y-8 text-lg font-sans">
          <div>
            <h3 className="font-serif text-green-700 text-2xl mb-2">
               Warmth & Community
            </h3>
            <p>
              We believe Bloom & Brunch should feel like a home away from home — a place
              where laughter, connection, and good energy fill the air. Every guest is
              welcomed with genuine care, and our goal is to create moments that bring
              people together around food, flowers, and friendship.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-green-700 text-2xl mb-2">
               Quality & Freshness
            </h3>
            <p>
              From our buttery croissants to our handpicked blooms, everything is crafted
              daily using locally sourced ingredients and flowers. We take pride in
              ensuring every bite and bouquet captures the freshness and authenticity our
              customers deserve.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-green-700 text-2xl mb-2">
               Creativity & Beauty
            </h3>
            <p>
              We see art in everything — from the way a latte is poured to how a bouquet
              is arranged. At Bloom & Brunch, creativity fuels everything we do. Each dish
              and floral design is made to inspire, tell a story, and celebrate the
              beauty found in simple, everyday moments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
