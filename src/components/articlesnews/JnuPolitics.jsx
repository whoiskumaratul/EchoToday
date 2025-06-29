import React from "react";
import IMAGES from '../images/Images';
import { IoBookmarkOutline } from "react-icons/io5";
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';
import Navbar from "../navbar/Navbar";

function JnuPolitics() {
  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT: Article Content */}
          <div className="lg:col-span-2">
            <p className="text-pink-400 font-semibold uppercase text-sm mb-2">Trending</p>
            <h1 className="text-4xl font-bold leading-tight mb-4">
              ‘Deepika had no idea about JNU politics’: Vivek Agnihotri on Deepika Padukone's controversial visit to JNU in 2020
            </h1>
            <p className="text-sm text-gray-300 mb-6">
              By <span className="font-semibold text-white">Aalokitaa Basu</span> • Jun 17, 2025 05:17 PM IST
            </p>

            <img
              src={IMAGES.imageDeepikaJNU}  
              alt="Deepika Padukone JNU controversy"
              className="w-full rounded-md object-cover mb-6"
            />

            {/* Author and Dates */}
            <div className="text-sm text-gray-400 mb-4">
              <p>
                By <span className="text-blue-400 font-medium">Aalokitaa Basu</span> • Entertainment Desk
              </p>
              <p>Published June 17, 2025 · Updated June 17, 2025 05:17 PM IST</p>
            </div>

            {/* Icons Section */}
            <div className="flex items-center gap-6 mb-6 text-gray-300">
              <button className="flex items-center gap-1 hover:text-red-500 transition">
                <FaHeart /> <span>143</span>
              </button>
              <button className="flex items-center gap-1 hover:text-blue-400 transition">
                <FaComment /> <span>32</span>
              </button>
              <button className="flex items-center gap-1 hover:text-green-400 transition">
                <FaShare /> <span>Share</span>
              </button>
            </div>

            {/* Main Content */}
            <p className="text-lg leading-relaxed mb-6">
              Deepika Padukone's 2020 release <strong>Chhapaak</strong> was a daring venture, telling the story of acid attack survivor Laxmi Agarwal. But the film’s merit was sadly overshadowed by her controversial visit to <strong>JNU</strong> shortly before its release.
              <br /><br />
              Now, filmmaker <strong>Vivek Agnihotri</strong> has weighed in on the incident. During a chat with journalist Shubhankar Mishra, he shared that the backlash Deepika faced wasn’t entirely her fault.
              <br /><br />
              “I can guarantee that Deepika had no idea about JNU politics when she went there... It’s not about being dumb,” said Vivek. He emphasized he doesn’t think she’s unintelligent—“She is a very smart and intelligent woman.”
              <br /><br />
              According to him, had she known about the sensitivity of the political environment at JNU and how it might impact her career, she likely would have avoided the visit. He believes her PR team misunderstood the situation, thinking it was a promotional event.
              <br /><br />
              “During film promotions, there are too many voices telling stars what to do... Her PR was mistaken. Bigger fish than her have been fried for getting involved in politics,” he concluded.
            </p>
            <h2 className="font-bold text-2xl">
              Also Read : <span className="text-blue-400 font-normal  cursor-pointer hover:underline" onClick={() => navigate('/Creamiest')} >
                The Creamiest Oatmeal Is Made In A Skillet, Not A Pot
              </span>
            </h2>
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
            <span className="cursor-pointer">Forget Kraft, This Boxed Mac & Cheese Is Everyone's New Favorite</span>
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

export default JnuPolitics;
