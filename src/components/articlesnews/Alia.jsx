import React from "react";
import IMAGES from '../images/Images';
import { IoBookmarkOutline } from "react-icons/io5";
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';
import Navbar from "../navbar/Navbar";

function Alia() {
  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT: Article Content */}
          <div className="lg:col-span-2">
            <p className="text-pink-400 font-semibold uppercase text-sm mb-2">Entertainment</p>
            <h1 className="text-4xl font-bold leading-tight mb-4">
              Alia Bhatt re-creates iconic saree look of Rekha from Silsila, pays tribute to her at Umrao Jaan screening
            </h1>
            <p className="text-sm text-gray-300 mb-6">
              By <span className="font-semibold text-white">Santanu Das</span> • Jun 26, 2025 10:13 PM IST
            </p>

            <img
              src={IMAGES.imageAliaRekhaTribute} // Update this image in your IMAGES.js
              alt="Alia Bhatt tribute to Rekha"
              className="w-full rounded-md object-cover mb-6"
            />

            {/* Author and Dates */}
            <div className="text-sm text-gray-400 mb-4">
              <p>
                By <span className="text-blue-400 font-medium">Santanu Das</span> • Entertainment Desk
              </p>
              <p>Published June 26, 2025 · Updated June 26, 2025 10:13 PM IST</p>
            </div>

            {/* Icons Section */}
            <div className="flex items-center gap-6 mb-6 text-gray-300">
              <button className="flex items-center gap-1 hover:text-red-500 transition">
                <FaHeart /> <span>221</span>
              </button>
              <button className="flex items-center gap-1 hover:text-blue-400 transition">
                <FaComment /> <span>55</span>
              </button>
              <button className="flex items-center gap-1 hover:text-green-400 transition">
                <FaShare /> <span>Share</span>
              </button>
            </div>

            {/* Main Content */}
            <p className="text-lg leading-relaxed mb-6">
              Alia Bhatt is a certified Rekha fangirl! The actor attended the screening of <strong>Umrao Jaan</strong> in a beautiful pink saree, which was fashioned as a tribute to one of Rekha's iconic saree looks in <em>Silsila</em>. The look was styled by Rhea Kapoor.
              <br /><br />
              Alia Bhatt attended the screening of <em>Umrao Jaan</em> and paid a tribute to one of Rekha's most iconic movie looks. The actor looked radiant in a light-pink saree paired with feather earrings — a direct homage to the look Rekha popularized in the 1981 classic.
              <br /><br />
              Alia’s look was completed with glowing dewy makeup and loosely styled hair. She posed gracefully for the paparazzi and radiated old-school charm reminiscent of Rekha’s signature elegance. The event was packed with nostalgia and admiration for timeless Bollywood fashion.
              <br /><br />
             
            </p>
             <h2 className="font-bold text-2xl ">Also Read : <span className="text-blue-400 font-normal  cursor-pointer hover:underline" onClick={() => navigate('/Creamiest')} >The Creamiest Oatmeal Is Made In A Skillet, Not A Pot</span></h2>
    <br />
          </div>

          {/* RIGHT: Ad / Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100 rounded-md p-4">
              <img
                src="https://www.10signs.org/wp-content/uploads/2023/10/AD-Alzheimers.png"
                alt="ad-banner"
                className="w-full rounded-md"
              />
              <p className="text-xs text-gray-500 mt-2 text-center">
                Sponsored • Alzheimer's Association
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <p className="text-white font-semibold uppercase text-xl mb-2">Recommended</p>
          </div>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-4 gap-6 mt-6">
          <div className="group overflow-hidden relative">
            <img
              src={IMAGES.image2}
              alt="jar lid"
              className="w-full cursor-pointer rounded-md object-cover mb-4 transform transition-transform duration-300 group-hover:scale-105"
            />
            <span className="cursor-pointer">This Simple Little Hack Gets Jar Lids Unstuck Every Single Time</span>
            <div className="hidden lg:block absolute top-0 right-[-15px] h-full border-r-2 border-pink-500"></div>
          </div>

          <div className="group overflow-hidden relative">
            <img
              src={IMAGES.image3}
              alt="peanut butter"
              className="w-full cursor-pointer rounded-md object-cover mb-4 transform transition-transform duration-300 group-hover:scale-105"
            />
            <span className="cursor-pointer">One Peanut Butter Brand Is Beyond Unhealthy</span>
            <div className="hidden lg:block absolute top-0 right-[-15px] h-full border-r-2 border-pink-500"></div>
          </div>

          <div className="group overflow-hidden relative">
            <img
              src={IMAGES.image4}
              alt="mac and cheese"
              className="w-full cursor-pointer rounded-md object-cover mb-4 transform transition-transform duration-300 group-hover:scale-105"
            />
            <span className="cursor-pointer">
              Forget Kraft, This Boxed Mac & Cheese Is Everyone's New Favorite
            </span>
            <div className="hidden lg:block absolute top-0 right-[-15px] h-full border-r-2 border-pink-500"></div>
          </div>

          <div className="group overflow-hidden">
            <img
              src={IMAGES.image6}
              alt="burger"
              className="w-full cursor-pointer rounded-md object-cover mb-4 transform transition-transform duration-300 group-hover:scale-105"
            />
            <span className="cursor-pointer">If You Only Try 1 McDonald's Burger, Make It This One</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alia;
