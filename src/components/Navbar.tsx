import { FC } from "react";

import Button from "./CommonUI/Button";
import Login from "./Login";
import GoToProfileButton from "./CommonUI/ProfileButton";

interface NavigationBarProps {}

const NavigationBar: FC<NavigationBarProps> = () => {
  const isLogged = sessionStorage.getItem("isLogged") === "true";

  const handleLoginSuccess = () => {
    window.location.reload();
  };
  const handleLogout = () => {
    sessionStorage.clear();
    window.location.reload();
  };

  return (
    <div className="w-full fixed top-0 z-50 bg-gray-50">
      <div className="flex justify-center items-center z-10">
        <div className="w-full max-w-6xl flex justify-between p-2">
          <Button
            title={"title"}
            href={"/"}
            style="bg-gray-100 font-bold text-md mr-2 border-2 border-gray-200"
          />
          <div className="flex">
            {isLogged && <GoToProfileButton title="Profile" />}
            <Login
              onLogin={handleLoginSuccess}
              onLogout={handleLogout}
              isLogged={isLogged}
            />{" "}
          </div>
        </div>
      </div>
      <div className="flex border-gray-200 border-b-2 w-full"></div>
    </div>
  );
};

export default NavigationBar;
