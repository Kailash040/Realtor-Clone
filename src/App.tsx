import "./App.css";
import Home from "../src/pages/Home";
import ForgetPassword from "../src/pages/ForgetPassword";

import Profile from "../src/pages/Profile";
import SignIn from "../src/pages/SignIn";
import SignUp from "../src/pages/SignUp";

import { Route, Routes } from "react-router-dom";
import AboutUs from "./component/AboutUs";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/about" element={<AboutUs />} />

      </Routes>
    </>
  );
}

export default App;
