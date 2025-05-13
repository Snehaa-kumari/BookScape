import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import BookFree from './components/Freebook';
import Course from './components/Course';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from './components/Signup';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';
import AuthProvider, { useAuth } from './context/AuthProvider';

// ✅ A component that uses useAuth INSIDE the Provider
function AppRoutes() {
  const [authUser] = useAuth(); // ✅ Now safe to call useAuth
  console.log(authUser);

  return (
    <Routes>
      <Route path="/" element={
        <>
          <Navbar />
          <Home />
          <BookFree />
          <Footer />
        </>
      } />
      <Route path="/Course" element={authUser ? <Course /> : <Navigate to="/signup" />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  );
}

function App() {
  return (
    <div className='min-h-screen bg-white text-black dark:bg-slate-900 dark:text-white transition-all'>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes /> {/* ✅ useAuth is used inside here */}
        </AuthProvider>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
