import React from "react";
import IMAGES from '../images/Images';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';
import Navbar from "../navbar/Navbar";

function Cuet2025() {
  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT: Article Content */}
          <div className="lg:col-span-2">
            <p className="text-blue-400 font-semibold uppercase text-sm mb-2">Education</p>
            <h1 className="text-4xl font-bold leading-tight mb-4">
              CUET UG Result 2025 News Live: Where to check results, final answer keys when released
            </h1>
            <p className="text-sm text-gray-300 mb-6">
              By <span className="font-semibold text-white">HT Education Desk</span> • Jun 27, 2025 1:06 PM IST
            </p>

            <img
              src={IMAGES.imageCuetResult2025} // Add this image in your IMAGES.js
              alt="CUET UG Result 2025 News"
              className="w-full rounded-md object-cover mb-6"
            />

            <div className="text-sm text-gray-400 mb-4">
              <p>
                By <span className="text-blue-400 font-medium">HT Education Desk</span> • Live Coverage
              </p>
              <p>Published June 27, 2025 · Updated June 27, 2025 1:06 PM IST</p>
            </div>

            {/* Icons Section */}
            <div className="flex items-center gap-6 mb-6 text-gray-300">
              <button className="flex items-center gap-1 hover:text-red-500 transition">
                <FaHeart /> <span>342</span>
              </button>
              <button className="flex items-center gap-1 hover:text-blue-400 transition">
                <FaComment /> <span>102</span>
              </button>
              <button className="flex items-center gap-1 hover:text-green-400 transition">
                <FaShare /> <span>Share</span>
              </button>
            </div>

            {/* Main Content */}
            <p className="text-lg leading-relaxed mb-6">
              CUET UG Result 2025 News Live: National Testing Agency (NTA) will announce the Common University Entrance Test-Undergraduate or CUET UG 2025 result on the official website, <strong>cuet.nta.nic.in</strong>. Along with the result, the agency will also release the final answer key of the test. Once declared, candidates can check the CUET UG results using their application numbers and dates of birth.
              <br /><br />
              <strong>UG CUET result 2025: Date and time not confirmed</strong><br />
              NTA has not confirmed the date and time for the CUET UG result yet. In the exam's information bulletin, it said that it will be announced later on the website.
              <br /><br />
              <strong>How to check CUET UG results 2025:</strong><br />
              After the result announcement, candidates can check their scores by following these steps:
              <ul className="list-disc ml-6 my-2">
                <li>Go to <em>cuet.nta.nic.in</em></li>
                <li>Open the CUET UG 2025 scorecard download link.</li>
                <li>Enter your login details.</li>
                <li>Submit and view the result.</li>
              </ul>
              <br />
              <strong>What after the CUET UG result announcement?</strong><br />
              After the CUET UG result announcement, candidates need to apply for admission to the participating universities. Unlike JEE or NEET, there is no centralised counselling for CUET UG. Therefore, candidates need to apply separately to each university. They should read the counselling instructions of universities carefully before applying.
              <br /><br />
              <strong>About CUET UG 2025</strong><br />
              CUET is the national-level entrance test for undergraduate admission to central and other participating universities.
              <br /><br />
              This year, the test was conducted from May 13 to June 3, and a re-test on June 2 and 4 for those who originally appeared for the test on May 13 and 16.
              <br /><br />
              The re-test was conducted after candidates raised complaints regarding questions not aligning with the notified syllabus.
              <br /><br />
              Along with the CUET UG result, NTA is also expected to announce the names of subject-wise toppers, their marks and some other details.
              <br /><br />
              Earlier this month, NTA released the CUET UG provisional answer key and invited objections from candidates on the payment of ₹200 per question. NTA said subject experts will verify the objections and if found correct, the answer key will be revised. Based on the revised CUET UG final answer key, the result will be prepared and declared.
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
            <div className="hidden lg:block absolute top-0 right-[-15px] h-full border-r-2 border-blue-500"></div>
          </div>

          <div className="group overflow-hidden relative">
            <img
              src={IMAGES.image3}
              alt="peanut butter"
              className="w-full cursor-pointer rounded-md object-cover mb-4 transform transition-transform duration-300 group-hover:scale-105"
            />
            <span className="cursor-pointer">One Peanut Butter Brand Is Beyond Unhealthy</span>
            <div className="hidden lg:block absolute top-0 right-[-15px] h-full border-r-2 border-blue-500"></div>
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
            <div className="hidden lg:block absolute top-0 right-[-15px] h-full border-r-2 border-blue-500"></div>
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

export default Cuet2025;
