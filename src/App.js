import "./App.css";
import Customers from "./components/body/customers/Customers";
import Dashboard from "./components/body/dashboard/Dashboard";
import Orders from "./components/body/orders/Orders";
import Header from "./components/header/Header";
import Sales from "./components/body/sales/Sales";
import SideBar from "./components/sideBar/SideBar";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Settings from "./components/body/settings/Settings";
import Login from "./components/Login";
import Products from "./components/body/products/Products";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <div className="nav">
            <Header />
          </div>
          <div className="wrapper">
            <div className="wrapper-sideBar">
              <SideBar />
            </div>
            <div className="wrapper-content">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/products" element={<Products />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
