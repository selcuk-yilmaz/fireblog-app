import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
function App() {
  return(
  <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />

    </Routes>
    </BrowserRouter>
  </>
  )
}

export default App;
