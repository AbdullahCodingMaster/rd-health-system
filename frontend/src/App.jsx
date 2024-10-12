import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Testimonial from './pages/Testimonial';
import ContactUs from './pages/ContactUs';
import Header from './components/Header';
import Footer from './components/Footer';
import AboveFooter from './components/AboveFooter';
import Appointment from './components/UserCredientials/Appointment';
import Login from './components/UserCredientials/Login';
import SignUp from './components/UserCredientials/Signup';
import UserDashboard from './components/UserCredientials/UserDashboard';
function App() {
  return (
    <Router>
      <div>
        {/* Include the Navbar */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path='/appointment' element= {<Appointment/>} />
          <Route path='/login' element = {<Login/>}></Route>
          <Route path='/signUp' element= {<SignUp/>}></Route>
          <Route path='userDashboard' element = {<UserDashboard/>}></Route>
        </Routes>
        <AboveFooter/>
        <Routes></Routes>
        <Routes></Routes>
        <Routes></Routes>
        <Footer />
       
      </div>
    </Router>
  );
}

export default App;