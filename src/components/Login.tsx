// Login.tsx

import React from "react";
import { getPubKey } from "../actions/Nostr";

interface LoginProps {
  onLogin: () => void;
  onLogout: () => void;
  isLogged: boolean;
}

const Login: React.FC<LoginProps> = ({ onLogin, onLogout, isLogged }) => {
  const handleLogin = () => {
    getPubKey()
      .then((data) => {
        sessionStorage.setItem("isLogged", "true");
        sessionStorage.setItem("pubkey", `${data}`);
        onLogin();
      })
      .catch((error) => console.log(error));
  };

  const handleLogout = () => {
    // Perform any necessary logout actions
    sessionStorage.clear();
    onLogout();
  };

  return (
    <button
      className="bg-gray-100 text-md mr-2 border-2 border-gray-200 flex justify-center p-3 rounded-[10px] transition duration-100"
      onClick={isLogged ? handleLogout : handleLogin}
    >
      {isLogged ? "Log out" : "Log in with extension"}
    </button>
  );
};

export default Login;
