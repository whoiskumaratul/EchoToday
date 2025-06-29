import React from "react";
import IMAGES from '../images/Images';
import { IoBookmarkOutline } from "react-icons/io5";
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';
import Navbar from "../navbar/Navbar";

function NaturalWorld() {
  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT: Article Content */}
          <div className="lg:col-span-2">
            <p className="text-green-500 font-semibold uppercase text-sm mb-2">Nature</p>
            <h1 className="text-4xl font-bold leading-tight mb-4">
              Exploring the Wonders of the Natural World
            </h1>
            <p className="text-sm text-gray-300 mb-6">
              By <span className="font-semibold text-white">Kaitlyn Huamani</span> • May 10, 2025 9:00 am EST
            </p>

            <img
              src={IMAGES.imageNaturalWorld} // Add this image to your Images.jsx
              alt="natural world"
              className="w-full rounded-md object-cover mb-6"
            />

            {/* Author and Dates */}
            <div className="text-sm text-gray-400 mb-4">
              <p>
                By <span className="text-blue-400 font-medium">Kaitlyn Huamani</span> • Environmental Writer
              </p>
              <p>Published May 10, 2025 · Updated May 11, 2025 08:30 AM PT</p>
            </div>

            {/* Icons Section */}
            <div className="flex items-center gap-6 mb-6 text-gray-300">
              <button className="flex items-center gap-1 hover:text-red-500 transition">
                <FaHeart /> <span>50</span>
              </button>
              <button className="flex items-center gap-1 hover:text-blue-400 transition">
                <FaComment /> <span>25</span>
              </button>
              <button className="flex items-center gap-1 hover:text-green-400 transition">
                <FaShare /> <span>Share</span>
              </button>
            </div>

            {/* Main Content */}
            <p className="text-lg leading-relaxed mb-6">
              From the towering redwoods of California to the vibrant coral reefs of the Great Barrier Reef, our planet is home to extraordinary natural wonders that continue to inspire awe and curiosity.
              <br /><br />
              In recent years, more people have turned to nature not only for recreation but also for restoration—finding peace in the vast landscapes, diverse wildlife, and pristine environments untouched by human development.
              <br /><br />
              Scientists and conservationists are working hand-in-hand to document and preserve Earth’s most delicate ecosystems. Advances in drone technology and satellite imaging have allowed researchers to monitor changes in biodiversity and habitat loss more effectively than ever before.
              <br /><br />
              Whether it’s the majesty of a glacier carving its path through rock or the quiet beauty of a rainforest teeming with life, each corner of the planet tells a story of resilience, evolution, and interconnection.
              <br /><br />
              As the climate continues to change, protecting these natural wonders becomes even more urgent. Education, responsible tourism, and community-led conservation are key to ensuring that the next generation can experience the magic of the natural world firsthand.
            </p>
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
            <div className="hidden lg:block absolute top-0 right-[-15px] h-full border-r-2 border-red-600"></div>
          </div>

          <div className="group overflow-hidden relative">
            <img
              src={IMAGES.image3}
              alt="peanut butter"
              className="w-full cursor-pointer rounded-md object-cover mb-4 transform transition-transform duration-300 group-hover:scale-105"
            />
            <span className="cursor-pointer">One Peanut Butter Brand Is Beyond Unhealthy</span>
            <div className="hidden lg:block absolute top-0 right-[-15px] h-full border-r-2 border-red-600"></div>
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
            <div className="hidden lg:block absolute top-0 right-[-15px] h-full border-r-2 border-red-600"></div>
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

export default NaturalWorld;
