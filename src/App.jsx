import { useState } from "react";
import "./App.css";
import Header from "./Header";
import HeaderSection from "./HeaderSection";
import HomeInfo from "./HomeInfo";
import OurClasses from "./OurClasses";
import BmiCalculator from "./BmiCalculator";
import OurBestTrainers from "./OurBestTrainers";
import Purchase from "./Purchase";
import Review from "./Review";
import Footer from "./Footer";
import ContactUs from "./ContactUs";

function App() {
  return (
    <>
      <Header />
      <HeaderSection />
      <HomeInfo />
      <OurClasses />
      <BmiCalculator />
      <OurBestTrainers />
      <Purchase />
      <Review />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
