import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalUser } from "../logic/contextStore/UserContext";

export const Logout = () => {
  const { logout } = useLocalUser();
  const navigate = useNavigate();


  useEffect(() => {
    logout();
    console.log("You are not really Logged out");
    navigate("/");
  });

  return <div></div>;
};
