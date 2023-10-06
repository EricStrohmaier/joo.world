import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../logic/queries";
import { useMutateUser } from "../logic/mutations";

export const Logout = () => {
  const { pubkey } = useUser();
  const { logout } = useMutateUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (!pubkey) {
      navigate("/", { replace: true });
    } else {
      logout.mutate();
    }
  }, [pubkey, navigate, logout]);

  return <div></div>;
};
