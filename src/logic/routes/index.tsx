import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import { About } from "../../pages/About";
import { Profile } from "../../pages/Profile";

import { Logout } from "../../pages/Logout";
import { Login } from "../../pages/Login";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="logout" element={<Logout />} />
      <Route path="p/:npub" element={<Profile />} />
      {/* <Route path="s/:" element={<Profile />} /> */}
      <Route path="about" element={<About />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
