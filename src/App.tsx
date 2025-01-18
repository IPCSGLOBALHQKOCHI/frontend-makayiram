  import { useState,useEffect } from "react";
  import { AllRoutes } from "./AllRoutes";
  import "./App.css";
  import { Footer } from "./Components/Footer/Footer";
  import { Menu } from "./Components/Menu/Menu";
  import { TopBar } from "./Pages/Home/Home";
  import { Toaster } from "react-hot-toast";
  import { useLocation } from "react-router-dom";
  import whatsapp from "../src/assets2/573b1115-821f-4cd1-8012-e16c061439c2.jpg";
  import Loader from "./Pages/Home/Components/Loader/Loader.tsx"

  function App() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 6000);
    
        return () => clearTimeout(timer);
      }, []);
    
      if (loading && isHomePage) {
        return (
          <div className="flex items-center justify-center h-screen bg-white">
            {/* <div className="text-center"> */}
              {/* <h3 className="text-3xl font-semibold flex flex-col justify-center items-center ">Loading...!</h3> */}
              <div className="loader"></div> {<Loader/>}
            {/* </div> */}
          </div>
        );
      }

    return (
      <>
        {!isHomePage && (
          <>
            <TopBar />
            <Menu />
          </>
        )}
        <AllRoutes />
        <a
          href="https://api.whatsapp.com/send/?phone=918138927080&text=I%20am%20interested%20in%20booking%20a%20stay%20at%20your%20property%20Makayiram%20Retreat.%20Please%20contact%20me%20at%20the%20earliest..&phone=+918138927080"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-28 right-1   text-white p-4 rounded-full"
        >
          <img src={whatsapp} className="rounded-full w-24 h-24" />
        </a>
        {!isHomePage && <Footer />}
        <Toaster />
      </>
    );
  }

  export default App;
