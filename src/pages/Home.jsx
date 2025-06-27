import React from "react";
import SuccessStory from "../components/home/SuccessStory";
import AIHAgents from "../components/home/AIHAgents";
import AIHStudio from "../components/home/AIHStudio";
import Blogs from "../components/home/Blogs";
import HomePageSectionThree from "../components/home/HomePageSectionThree";
import HomePage from "./HomePage"

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
        <HomePage/>
      <SuccessStory />
      <HomePageSectionThree/>
      <AIHAgents />
      <AIHStudio />
      <Blogs />
    </div>
  );
};

export default Home;
