import React from "react";

import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="wrapper">
      <NavBar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
