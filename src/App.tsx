import "./App.css";
import Home from "../src/pages/Home";
import ForgetPassword from "../src/pages/ForgetPassword";
import Navbar from "./component/Navbar";
import Offers from "../src/pages/Offers";
import Profile from "../src/pages/Profile";
import SignIn from "../src/pages/SignIn";
import SignUp from "../src/pages/SignUp";
import Header  from '../src/component/Header'
import Slider from '../src/component/Slider'
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Header/>
      <Slider/>
      {/* <SignIn/> */}
      <SignUp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
      </Routes>
    </>
  );
}

export default App;
