import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import Education from "./components/Education";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        
        {/* bg-gradient-to-r from-yellow-400 via-pink-250 to-pink-400 */}
        <div className=" bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <div className="bg-gradient-to-r from-yellow-400 via-pink-250 to-pink-400">
          {/* <svg width="1000" height="NaN" xmlns="http://www.w3.org/2000/svg"><rect width="1000" height="NaN" fill="#f5869c"/>
          </svg> */}
          <About />
          <Education />
          <Experience />
          <Tech />
          <Works />
        </div>

        <div className="relative z-0">
          {/* 3d star object  */}
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
