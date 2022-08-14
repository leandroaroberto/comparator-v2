import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from './pages/Home'
import NoMatch from './pages/NoMatch'

export default function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<NoMatch />} />        
      </Routes>
    </Router>
  );
}