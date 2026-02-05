import { Routes, Route } from "react-router-dom";
import Home from "../pages/Auth/Home";
import Login from "../pages/Auth/Login";
import ClientRegister from "../pages/Auth/ClientRegister";
import PrestataireRegister from "../pages/Auth/PrestataireRegister";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import VerifyCode from "../pages/Auth/VerifyCode";
import ResetPassword from "../pages/Auth/ResetPassword";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/PrestataireRegister" element={<PrestataireRegister />} />
    <Route path="/ClientRegister" element={<ClientRegister />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/verify-code" element={<VerifyCode />} />
    <Route path="/reset-password" element={<ResetPassword />} />
  </Routes>
);

export default AppRoutes;
