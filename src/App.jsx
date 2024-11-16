import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Property from "./Pages/Property/Property";
import Documents from "./Pages/Documents/Documents";
import Maintainence from "./Pages/Maintainence/Maintainence";
import Login from "./Pages/Login/Login";
import Create, { CreateAction } from "./Pages/Create/Create";
import Footer from "./Components/Footer/Footer";

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
        <Route
          path="/property"
          element={<Property/>}
        />
        <Route
          path="/documents"
          element={<Documents/>}
        />
        <Route
          path="/create"
          element={<Create/>}
        />
        <Route
          path="/maintainence"
          element={<Maintainence/>}
        />
        <Route
          path="/login"
          element={<Login/>}
        />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
