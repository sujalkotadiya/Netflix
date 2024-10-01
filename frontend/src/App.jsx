import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import HomePage from "./Pages/home/HomePage";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import HomeScreen from "./Pages/home/HomeScreen";

export default function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/HomeScreen" element={<HomeScreen />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}