import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import Routes from "./routes";
import Dashboard from "./layout/dashboard";

function App() {
  return (
    <Router>
      {/* <Routes /> */}
      <Dashboard />
    </Router>
  );
}

export default App;
