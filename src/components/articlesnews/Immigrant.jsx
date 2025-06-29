import React from "react";
import IMAGES from '../images/Images'
import { IoBookmarkOutline } from "react-icons/io5";
import { FaHeart, FaComment, FaShare, FaLink } from 'react-icons/fa';
import Navbar from "../navbar/Navbar"; // Adjust the import path as needed


function Immigrant() {
  return (
    <div>
      
        <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT: Article Content */}
        <div className="lg:col-span-2">
          <p className="text-red-600 font-semibold uppercase text-sm mb-2">California</p>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Immigrant father of three Marines is violently detained, injured by federal agents, son says
          </h1>
          <p className="text-sm text-gray-300 mb-6">
            By <span className="font-semibold text-white">Dylan Murray</span> • June 22, 2025 3:20 pm EST
          </p>
          <img
            src={IMAGES.imageImmigrant}
            alt="oatmeal"
            className="w-full rounded-md object-cover mb-6"
          />
           {/* Author and Dates */}
    <div className="text-sm text-gray-400 mb-4">
      <p>
        By <span className="text-blue-400 font-medium">Dylan Murray</span> • Staff Writer
      </p>
      <p>
        Published June 22, 2025 · Updated June 23, 2025 11:42 AM PT
      </p>
    </div>

     {/* Icons Section */}
    <div className="flex items-center gap-6 mb-6 text-gray-300">
      <button className="flex items-center gap-1 hover:text-red-500 transition">
        <i className="fas fa-heart"><FaHeart /> </i>
        <span> 19</span>
      </button>
      <button className="flex items-center gap-1 hover:text-blue-400 transition">
        <i className="fas fa-comment"><FaComment /></i>
        <span> 7</span>
      </button>
      <button className="flex items-center gap-1 hover:text-green-400 transition">
        <i className="fas fa-share"><FaShare /> </i>
        <span>Share</span>
      </button>
    </div>


          <p className="text-lg leading-relaxed mb-6">
           Video of a landscaper being taken down, pinned and repeatedly punched by masked federal agents in Orange County has gone viral online, and Alejandro Barranco finds it painful to watch.
            <br /><br />
           The Marine veteran says his father, Narciso Barranco, was working outside of a Santa Ana IHOP on Saturday when several masked men approached him. Frightened, he began to run away, his son said. Moments later, he was on the ground, held down by the men, who struck him. 
          </p>

          The younger Barranco told The Times on Sunday that his father was pepper sprayed and beaten, and that his shoulder was dislocated. After speaking with him Sunday at about 6 p.m., Barranco said his father had not received medical treatment, food or water after more than 24 hours in a detention facility in Los Angeles. 
  <br /><br />
“I don’t think it was just, I don’t think it was fair,” Barranco said of the use of force against his father. “I don’t think they need four 200 [pounds]-plus guys to hold down a 5-6 or 5-7, 150-pound guy.”
<br /><br />
In a statement to The Times on Monday, Assistant Secretary for Public Affairs Tricia McLaughlin of the Department of Homeland Security confirmed Border Patrol agents arrested Barranco, who she said was an “illegal alien,” on Saturday. She alleges Barranco swung a weed whacker directly at an agent’s face and refused to comply with the agents’ commands or requests to identify himself. 

<br />
<br />
“The agents took appropriate action and followed their training to use the minimum amount of force necessary to resolve the situation in a manner that prioritizes the safety of the public and our officers. He is now in ICE custody,” her statement continued. 

        </div>

        {/* RIGHT: Ad / Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-100 rounded-md p-4">
            <img
              src="https://www.10signs.org/wp-content/uploads/2023/10/AD-Alzheimers.png"
              alt="ad-banner"
              className="w-full rounded-md"
            />
            <p className="text-xs text-gray-500 mt-2 text-center">Sponsored • Alzheimer's Association</p>
          </div>
        </div>
      </div>
    </div>     


  <div className="max-w-7xl mx-auto px-4 py-8 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT: Article Content */}
        <div className="lg:col-span-2">
          <p className="text-white font-semibold uppercase text-xl mb-2">recommended</p>

          </div>
          </div>
          
          <div className="grid grid-cols-4 sm:grid-cols-4 gap-6 mt-6">
             

             <div className=" group overflow-hidden relative"><img
            src={IMAGES.image2}
            alt="oatmeal"
            className="w-full cursor-pointer rounded-md object-cover mb-4 transform transition-transform duration-300 group-hover:scale-105 "
          />
            <span className="cursor-pointer">This Simple Little Hack Gets Jar Lids Unstuck Every Single Time</span>
             <div className="hidden lg:block absolute top-0 right-[-15px] h-full border-r-2 border-red-600"></div>
    

          </div>

            
             <div className=" group overflow-hidden relative" ><img
            src={IMAGES.image3}
            alt="oatmeal"
             className="w-full cursor-pointer rounded-md object-cover mb-4 transform transition-transform duration-300 group-hover:scale-105 "
          />
            <span className="cursor-pointer">One Peanut Butter Brand Is Beyond Unhealthy</span>
            <div className="hidden lg:block absolute top-0 right-[-15px] h-full border-r-2 border-red-600"></div>
    
          </div>

             
             <div className="group overflow-hidden relative"><img
            src={IMAGES.image4}
            alt="oatmeal"
             className="w-full cursor-pointer rounded-md object-cover mb-4 transform transition-transform duration-300 group-hover:scale-105 "
          />
            <span className="cursor-pointer">
                Forget Kraft, This Boxed Mac & Cheese Is Everyone's New Favorite
            </span>
             <div className="hidden lg:block absolute top-0 right-[-15px] h-full border-r-2 border-red-600"></div>
    
          </div>
 
            
             
            <div className="group overflow-hidden"><img
            src={IMAGES.image6}
            alt="oatmeal"
             className="w-full cursor-pointer rounded-md object-cover mb-4 transform transition-transform duration-300 group-hover:scale-105 "
          />
            <span className="cursor-pointer">
                If You Only Try 1 McDonald's Burger, Make It This One

            </span>
          </div>
 
            
 </div>

          </div>
        
    </div>
  );
}

export default Immigrant;
