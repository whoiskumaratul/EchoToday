import React from "react";
import IMAGES from '../images/Images';
import { IoBookmarkOutline } from "react-icons/io5";
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';
import Navbar from "../navbar/Navbar";
import {useNavigate} from 'react-router-dom'

function WhatToEatBeforeAndAfterYoga() {

    const navigate = useNavigate();
  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT: Article Content */}
          <div className="lg:col-span-2">
            <p className="text-yellow-500 font-semibold uppercase text-sm mb-2">Lifestyle</p>
            <h1 className="text-4xl font-bold leading-tight mb-4">
              Just got done with yoga? Know what to eat before and after your session for better energy and recovery
            </h1>
            <p className="text-sm text-gray-300 mb-6">
              By <span className="font-semibold text-white">Adrija Dey</span> • Jun 27, 2025 10:50 AM IST
            </p>

            <img
              src={IMAGES.imageYogaFood} // Add this image to your Images.jsx
              alt="Yoga food"
              className="w-full rounded-md object-cover mb-6"
            />

            {/* Author and Dates */}
            <div className="text-sm text-gray-400 mb-4">
              <p>
                By <span className="text-blue-400 font-medium">Adrija Dey</span> • Wellness Writer
              </p>
              <p>Published June 27, 2025 · Updated June 27, 2025 11:10 AM IST</p>
            </div>

            {/* Icons Section */}
            <div className="flex items-center gap-6 mb-6 text-gray-300">
              <button className="flex items-center gap-1 hover:text-red-500 transition">
                <FaHeart /> <span>80</span>
              </button>
              <button className="flex items-center gap-1 hover:text-blue-400 transition">
                <FaComment /> <span>23</span>
              </button>
              <button className="flex items-center gap-1 hover:text-green-400 transition">
                <FaShare /> <span>Share</span>
              </button>
            </div>

            {/* Main Content */}
            <p className="text-lg leading-relaxed mb-6">
              Make the most of your yoga session with nutritious meals that may help optimise the benefits.
              <br /><br />
              Starting your day with a routine sets the tone for everything that follows, and often, many fitness enthusiasts turn to yoga for a calming beginning to the day. But before you unroll the mat, what you eat can make a big difference, energising your body for the asanas. Similarly, after wrapping up the yoga session, the post-yoga practice nutrition equally plays a role in muscle recovery.
              <br /><br />
              <h2 className="font-bold text-2xl ">Also Read : <span className="text-blue-400 font-normal  cursor-pointer hover:underline" onClick={() => navigate('/Creamiest')} >The Creamiest Oatmeal Is Made In A Skillet, Not A Pot</span></h2>
    <br />

              <h2 className="font-semibold text-2xl ">Pre Yoga</h2>
    <br />
                <img
              src={IMAGES.imageYogaFood1}  
              alt="Yoga food"
              className="w-full rounded-md object-cover mb-6"
            />

         
            Banana smoothi is recommended as a pre-yoga snack.(shutterstock)
               <br />
              Yoga helps begin your day with intention. 
              <br /><br />
              HT Lifestyle reached out to experts to understand what to eat before and after a yoga session to maximise energy and support recovery.
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

export default WhatToEatBeforeAndAfterYoga;
