import './App.css';
import Header from "./components/Header"
import ProductListing from './components/ProductListing';
import ResultSummary from './components/ResultSummary';
import { Routes, Route, HashRouter, Navigate } from "react-router-dom";

function App() {  
  return (
    <div className="App">
      <HashRouter basename='/'>
      <br />
        <Header />
        <br />
        <Routes>
          <Route path="/" element={<ProductListing/>} />
          <Route path="/result/:urlCode" element={<ResultSummary/>} />
          <Route path="*" element={<div><h2>404 Page not found</h2></div>}/>
        </Routes>      
      </HashRouter>
    </div>
  );
}

export default App;
