import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-pink-50 min-h-screen py-20 px-6 font-playfair">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-3">Contact Us </h1>
        <p className="text-gray-700 max-w-xl mx-auto">
          Have a question, want to place a custom order, or just say hi?  
          We’d love to hear from you! Fill out the form below or reach us through any of the options provided.
        </p>
      </div>

      {/* Contact Info Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 text-green-900">
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
          <FaMapMarkerAlt className="text-3xl text-green-700 mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">Address</h3>
          <p>22A Admiralty Way, Lekki Phase 1, Lagos</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
          <FaPhoneAlt className="text-3xl text-green-700 mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p>+234 812 555 2389</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
          <FaEnvelope className="text-3xl text-green-700 mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p>hello@bloomandbrunch</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
          <FaClock className="text-3xl text-green-700 mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
          <p>Mon - Fri: (8:00 AM – 6:00 PM)</p>
          <p>Sat & Sun: (9:00 AM – 7:00 PM)</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-10">
        {submitted ? (
          <div className="text-center text-green-700 font-semibold text-lg">
            💌 Thank you! Your message has been received. We’ll get back to you soon.
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-green-800 mb-6 text-center">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-700 text-white py-3 rounded-lg font-medium hover:bg-green-800 transition"
              >
                Send Message
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;
