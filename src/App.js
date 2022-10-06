

import { Routes, Route } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import HomePage from "./components/home/HomePage";
import Postview from "./components/postview/Postview";
import PostWrite from "./components/postwrite/PostWrite";
import Results from './components/resultview/Results';

function App() {
  return (
    <>
      <main >
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<Results />} />
          <Route path="/post/:id" element={<Postview />} />
          <Route path="/write-post" element={<PostWrite />} />
          <Route path="/about-us" element={<Aboutus />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
