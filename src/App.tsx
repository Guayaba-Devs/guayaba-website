import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import AboutComponent from "./components/About/AboutComponent";
import HomeComponent from "./components/Home/HomeComponent";
import LocationsComponent from "./components/About/Maps";
import CommunityComponent from "./components/Community/CommunityComponent";

function App() {
  return (
    <>
      <Navbar />
      <HomeComponent />
      <AboutComponent />
      <LocationsComponent />
      <CommunityComponent />
    </>
  );
}

export default App;
