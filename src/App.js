import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Principal from "./components/Principal";
import Form from './components/Form'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route path="/" exact component={Principal} />
        <Route path="/create" exact component={Form} />
        
      </Router>
    </>
  );
}

export default App;
