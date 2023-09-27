import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Cases from "./pages/Portfolio/Cases";
// import Partners from "./pages/Partners/Partners";
// import Button from "./components/ButtonComb/Button";
// import Contact from "./pages/Contact/Contact";
// import Branches from "./pages/Branches/Branches";
// import Careers from "./pages/Careers/Careers";
// import About from "./pages/About/About";
// import For from "./pages/For/For";
// import Branches from "./pages/Branches";
// import Job from "./components/Jobs/Job";
// import Freelancers from "./Freelancers";
// import ITCompanies from "./pages/ITCompanies";
// import Home from './pages/Home/Home';
// import Global from "./pages/Global";
// import Employees from "./pages/Team/Employees";
// import CarouselParent from "./pages/CarouselParent";
// import About from './pages/About/About'
// import Directions from './pages/Directions/Directions'
import AllCases from './pages/AllCases/AllCases'
// import Testimonials from "./pages/Testimonials/Testimonials";
import Pages from './pages/index';
import AllVacancies from "./pages/AllVacancies/AllVacancies";
import Sidebar from './components/AdminSidebar/Sidebar';
import Home from "./pages/Admin/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/allCases" element={<AllCases/>}/>
          <Route path="/allVacancies" element={<AllVacancies/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
