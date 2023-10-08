import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

const App = () => {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>          
              <Route path="/" element={<ProductListing />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route> 404 Not Found </Route>
          </Routes>
        </Router>
        <Header />
      </div>
    </>
  );    
}


export default App;