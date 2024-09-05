import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import AboutComponent from "./components/About/AboutComponent";
import HomeComponent from "./components/Home/HomeComponent";
import LocationsComponent from "./components/About/Maps";

function App() {
  return (
    <>
      <Navbar />
      <HomeComponent />
      <AboutComponent />
      <LocationsComponent />
    </>
  );
}

export default App;
