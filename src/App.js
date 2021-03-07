import React, { useState } from "react";
import SideNav from "./components/SideNav";
import Home from "./components/Home";
import "./css/app.css";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App({ children }) {
  const [className, setClassName] = useState("canvas");

  return (
    <>
      <Router>
        <Route path="/" exact>
          <SideNav setClassName={setClassName} className={className}>
            <Home
              SideNav={SideNav}
              setClassName={setClassName}
              className={className}
            />
          </SideNav>
        </Route>
      </Router>
    </>
  );
}

export default App;
