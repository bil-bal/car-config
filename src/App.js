import './App.css';
import Header from "./components/Header"
import ProductListing from './components/ProductListing';
import ResultSummary from './components/ResultSummary';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {  
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing/>} />
          <Route path="/result/:urlCode" element={<ResultSummary/>} />
          <Route>404 Not Found</Route>
        </Routes>      
      </Router>
    </div>
  );
}

export default App;
