import React from "react";
import AppBar from "./AppBar/AppBar";
import Hero from "./layout/Hero";
import SectionB from "./layout/SectionB";
import CssBaseline from "@material-ui/core/CssBaseline";
import WeatherInfo from "./layout/WeatherInfo";
import WeatherPics from "./layout/WeatherPics";
import GalleryPreview from "./components/GalleryPreview";
// import Map from "./components/Map";
import News from "./components/News";
import SectionC from "./layout/SectionC";
import SectionD from "./layout/SectionD";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar />
      <Hero />
      <SectionB partA={<WeatherInfo />} partB={<WeatherPics />} />
      <SectionC news={<News />} />
      <SectionD galleryPreview={<GalleryPreview />} />
    </React.Fragment>
  );
}

export default App;
