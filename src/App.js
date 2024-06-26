import './App.css';
import './assets/globals.css'
import Contact from './components/contact';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap"
import Login from './components/login';
import Register from './components/register';
import { Routes, Route } from "react-router-dom"
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Footer from './components/footer';
import NavBar from './components/navbar';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Services from './components/services';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Categories from './components/categories';
import NewProducts from './components/NewProducts';
import Testimonials from './components/CustomerReviews';
import AdminDashboard from './components/AdminDashboard';


function App() {
  return (
    <div className="App">
    <NavBar/>
    <NotificationContainer/>
    <div style = {{minHeight: '100vh', overflowX: 'hidden'}}>
    <Routes>
      <Route path="/" element={ <Dashboard/> } />
      <Route path="register" element={ <Register/> } />
      <Route path="contact" element={ <Contact/> } />
      <Route path="about" element={ <About/> } />
      <Route path="login" element={ <Login/> } />
      <Route path="services" element={ <Services/> } />
      <Route path="categories" element = {<Categories/>} />
      <Route path="categories/newproducts" element = {<NewProducts/>} />
      <Route path="testimonials" element = {<Testimonials/>} />
      <Route path = "adminDashboard" element = {<AdminDashboard/>}/>    
    </Routes>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
