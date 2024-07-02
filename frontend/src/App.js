import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Adhd, Autism, Downsyndrome, Dyslexia, Home, People, ContactUs, Board } from './components/exporter';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adhd" element={<Adhd />} />
          <Route path="/autism" element={<Autism />} />
          <Route path="/downsyndrome" element={<Downsyndrome />} />
          <Route path="/dyslexia" element={<Dyslexia />} />
          <Route path="/people" element={<People />}>
            <Route path='experts' index element={<Board id='experts' />} />
            <Route path='aiTeam' element={<Board id='aiTeam' />} />
            <Route path='devTeam' element={<Board id='devTeam' />} />
          </Route>
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
