import './App.css';
import Header from "./components/Header"
import ProductListing from './components/ProductListing';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ResultView from './components/ResultView';

function App() {  
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing/>} />
          <Route path="/result/:UrlCode" element={<ResultView/>} />
          <Route>404 Not Found</Route>
        </Routes>      
      </Router>
    </div>
  );
}

export default App;
