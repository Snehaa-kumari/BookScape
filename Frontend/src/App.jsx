
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import BookFree from './components/Freebook';
import Course from './components/Course';
import { BrowserRouter, Routes, Route } from "react-router";
import Signup from './components/Signup';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <div className='min-h-screen bg-white text-black dark:bg-slate-900 dark:text-white transition-all'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <Home />
                <BookFree />
                <Footer />
              </>
            } />
            <Route path="/Course" element={<Course />} />
             <Route path="/Contact" element={<Contact />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
