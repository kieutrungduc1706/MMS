import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./page/Home/Home";
import Details from "./page/Details/Details";


// import your route components too
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/Details"  element={<Details />} />
          {/* <Route path="/News" element={<News />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;