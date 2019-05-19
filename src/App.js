import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./Containers/Header";
import Main from "./Containers/Main";
import Footer from "./Containers/Footer";
import QuickFeedback from "./Containers/QuickFeedback/QuickFeedback";
import Geolocation from "./Components/Geolocation";
<<<<<<< HEAD
import NearbyOrganizationsList from "./Components/NearbyOrganizationsList";
import QRCodeComponent from "./Components/QRCode";
import Print from "./Components/Print";
=======
import FeedbackPage from "./Containers/FeedbackPage";
import NotFound from "./Components/NotFound";
>>>>>>> 76fcd1ebda57d5a6639ecd5b4870f3fa77e02c9b

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      {/* <QuickFeedback />
      <NearbyOrganizationsList /> */}
      {/* <QRCodeComponent id="38270" /> */}
      <Print
        organizationName="Главное управление юстиции Минского городского исполнительного комитета"
        id="38270"
      />
=======
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={QuickFeedback} />
          <Route path="/feedback/:name" component={FeedbackPage} />
          <Route path="/description" component={QuickFeedback} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
>>>>>>> 76fcd1ebda57d5a6639ecd5b4870f3fa77e02c9b
      {/* <Header />
      <Main />
      <Footer /> */}
    </div>
  );
}

export default App;
