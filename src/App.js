import React from "react";
import "./App.css";

import Header from "./Containers/Header";
import Main from "./Containers/Main";
import Footer from "./Containers/Footer";
import QuickFeedback from "./Containers/QuickFeedback/QuickFeedback";
import Geolocation from "./Components/Geolocation";

function App() {
  return (
    <div className="App">
      <QuickFeedback />
      {/* <Header />
      <Main />
      <Footer /> */}
    </div>
  );
}

export default App;
