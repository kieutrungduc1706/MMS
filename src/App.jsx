import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./page/Home/Home";
import Details from "./page/Details/Details";
import Login from "./page/LoginForm/Login";
import TopBar from "./components/TopBar/Navbar";
import { Profile } from "./page";


// import your route components too
function App() {
  return (
    <>
      <BrowserRouter basename="/">
      {/* <TopBar/> */}
        <Routes >
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/details"  element={<Details />} />
          <Route path="/Profile"  element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;