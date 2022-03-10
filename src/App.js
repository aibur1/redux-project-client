import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Service from './Components/Service';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import Footer from './Components/Footer';
import Services from './Components/Services';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Booking from './Components/Booking/Booking';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard';
import MyOrders from './Components/Dashboard/MyOrders/MyOrders';
import Review from './Components/Dashboard/Review/Review';
import Ratings from './Components/Dashboard/Ratings/Ratings';
import Payment from './Components/Dashboard/Payment/Payment';
// import AddProduct from './Components/Dashboard/AddProduct/AddProduct';
// import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';



const App = () => {
  return (
    <AuthProvider>
      <Router>
      <Navbar/>
      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/services" exact>
          <Services />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/register" exact>
          <Register/>
        </Route>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <PrivateRoute path="/dashboard" exact>
          <Dashboard/>
        </PrivateRoute>
      
        <PrivateRoute path="/booking/:bookingId" exact>
          <Booking/>
        </PrivateRoute>

        <Route path="/myorders" exact>
          <MyOrders/>
        </Route>
        {/* <Route path="/makeadmin" exact>
          <MakeAdmin/>
        </Route>
        <Route path="/addProduct" exact>
          <AddProduct/>
        </Route> */}
        <Route path="/review" exact>
          <Review/>
        </Route>
        <Route path="/ratings" exact>
          <Ratings/>
        </Route>
        <Route path="/payment" exact>
          <Payment/>
        </Route>
      

      </Switch>
      < Footer/>
    </Router>
    </AuthProvider>
  );
}

export default App;
