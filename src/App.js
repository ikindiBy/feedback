import React from "react";
import "./App.css";

import Header from "./Containers/Header";
import Main from "./Containers/Main";
import Footer from "./Containers/Footer";
import QuickFeedback from "./Containers/QuickFeedback/QuickFeedback";
import Geolocation from "./Components/Geolocation";
import NearbyOrganizationsList from "./Components/NearbyOrganizationsList";
import ListOfOrganizations from "./Components/ListOfOrganizations";
import FeedbackPage from "./Containers/FeedbackPage";

function App() {
  return (
    <div className="App">
      <QuickFeedback />
      <NearbyOrganizationsList />
      {/* <Geolocation /> */}
      {/* <ListOfOrganizations /> */}
      {/* <Header />
      <Main />
      <Footer /> */}
      <FeedbackPage />
    </div>
  );
}

export default App;
