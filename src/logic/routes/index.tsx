import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import { About } from "../../pages/About";
import { ProfileLogic } from "../../pages/ProfileLogic";

import { Logout } from "../../pages/Logout";
import { Login } from "../../pages/Login";
import Workflow from "../../pages/Workflow";

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
    </Routes>
  );
};
