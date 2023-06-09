import "./App.css";
import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav">
          <SideBar />
          <Header />
        </div>
        <div></div>

        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
