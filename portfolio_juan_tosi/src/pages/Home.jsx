import React from "react";
import Header from "../components/Header";
import MainHome from "../components/MainHome";
import Footer from "../components/Footer";
// import "../styles/mains.css"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <MainHome />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
