import React from "react";
import "./App.css";

import Header from "./Containers/Header";
import Main from "./Containers/Main";
import Footer from "./Containers/Footer";
import QuickFeedback from "./Containers/QuickFeedback/QuickFeedback";
import Geolocation from "./Components/Geolocation";
import NearbyOrganizationsList from "./Components/NearbyOrganizationsList";
import QRCodeComponent from "./Components/QRCode";
import Print from "./Components/Print";

function App() {
  return (
    <div className="App">
      {/* <QuickFeedback />
      <NearbyOrganizationsList /> */}
      {/* <QRCodeComponent id="38270" /> */}
      <Print
        organizationName="Главное управление юстиции Минского городского исполнительного комитета"
        id="38270"
      />
      {/* <Header />
      <Main />
      <Footer /> */}
    </div>
  );
}

export default App;
