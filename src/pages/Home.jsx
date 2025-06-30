import React from "react";
import SuccessStory from "../components/home/SuccessStory";
import AIHAgents from "../components/home/AIHAgents";
import AIHStudio from "../components/home/AIHStudio";
import Blogs from "../components/home/Blogs";
import HomePage from "../components/home/HomePage";
import Footer from "../components/common/Footer";

const Home = () => {
  const googleMapsApiKey = "AIzaSyAWpGF4YuL4EUS37-tUy0xOeldVIKkVnVY";

  return (
    <>
      <HomePage />
      <SuccessStory />
      <AIHAgents />
      <AIHStudio />
      <Blogs />
      <Footer apiKey={googleMapsApiKey} />
    </>
  );
};

export default Home;
