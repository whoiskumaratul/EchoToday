import React from "react";
import IMAGES from '../images/Images';
import { IoBookmarkOutline } from "react-icons/io5";
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';
import Navbar from "../navbar/Navbar";

function AirIndiaCrash() {
  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT: Article Content */}
          <div className="lg:col-span-2">
            <p className="text-red-500 font-semibold uppercase text-sm mb-2">Air India</p>
            <h1 className="text-4xl font-bold leading-tight mb-4">
              Air India crash: Black box flown to Delhi, decoding process underway
            </h1>
            <p className="text-sm text-gray-300 mb-6">
              By <span className="font-semibold text-white">Neha LM Tripathi</span> • Jun 26, 2025 02:12 PM IST
            </p>

            <img
              src={IMAGES.imageAirIndiaCrash} // Add this image to your Images.jsx
              alt="air india crash"
              className="w-full rounded-md object-cover mb-6"
            />

            {/* Author and Dates */}
            <div className="text-sm text-gray-400 mb-4">
              <p>
                By <span className="text-blue-400 font-medium">Neha LM Tripathi</span> • Staff Writer
              </p>
              <p>Published June 26, 2025 · Updated June 26, 2025 03:00 PM IST</p>
            </div>

            {/* Icons Section */}
            <div className="flex items-center gap-6 mb-6 text-gray-300">
              <button className="flex items-center gap-1 hover:text-red-500 transition">
                <FaHeart /> <span>105</span>
              </button>
              <button className="flex items-center gap-1 hover:text-blue-400 transition">
                <FaComment /> <span>85</span>
              </button>
              <button className="flex items-center gap-1 hover:text-green-400 transition">
                <FaShare /> <span>Share</span>
              </button>
            </div>

            {/* Main Content */}
            <p className="text-lg leading-relaxed mb-6">
              The Aircraft Accident Investigation Bureau (AAIB) has begun analyzing the black box data recovered from the crash site of Air India Flight AI171, which crashed moments after takeoff from Ahmedabad on June 12, the government said on Thursday.
              <br /><br />
              As part of a formal investigation launched in line with international protocols, both the Cockpit Voice Recorder (CVR) and the Flight Data Recorder (FDR) were recovered from the Ahmedabad crash site—one from a rooftop on June 13 and the other from the debris on June 16—and were flown to Delhi.
              <br /><br />
              The AAIB, which is the designated authority for such investigations, is currently conducting the investigation into the crash, the government assured. On Thursday, the government stated that the devices (CVR and FDR) were secured under round-the-clock police protection and CCTV surveillance before being airlifted to Delhi by Indian Air Force (IAF) aircraft on June 24.
              <br /><br />
              “...the black boxes were brought from Ahmedabad to Delhi by IAF aircraft with full security on 24 June 2025. The front black box arrived at the AAIB lab in Delhi with the Director General (DG) of AAIB at 1400 hrs on 24 June 2025," it stated. "The rear black box was brought by a second AAIB team and reached the AAIB lab in Delhi at 1715 hrs on 24 June,” it added.
              <br /><br />
              A statement issued by the government also confirmed that data extraction began the same evening at the AAIB lab in Delhi, and the memory module was accessed. The Crash Protection Module (CPM) from the front black box was safely retrieved, and on 25 June 2025, the memory module was successfully accessed and its data downloaded at the AAIB lab.
              <br /><br />
              The AAIB initiated an investigation and constituted a multidisciplinary team on 13 June, in accordance with prescribed norms. The team investigating the black box was formed in line with international standards and is led by the Director General of AAIB, along with technical experts from AAIB, the US NTSB, an aviation medicine specialist, and an air traffic control (ATC) officer, as per ICAO rules, the government clarified.
              <br /><br />
              By June 25, data from the CVR’s memory module had been successfully retrieved. Analysis of the CVR and FDR data is currently underway, the government added, noting that the efforts aim to reconstruct the sequence of events leading to the accident and to identify contributing factors in order to enhance aviation safety and prevent future occurrences.
              <br /><br />
              India, as a signatory to the Chicago Convention (1944) of the ICAO, investigates aircraft accidents in accordance with ICAO Annex 13 and the Aircraft (Investigation of Accidents and Incidents) Rules, 2017.
              <br /><br />
              “All actions have been taken in full compliance with domestic laws and international obligations in a time-bound manner,” the government concluded.
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

export default AirIndiaCrash;
