"use client";
import React from "react";
import { FaCamera, FaVideo, FaBook, FaBars, FaTimes, FaSearch, FaSpinner, FaGlobe, FaInstagram, FaLink } from 'react-icons/fa';  // アイコンをインポート

function MainComponent() {
  const [center, setCenter] = React.useState({ lat: 35.6762, lng: 139.6503 });
  const [zoom, setZoom] = React.useState(12);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [testimonials, setTestimonials] = React.useState([
    {
      name: "Yuki & Kenji",
      text: "Higashi-san captured our day perfectly. The photos are beyond our expectations!",
    },
    {
      name: "Sakura & Hiroshi",
      text: "We are in awe of the stunning images. Every moment was beautifully documented.",
    },
    {
      name: "Emi & Takeshi",
      text: "The attention to detail in our photos is incredible. We'll cherish these forever.",
    },
  ]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen overflow-hidden text-white bg-black font-playfair">
      <header className="fixed z-50 w-full bg-black bg-opacity-90 backdrop-filter backdrop-blur-lg">
        <div className="container flex items-center justify-between px-4 py-6 mx-auto">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="SILVER LACE WEDDINGS Logo"
              className="w-auto h-12 mr-4"
            />
            <h1 className="text-2xl font-bold tracking-wider text-white md:text-3xl">
              SILVER LACE WEDDINGS
            </h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#portfolio"
                  className="text-lg text-white transition duration-300 ease-in-out hover:text-gray-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-lg text-white transition duration-300 ease-in-out hover:text-gray-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-lg text-white transition duration-300 ease-in-out hover:text-gray-300"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-lg text-white transition duration-300 ease-in-out hover:text-gray-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="px-4 py-2 text-lg text-white transition duration-300 ease-in-out bg-white rounded-full hover:text-gray-300 bg-opacity-20"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button
            onClick={toggleMenu}
            className="text-white md:hidden focus:outline-none"
          >
            <FaBars className={`text-2xl ${isMenuOpen ? "hidden" : "block"}`} />
            <FaTimes className={`text-2xl ${isMenuOpen ? "block" : "hidden"}`} />
          </button>
        </div>
        {isMenuOpen && (
          <nav className="bg-black md:hidden bg-opacity-95 backdrop-filter backdrop-blur-lg">
            <ul className="flex flex-col items-center py-4">
              <li className="py-2">
                <a
                  href="#portfolio"
                  className="text-white transition duration-300 ease-in-out hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Portfolio
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#services"
                  className="text-white transition duration-300 ease-in-out hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Services
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#testimonials"
                  className="text-white transition duration-300 ease-in-out hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Testimonials
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#about"
                  className="text-white transition duration-300 ease-in-out hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  About
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#contact"
                  className="px-4 py-2 text-white transition duration-300 ease-in-out bg-white rounded-full hover:text-gray-300 bg-opacity-20"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main>
        <section className="relative flex items-center justify-center h-screen overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute object-cover w-auto min-w-full min-h-full max-w-none"
          >
            <source src="/wedding-background.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 p-8 px-4 text-center bg-black bg-opacity-50 rounded-lg">
            <h2 className="mb-4 text-5xl font-bold md:text-7xl animate-fadeIn">
              Capturing Timeless Love
            </h2>
            <p className="mb-8 text-xl md:text-2xl animate-fadeIn animation-delay-300">
              Exquisite wedding photography by Higashi Akimitsu
            </p>
            <a
              href="#contact"
              className="px-8 py-4 text-lg text-black transition duration-300 ease-in-out transform bg-white rounded-full hover:bg-gray-200 animate-fadeIn animation-delay-600 hover:scale-105"
            >
              Book Your Dream
            </a>
          </div>
        </section>

        <section id="portfolio" className="py-20 bg-white">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-4xl font-bold text-center text-black">
              Portfolio
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                <div
                  key={item}
                  className="relative overflow-hidden rounded-lg shadow-xl group"
                >
                  <img
                    src={`https://source.unsplash.com/random/800x600?wedding,japan,${item}`}
                    alt={`Elegant Japanese wedding photo ${item}`}
                    className="object-cover w-full transition duration-300 transform h-80 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                    <FaSearch className="text-4xl text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-gray-100">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-4xl font-bold text-center text-black">
              Our Services
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="p-8 bg-white rounded-lg shadow-lg">
                <FaCamera className="mb-4 text-4xl text-black" />
                <h3 className="mb-4 text-2xl font-bold text-black">
                  Wedding Photography
                </h3>
                <p className="text-gray-700">
                  Capture every precious moment of your special day with our
                  expert photography services.
                </p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-lg">
                <FaVideo className="mb-4 text-4xl text-black" />
                <h3 className="mb-4 text-2xl font-bold text-black">
                  Cinematic Videography
                </h3>
                <p className="text-gray-700">
                  Create a cinematic masterpiece of your wedding with our
                  professional videography.
                </p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-lg">
                <FaBook className="mb-4 text-4xl text-black" />
                <h3 className="mb-4 text-2xl font-bold text-black">
                  Custom Albums
                </h3>
                <p className="text-gray-700">
                  Design a beautiful, personalized album to cherish your
                  memories for a lifetime.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-black">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-4xl font-bold text-center">
              Testimonials
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-8 bg-gray-900 rounded-lg shadow-lg"
                >
                  <p className="mb-4 text-gray-300">{testimonial.text}</p>
                  <p className="font-bold">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container flex flex-col items-center px-4 mx-auto md:flex-row">
            <div className="mb-8 md:w-1/2 md:mb-0">
              <img
                src="https://ucarecdn.com/25666e2b-12eb-419b-a1fb-c2d8e8a6f53c/-/format/auto/"
                alt="Higashi Akimitsu"
                className="object-cover w-64 h-64 mx-auto border-4 border-black rounded-full shadow-2xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="mb-4 text-4xl font-bold text-black">
                About Higashi Akimitsu
              </h2>
              <p className="mb-6 text-gray-700">
                As the visionary behind SILVER LACE WEDDINGS, I am dedicated to
                immortalizing the most enchanting moments of your special day.
                With a blend of artistry and technical mastery, I craft visual
                narratives that resonate with emotion and timeless elegance.
              </p>
              <p className="mb-6 text-gray-700">
                With over a decade of experience in wedding photography, I bring
                a unique perspective to each event, capturing the essence of
                Japanese traditions while embracing modern aesthetics.
              </p>
              <div className="flex space-x-6">
                <a
                  href="https://eastprojects.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black transition duration-300 ease-in-out hover:text-gray-700"
                >
                  <FaGlobe className="text-3xl" />
                </a>
                <a
                  href="https://www.instagram.com/aki.h_portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black transition duration-300 ease-in-out hover:text-gray-700"
                >
                  <FaInstagram className="text-3xl" />
                </a>
                <a
                  href="https://lit.link/Akimitsu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black transition duration-300 ease-in-out hover:text-gray-700"
                >
                  <FaLink className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-100">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-4xl font-bold text-center text-black">
              Contact Us
            </h2>
            <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
              <div className="mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 text-black transition duration-300 ease-in-out bg-white border border-gray-300 rounded-full focus:outline-none focus:border-black"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 text-black transition duration-300 ease-in-out bg-white border border-gray-300 rounded-full focus:outline-none focus:border-black"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  className="w-full px-4 py-3 text-black transition duration-300 ease-in-out bg-white border border-gray-300 rounded-full focus:outline-none focus:border-black"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="date"
                  name="wedding_date"
                  className="w-full px-4 py-3 text-black transition duration-300 ease-in-out bg-white border border-gray-300 rounded-full focus:outline-none focus:border-black"
                  required
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-3 text-black transition duration-300 ease-in-out bg-white border border-gray-300 rounded-2xl focus:outline-none focus:border-black"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center w-full px-6 py-4 text-lg text-white transition duration-300 ease-in-out transform bg-black rounded-full hover:bg-gray-900 hover:scale-105"
                disabled={isLoading}
              >
                {isLoading ? (
                  <FaSpinner className="mr-2 fa-spin" />
                ) : null}
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="text-white bg-black">
        <div className="container px-4 py-12 mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p>&copy; 2024 SILVER LACE WEDDINGS. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a
                href="#"
                className="mr-4 text-gray-400 transition duration-300 ease-in-out hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 transition duration-300 ease-in-out hover:text-white"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        .animation-delay-300 {}`}</style>
    </div>
  );
}

export default MainComponent;
