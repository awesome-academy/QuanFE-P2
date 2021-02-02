import Footer from "components/Footer";
import Header from "components/Header";
import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";

const HomePage = React.lazy(() => import("./features/HomePage"));
const Register = React.lazy(() => import("./features/Register/Register"));
const Login = React.lazy(() => import("./features/Login/Login"));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={HomePage} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
