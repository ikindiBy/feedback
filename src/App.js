import React from "react";
import "./App.css";

import Header from "./Containers/Header";
import Main from "./Containers/Main";
import Footer from "./Containers/Footer";
import Geolocation from "./Components/Geolocation";
import ListOfOrganizations from "./Components/ListOfOrganizations";

function App() {
  return (
    <div className="App">
      <Geolocation />
      <ListOfOrganizations />
      {/* <Header />
      <Main />
      <Footer /> */}
    </div>
  );
}

export default App;
