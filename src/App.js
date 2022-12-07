import Navbar from "./Navbar";
import Create from "./Create";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from "./Home";
import QuoteDetails from './QuoteDetails'


function App() {
  
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <div className="content">
      <Routes>   
        <Route path="/" element={<Home/>}/> 
        <Route path="/create" element={<Create/>}/>
        <Route  path="/quotes/:id" element={<QuoteDetails/>}/>
      </Routes>
      </div>
     </Router>
      
    </div>
  );
}

export default App;
