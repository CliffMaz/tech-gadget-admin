import "./App.css";
import Customer from "./components/body/customers/Customer";
import Dashboard from "./components/body/dashboard/Dashboard";
import Orders from "./components/body/orders/Orders";
import Header from "./components/header/Header";
import Sales from "./components/body/sales/Sales";
import SideBar from "./components/sideBar/SideBar";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Settings from "./components/body/settings/Settings";

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
                <Route path="/" element={<Dashboard />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/customers" element={<Customer />} />
                <Route path="/sales" element={<Sales />} />
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
