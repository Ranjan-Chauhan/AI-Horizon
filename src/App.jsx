import { useState } from "react";
import "./App.css";
import AIHStudio from "./components/home/AIHStudio";
import AIHAgents from "./components/home/AIHAgents";
import SuccessStory from "./components/home/SuccessStory";
import Blogs from "./components/home/Blogs";
// import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SuccessStory />
      <AIHAgents />
      <AIHStudio />
      <Blogs />
      {/* <Home /> */}
    </>
  );
}

export default App;
