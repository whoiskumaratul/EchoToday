import React from "react";
import IMAGES from '../images/Images'
import { IoBookmarkOutline } from "react-icons/io5";
import { FaHeart, FaComment, FaShare, FaLink } from 'react-icons/fa';
import Navbar from "../navbar/Navbar";

function Sarah() {

  
  return (

   
    <div>
     <Navbar />
      

      <div className="max-w-7xl mx-auto px-4 py-8 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT: Article Content */}
        <div className="lg:col-span-2">
          <p className="text-red-600 font-semibold uppercase text-sm mb-2">California</p>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Sarah Jessica Parker's twin daughters turn 16: their transformative appearances and contrasting personalities in photos
          </h1>
          <p className="text-sm text-gray-300 mb-6">
            By <span className="font-semibold text-white">Ahad Sanwari
</span> • 2 days ago
Jun 22, 2025, 10:30 PM GMT+1
          </p>
          <img
            src={IMAGES.imageImmigrant}
            alt="oatmeal"
            className="w-full rounded-md object-cover mb-6"
          />
           {/* Author and Dates */}
    <div className="text-sm text-gray-400 mb-4">
      <p>
        By <span className="text-blue-400 font-medium">Ahad Sanwari
</span> • Senior Writer
      </p>
      <p>
        Published Jun 22, 2025, 10:30 PM GMT+1 · Updated 2 days ago 
      </p>
    </div>

     {/* Icons Section */}
    <div className="flex items-center gap-6 mb-6 text-gray-300">
      <button className="flex items-center gap-1 hover:text-red-500 transition">
        <i className="fas fa-heart"><FaHeart /> </i>
        <span> 25</span>
      </button>
      <button className="flex items-center gap-1 hover:text-blue-400 transition">
        <i className="fas fa-comment"><FaComment /></i>
        <span> 10</span>
      </button>
      <button className="flex items-center gap-1 hover:text-green-400 transition">
        <i className="fas fa-share"><FaShare /> </i>
        <span>Share</span>
      </button>
    </div>


          <p className="text-lg leading-relaxed mb-6">
           While the pair keep out of the public eye compared to their older brother James Wilkie Broderick, who is a budding actor, they've accompanied their parents on the red carpet several times, and have even made occasional social media appearances over the years.
            <br />
           Take a look at how Tabitha and Loretta have evolved over the years in photos below…
          </p>

          <h1 className="text-xl font-bold">The very beginning</h1>
          <br />

          <p>
          The younger Barranco told The Times on Sunday that his father was pepper sprayed and beaten, and that his shoulder was dislocated. After speaking with him Sunday at about 6 p.m., Barranco said his father had not received medical treatment, food or water after more than 24 hours in a detention facility in Los Angeles. </p>
  <br /><br />

  <h1 className="text-xl font-bold pb-6">Stepping into the spotlight</h1>
    <p>
          The twins made their red carpet debut in 2017 at the Charlie and the Chocolate Factory opening night on Broadway, joined by their older brother. And the girls were already developing a taste for style. 
<br /><br />
For a video with Vogue, Sarah recalled showing her daughters a picture of her wearing a nude ball gown adorned with flowers for the cover. "I showed my daughters … and both my daughters' hands went to their mouths and they were like, 'You're on the cover of Vogue?' I didn't know they were aware of Vogue. So, that was very touching to me."</p>
  

<br /><br />
In 2017, the girls joined their mom at the premiere of Hocus Pocus 2. Sarah told People at the time that the pair were incredibly excited to hear she was working on a sequel to the 1993 cult classic.

<br />
<br />
"They were so excited to meet Bette and Kathy. Loretta kept asking me, 'But wait, are we going to meet them as [their characters] Winnie and Mary? Or are we going to meet them as Bette Midler and Kathy Najimy?'" she remembered, then admitting she "hammed" it up a bit for them when they visited the set in Providence, Rhode Island.
<br /><br / >
By 2018, Sarah admitted to the publication that while the two were very close, they had started exhibiting "different interests" and were keen on creating their own identities, including going to different schools. 

"They're really devoted to each other, but they'll also say, 'I need time away from her.' Tabitha can play by herself for hours. Loretta always needs to be checking in. They go to different schools. That's Tabitha's idea."

<br /><br / >

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

export default Sarah;
