import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";

import { Home } from './pages/Home'
import NoMatch from './pages/NoMatch'
import Login from './pages/Login'
import { ComparatorProvider } from "./context/ComparatorContext";

export default function App() {

  return (
      <Router>
        <Header />
        <ComparatorProvider>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="*" element={<NoMatch />} />        
          </Routes>
        </ComparatorProvider>
      </Router>
  );
}
