import React, { useState } from "react";
import SideNav from "./components/SideNav";
import Home from "./components/Home";
import "./css/app.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Academics from "./components/Academics";

function App({ children }) {
  const [className, setClassName] = useState("canvas");

  return (
    <>
      <Router>
        <SideNav setClassName={setClassName} className={className}>
          <Home
            SideNav={SideNav}
            setClassName={setClassName}
            className={className}
          />
        </SideNav>
      </Router>
    </>
  );
}

export default App;
