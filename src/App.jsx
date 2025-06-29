 import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ForYou from "./components/forYou/ForYou";
import ArticleCard from "./components/articles/ArticleCard";
import Footer from "./components/footer/Footer";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Creamiest from "./components/articlesnews/Creamiest";
import Immigrant from "./components/articlesnews/Immigrant";
import Sarah from "./components/articlesnews/Sarah";
import ClimateSummit from "./components/articlesnews/ClimateSummit";
import Startups2023 from "./components/articlesnews/Startups2023";
import NaturalWorld from "./components/articlesnews/NaturalWorld";
import AirIndiaCrash from "./components/articlesnews/AirIndiaCrash";
import NorwayChess from "./components/articlesnews/NorwayChess";
import WhatToEatBeforeAndAfterYoga from "./components/articlesnews/WhatToEatBeforeAndAfterYoga";
import Alia from "./components/articlesnews/Alia"; // Adjust the import path as needed
import Cuet2025 from "./components/articlesnews/Cuet2025"; // Adjust the import path as needed
import JnuPolitics from "./components/articlesnews/JnuPolitics";

import TechCard from "./components/categoriesCard/Technologies/TechCard";
import HealthCard from "./components/categoriesCard/Health/HealthCard";
import WorldCard from "./components/categoriesCard/World/WorldCard";
import BusinessCard from "./components/categoriesCard/Business/BusinessCard";
import IndiaCard from "./components/categoriesCard/India/IndiaCard";
import SportsCard from "./components/categoriesCard/Sports/SportsCard";
import LifeStyleCard from "./components/categoriesCard/lifestyle/LifeStyleCard"; // Adjust the import path as needed
import EntertainmentCard from "./components/categoriesCard/Entertainment/EntertainmentCard";
import EducationCard from "./components/categoriesCard/Education/EducationCard"; // Adjust the import path as needed
import PoliticsCard from "./components/categoriesCard/politics/PoliticsCard"; // Adjust the import path as needed

function App() {
  return (
    <>
   
   {/* <Navbar /> */}
  
    <Routes>
      <Route path="/" element={<ArticleCard />} />
      <Route path="/creamiest" element={<Creamiest />} />
      <Route path="/immigrant" element={<Immigrant />} />
      <Route path="/sarah" element={<Sarah />} />
      <Route path="/climatesummit" element={<ClimateSummit />} />
      <Route path="/startups2023" element={<Startups2023 />} />
      <Route path="/naturalworld" element={<NaturalWorld />} />
      <Route path="/airindiacrash" element={<AirIndiaCrash />} />
      <Route path="/norwaychess" element={<NorwayChess />} />
      <Route path="/whattoeatbeforeandafteryoga" element={<WhatToEatBeforeAndAfterYoga />} />
      <Route path="/alia" element={<Alia /> } />
      <Route path="/cuet2025" element={<Cuet2025 />} />
      <Route path="/jnupolitics" element={<JnuPolitics />} />



      <Route path="/techcard" element={<TechCard />} />
      <Route path="/healthcard" element={<HealthCard />} />
      <Route path="/worldcard" element={<WorldCard />} />
      <Route path="/businesscard" element={<BusinessCard />} />
      <Route path="/indiacard" element={<IndiaCard />} />
      <Route path="/sportscard" element={<SportsCard />} />
      <Route path="/lifestylecard" element={<LifeStyleCard />} />
      <Route path="/entertainmentcard" element={<EntertainmentCard />} />
      <Route path="/educationcard" element={<EducationCard />} />
      <Route path="/politicscard" element={<PoliticsCard />} />
      
      {/* Add more routes as needed */} 
    </Routes>
   <Footer />
    </>
  );
}

export default App;