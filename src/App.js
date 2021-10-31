import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddService from './components/AddService/AddService';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import ManageOrders from './components/ManageOrders/ManageOrders';
import MyOrders from './components/MyOrders/MyOrders';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
     <Header></Header>
     <Switch>
     <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/placeOrder/:serviceId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
          <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
          <PrivateRoute path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
          <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <Route path="*">
            <NotFound></NotFound>
          </Route>
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
