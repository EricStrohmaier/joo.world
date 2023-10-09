import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import { About } from "../../pages/About";
import { ProfileLogic } from "../../pages/Profile";

import { Logout } from "../../pages/Logout";
import { Login } from "../../pages/Login";
import Workflow from "../../pages/Workflow/Workflow";
// import CreateTextNote from "../../components/CreateTextNote";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="login" element={<Login />} />
      <Route path="logout" element={<Logout />} />
      <Route path="p/:npub" element={<ProfileLogic />} />
      {/* <Route path="s/:" element={<Profile />} /> */}
      <Route path="about" element={<About />} />
      <Route path="workflows" element={<Workflow />} />
      <Route path="workflows/create" element={<Workflow />} />
    </Routes>
  );
};
