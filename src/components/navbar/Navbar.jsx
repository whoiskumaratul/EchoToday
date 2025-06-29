import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import IMAGES from '../images/Images'
import {AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  FaAngleDown,
  FaFilePdf,
  FaHome,
  FaInternetExplorer,
  FaPhotoVideo,
  FaMap,
  FaAngleRight,
} from "react-icons/fa";

import './Navbar.css';

function Navbar({ onSearch }) {
  
    const [toggle, setToggle] = useState(false);
    const [cartToggle, setCartToggle] = useState(false);
    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    console.log(search);

  return (

    
 <nav className="w-full border-b-[0.5px] border-white shadow-white/10 ">
      <div className="mx-auto flex items-start justify-between w-full  ">

        {/* LEFT SIDE: Logo + Tabs */}
        <div className="flex items-start text-white md:text-2xl font-bold gap-6 flex-wrap md:flex-nowrap">

  
   <a onClick={() => navigate("/")} className="cursor-pointer" title="Go to EchoToday Home">
  <img
    src={IMAGES.imagelogo}  
    alt="EchoToday Logo"
    className="w-[60px] h-[60px] object-contain"
  />
</a>


 
  <div className="flex  md:flex-row items-start gap-4 md:gap-6 pt-3 ">

     
    <div>
      <h1 className="text-white cursor-pointer hover:text-yellow-400" onClick={() => navigate('/startups2023')} >For you</h1>
      <div className="flex justify-start  mt-[2px]">
        <div className="h-1 md:w-4 w-[9px] bg-red-600"></div>
        <div className="h-1 md:w-4 w-[9px] bg-orange-400"></div>
        <div className="h-1 md:w-4 w-[9px] bg-yellow-400"></div>
        <div className="h-1 md:w-4 w-[9px] bg-green-500"></div>
        <div className="h-1 md:w-4 w-[9px] bg-blue-500"></div>
        <div className="h-1 md:w-4 w-[9px] bg-purple-600"></div>
      </div>
    </div>

    {/* Other headings */}
    {/* <h1 className="text-white cursor-pointer hover:text-yellow-400">Daily edition</h1>
    */}
   <span className='dropdown'>
   <li className="text-white cursor-pointer hover:text-yellow-400 list-none flex items-center justify-between">
  Trending
  <FaAngleDown className="ml-1 mt-[1px]" />
</li>
{/* border-green-500 */}
 <span className="dropdown-content border-2  space-y-1 pt-1 pb-1  font-semibold   ">
                <li
                  className="  anker  text-white  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
                  onClick={() => navigate("/alia")}
                >
                  Top Stories
                </li>
                <li
                  className="  anker  text-white  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer  "
                  onClick={() => navigate("/jnupolitics")}
                >
                  Breaking News
                </li>
                <li
                  className="  anker  text-white  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
                  onClick={() => navigate("/norwaychess")}
                >
                   
                  {/* <FaMap className="float-left  " /> */}
                  Most Read
                </li>
              </span>
              </span>

    <span className="dropdown">
      <li className='text-white cursor-pointer hover:text-yellow-400 list-none flex items-center justify-between'>
        News
        <FaAngleDown className="ml-1 mt-[1px]" />
      </li>
      <span className="dropdown-content border-2  space-y-1 pt-1 pb-1  font-semibold   ">
        <li
          className="  anker  text-white  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
          onClick={() => {
            navigate("/worldcard");  
            setToggle(false);       
          }}
        >
          World
        </li>
        <li
          className="  anker  text-white  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
          onClick={() => {
            navigate("/indiacard");  
            setToggle(false);  
          }}
        >
          India
        </li>
        <li
          className="  anker  text-white  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
          onClick={() => {
            navigate("/businesscard");    
            setToggle(false);       
          }}
        >
          Business
        </li>


         <li
          className="  anker  text-white  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
          onClick={() => {
            navigate("/techcard");    
            setToggle(false);       
          }}
        >
          Technologies
        </li>

         <li
          className="  anker  text-white  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
          onClick={() => {
            navigate("/sportscard");    
            setToggle(false);       
          }}
        >
          Sports
        </li>

         <li
          className="  anker  text-white  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
          onClick={() => {
            navigate("/entertainmentcard");    
            setToggle(false);       
          }}
        >
          Entertainment
        </li>


         <li
          className="  anker  text-white  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
          onClick={() => {
            navigate("/lifestylecard");    
            setToggle(false);       
          }}
        >
          Lifestyle
        </li>


         <li
          className="  anker  text-white  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
          onClick={() => {
            navigate("/healthcard");    
            setToggle(false);       
          }}
        >
          Health
        </li>


         <li
          className="  anker  text-white  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
          onClick={() => {
            navigate("/educationcard");    
            setToggle(false);       
          }}
        >
          Education
        </li>


         <li
          className="  anker  text-white  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
          onClick={() => {
            navigate("/politicscard");    
            setToggle(false);       
          }}
        >
          Politics
        </li>

        

      </span>
    </span>
  </div>
</div>

  {/* RIGHT SIDE: Desktop Search + Avatar */}
        <div className="hidden md:flex items-center gap-4 text-white text-xl pr-4">
          <div className="shadow-xl min-h-[40px] p-2">
            <input
             onChange={(e) => onSearch(e.target.value)}
              type="search"
              placeholder="Search by Title"
              className="pl-4 pr-4 pt-1 pb-1 border border-blue-700 rounded text-slate-600"
            />
          </div>
          <div className=" cursor-pointer shadow-xl border hover:border-blue-700 transition-all duration-300 ease-in-out rounded-full">
            <img src={IMAGES.imageavatar} alt="avatar" className="w-10 h-10 rounded-full" />
          </div>
        </div>
  {/* MOBILE Hamburger */}
        <div className="md:hidden flex items-center pr-2 pt-4 pb-4">
          <AiOutlineMenu
            onClick={() => setToggle(true)}
            className="text-white text-2xl cursor-pointer"
          />
        </div>
      </div>

      {/* OVERLAY */}
      {toggle && <div className="bg-black/80 fixed inset-0 z-[9]" onClick={() => setToggle(false)} />}

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 overflow-y-auto ${
          toggle ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <AiOutlineClose
          onClick={() => setToggle(false)}
          size={20}
          className="absolute right-4 top-5 cursor-pointer text-black"
        />

        <div className="bg-[#434be6] w-full h-[60px] flex items-start justify-start pt-1 ">
           <img src={IMAGES.imageavatar} alt="avatar" className="w-12 h-12 rounded-full  mx-2" />
           <h1 className="text-white text-xl pt-2 pl-2  font-bold">Hello, EchoToday</h1>
        </div>

        {/* Search in drawer */}
        <div className="p-4"
       
        >
          <input
           //onChange={(e) => setSearch(e.target.value)}
            onChange={(e) => onSearch(e.target.value)}
            type="search"
            placeholder="EchoToday"
            className="w-full p-2 border border-blue-500 rounded"
          />
        </div>

      

            <nav className="flex flex-col">
          {/* Section 1 */}
          <ul className="flex flex-col pt-4 pb-4 text-gray-800 capitalize border-b-2">
            <li className="font-bold text-xl pb-2 pt-2 pl-8">Trending</li>
            <li className="pb-2 pt-2 pl-8 hover:bg-gray-200 cursor-pointer"  onClick={() => navigate('/alia') }>Top Stories</li>
            <li className="pb-2 pt-2 pl-8 hover:bg-gray-200 cursor-pointer" onClick={() => navigate('/jnupolitics') } >Breaking News</li>
            <li className="pb-2 pt-2 pl-8 hover:bg-gray-200 cursor-pointer" onClick={() => navigate('/norwaychess')} >Most Read</li>
          </ul>

          {/* Section 2 */}
          <ul className="flex flex-col pt-4 pb-4 text-gray-800 capitalize border-b-2">
            <li className="font-bold text-xl pb-2 pt-2 pl-8">News Category</li>
            <li
              className="pb-2 pt-2 pl-8 hover:bg-gray-200 cursor-pointer"
              onClick={() => {
                navigate("/worldcard");
                setToggle(false);
              }}
            >
              World
            </li>
            <li className="pb-2 pt-2 pl-8 hover:bg-gray-200 cursor-pointer" onClick={() => navigate('/indiacard')} >India</li>
            <li className="pb-2 pt-2 pl-8 hover:bg-gray-200 cursor-pointer" onClick={() => navigate('/businesscard')} >Business</li>
            <li className="pb-2 pt-2 pl-8 hover:bg-gray-200 cursor-pointer" onClick={() => navigate('/techcard')} >Technologies</li>
            <li className="pb-2 pt-2 pl-8 hover:bg-gray-200 cursor-pointer" onClick={() => navigate('/sportscard')} >Sports  </li>
            <li className="pb-2 pt-2 pl-8 hover:bg-gray-200 cursor-pointer" onClick={() => navigate('/entertainmentcard')} >Entertainment</li>
            <li className="pb-2 pt-2 pl-8 hover:bg-gray-200 cursor-pointer" onClick={() => navigate('/lifestylecard')} >Lifestyle</li>
            <li className="pb-2 pt-2 pl-8 hover:bg-gray-200 cursor-pointer" onClick={() => navigate('/healthcard')} >Health</li>
            <li className="pb-2 pt-2 pl-8 hover:bg-gray-200 cursor-pointer" onClick={() => navigate('/educationcard')} >Education</li>
            <li className="pb-2 pt-2 pl-8 hover:bg-gray-200 cursor-pointer" onClick={() => navigate('/politicscard')} >Politics</li>
          </ul>

          {/* Section 3 */}
          <ul className="flex flex-col pt-4 pb-4 text-gray-800 capitalize border-b-2">
            <li className="font-bold text-xl pb-2 pt-2 pl-8">Help & Settings</li>
            <li className="pb-2 pt-2 pl-8 hover:bg-gray-200 cursor-pointer">Your account</li>
            <li className="pb-2 pt-2 pl-8 hover:bg-gray-200 cursor-pointer">Customer service</li>
            <li className="pb-2 pt-2 pl-8 hover:bg-gray-200 cursor-pointer">Sign in</li>
          </ul>
        </nav>

     </div>
    </nav>
  );
};

// G:\react-redux-saga-for-blog-after-redux-applying-with-ui\src\components\Header.jsx
 
export default Navbar