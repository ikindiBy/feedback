import React from "react";
import "./App.css";

import Header from "./Containers/Header";
import Main from "./Containers/Main";
import Footer from "./Containers/Footer";
import Geolocation from "./Components/Geolocation/Geolocation";

function App() {
  return (
    <div className="App">
      <Geolocation />
      {/* <Header />
      <Main />
      <Footer /> */}
    </div>
  );
}

export default App;
