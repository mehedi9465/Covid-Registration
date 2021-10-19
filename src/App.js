import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Home/Header/Header';
import Footer from './pages/Home/Footer/Footer';
import Home from './pages/Home/Home/Home';
import Vaccines from './pages/Vaccines/Vaccines';
import VaccineDetails from './pages/Vaccine Details/VaccineDetails';
import Notfound from './pages/Not Found/Notfound';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Private Route/PrivateRoute';
import Injection from './pages/Injection/Injection';
import ServiceDetails from './pages/Home/ServiceDetails/ServiceDetails';
import PatientIsoLation from './pages/PatientIsolation/PatientIsoLation';
import PatientOnlineSupport from './pages/PatientOnlineSupport/PatientOnlineSupport';
import DeliverMedicineToPatient from './pages/Deliver To Patient/DeliverMedicineToPatient';
import ReceiveAmbulance from './pages/Receive Ambulance/ReceiveAmbulance';
import SanitizeProcess from './pages/Sanitize Process/SanitizeProcess';

function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Router>
      <Header></Header>
      <Switch>

        {/* Home */}
        <Route exact path='/'>
          <Home></Home>
        </Route>

        {/* Register */}
        <Route path='/register'>
          <Register></Register>
        </Route>

        {/* Login */}
        <Route path='/login'>
          <Login></Login>
        </Route>

        {/* Dynamic Service Route */}
        <PrivateRoute exact path='/service/:serviceID'>
          <ServiceDetails></ServiceDetails>
        </PrivateRoute>

        {/* Dynamic Vaccine Route */}
        <PrivateRoute exact path='/service/:serviceID/vaccine/:vaccineID'>
          <VaccineDetails></VaccineDetails>
        </PrivateRoute>

        {/* Accepted Vaccination Process */}
        <PrivateRoute path='/service/:serviceID/vaccine/:vaccineID/accept'>
          <Injection></Injection>
        </PrivateRoute>

        {/* Dynamic Isolation accept Route */}
        <PrivateRoute exact path='/service/:serviceID/isolation/confirmed'>
          <PatientIsoLation></PatientIsoLation>
        </PrivateRoute>

        {/* Dynamic Online Support accept Route */}
        <PrivateRoute exact path='/service/:serviceID/onlineSupport/confirmed'>
          <PatientOnlineSupport></PatientOnlineSupport>
        </PrivateRoute>

        {/* Dynamic Delever Medicine accept Route */}
        <PrivateRoute exact path='/service/:serviceID/devliverMedicine/confirmed'>
          <DeliverMedicineToPatient></DeliverMedicineToPatient>
        </PrivateRoute>

        {/* Dynamic Ambulance accept Route */}
        <PrivateRoute exact path='/service/:serviceID/ambulance/confirmed'>
          <ReceiveAmbulance></ReceiveAmbulance>
        </PrivateRoute>

        {/* Dynamic Ambulance accept Route */}
        <PrivateRoute exact path='/service/:serviceID/sanitization/confirmed'>
          <SanitizeProcess></SanitizeProcess>
        </PrivateRoute>
          
        <Route exact path='*'>
          <Notfound></Notfound>
        </Route>
      </Switch>
      </Router>
    </div>
    </AuthProvider>
  );
}

export default App;
