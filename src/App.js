import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header";

const HomePage = React.lazy(() => import("./features/HomePage"));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
