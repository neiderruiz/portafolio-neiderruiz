import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./assets/css/tailwind.css";
import Home from './components/pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
