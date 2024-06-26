import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import Header from "./Components/Header/Header"
import FlightSection from "./Components/FlightSection/FlightSection"
import SpecialDeals from "./Components/SpecialDeals/SpecialDeals"
import Destination from "./Components/Destination/Destination"
import PastOffers from "./Components/PastOffers/PastOffers"
import Inspirations from "./Components/Inspirations/Inspirations"
import Voyages from "./Components/Voyages/Voyages"
import CarouselComponent from "./Components/Carousel/Carousel"
import Downloads from "./Components/Downloads/Downloads"
import Footer from "./Components/Footer/Footer"
import Copyright from "./Components/Copyright/Copyright"
// import Test from "./Components/Test/Testi"
// import SliderReview from "./Slider/SliderReview"
function App() {
  return(
    <>
    <Navbar/>
    <Header/>
    <FlightSection/>
    <SpecialDeals/>
    <Destination/>
    <PastOffers/>
    <Inspirations/>
    <Voyages/>
    <CarouselComponent/>
    <Downloads/>
    <Footer/>
    <Copyright/>
    </>
    
  );

}

export default App
