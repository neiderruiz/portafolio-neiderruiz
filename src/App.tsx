import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutMe from './components/pages/AboutMe';
import Home from './components/pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
