import { useState } from "react";
import "./App.css";
import AIHStudio from "./components/home/AIHStudio";
import AIHAgents from "./components/home/AIHAgents";
import SuccessStory from "./components/home/SuccessStory";
import Blogs from "./components/home/Blogs";
import { APIProvider } from "@vis.gl/react-google-maps";
import HomePage from "./components/home/HomePage";
import HomeLast from "./components/home/HomeLast";

// import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HomePage />
      <SuccessStory />
      <AIHAgents />
      <AIHStudio />
      <Blogs />
      {/* <HomeLast /> */}
      {/* <Home /> */}

      {/* TODO: Refactor the API key - Google maps support for last home page */}
      {/*<APIProvider apiKey={AIzaSyAWpGF4YuL4EUS37-tUy0xOeldVIKkVnVY}>*/}
      {/*<HomeLast />*/}
      {/*</APIProvider>*/}
    </>
  );
}

export default App;
