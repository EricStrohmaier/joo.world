import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../logic/contextStore/UserContext";

export const Logout = () => {
  const { logout } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    console.log("You are Logged out");
    navigate("/");
  }, []);

  return <div></div>;
};
