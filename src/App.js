import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./Containers/Header";
import Main from "./Containers/Main";
import Footer from "./Containers/Footer";
import QuickFeedback from "./Containers/QuickFeedback/QuickFeedback";
import Geolocation from "./Components/Geolocation";
import FeedbackPage from "./Containers/FeedbackPage";
import NotFound from "./Components/NotFound";
import DescriptionPage from "./Components/DescriptionPage";
import Print from "./Components/Print";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={QuickFeedback} />
          <Route path="/feedback/:id/:name" component={FeedbackPage} />
          <Route path="/description/:id" component={DescriptionPage} />
          <Route path="/QRmaker/:id/:name" component={Print} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
      {/* <Header />
      <Main />
      <Footer /> */}
    </div>
  );
}

export default App;
