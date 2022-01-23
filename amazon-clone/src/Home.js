import React from "react";
import "./Home.css";
import Product from "./Product"
function Home() {
  return(
  <div className="home">
    I
    <div className="home_container">
      <img
      className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home_row">
        <Product title='The Lean Startup: How Today Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover' price={29.99} image='https://rukminim1.flixcart.com/image/416/416/kp2y2kw0/regionalbooks/z/2/d/the-lean-startup-english-paperback-ries-eric-original-imag3eefcbxzdyeg.jpeg?q=70' rating={5}/>
        <Product title='Stand Mixer, 1000W Electric Kitchen Mixer Food Mixer, 6-Speed Tilt-Head Dough Mixer with 304 Stainless Steel Bowl, Mixing Beater, Whisk, Dough Hook, Scraper &Splash Guard' price={429.19} image='https://m.media-amazon.com/images/I/71zC5wzysWS._AC_UY436_FMwebp_QL65_.jpg' rating={3}/>
      </div>
      <div className="home_row">
        <Product title='SAMSUNG Galaxy Watch Active2 (Silicon Strap + Aluminum Bezel) Bluetooth - International' price={899} image='https://m.media-amazon.com/images/I/518qjbbuGZL._AC_UY327_FMwebp_QL65_.jpg' rating={4}/>
        <Product title='Roll over image to zoom in See what Alexa can do Echo (4th Gen) | With premium sound, smart home ' price={533.16} image='https://m.media-amazon.com/images/I/71JB6hM6Z6L._AC_UY218_.jpg' rating={5}/>
        <Product title='Majority Bowfell Small Sound Bar for TV with Bluetooth, RCA, USB, Opt, AUX Connection, Mini Sound/Audio System for TV Speakers' price={355} image='https://m.media-amazon.com/images/I/71sHVeLKq9L._AC_UY545_FMwebp_QL65_.jpg' rating={3}/>
        
      </div>
      <div className="home_row">
      <Product title='2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 512GB SSD Storage, Backlit Keyboard' price={2560} image='https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UY327_FMwebp_QL65_.jpg' rating={3}/>
      </div>
    </div>
  </div>);
}

export default Home;
