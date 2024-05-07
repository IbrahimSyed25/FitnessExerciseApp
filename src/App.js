import Box from "@mui/material/Box";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExcerciseDetail from "./pages/ExcerciseDetail";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  // Hide navbar when route is '/exercise/:id'
  useEffect(() => {
    const pathname = location.pathname;
    setShowNavbar(!pathname.startsWith("/exercise"));
  }, [location]);
  // console.log(showNavbar);
  return (
    <Box sx={{ width: { xl: "1488px" } }} m="auto">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExcerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
