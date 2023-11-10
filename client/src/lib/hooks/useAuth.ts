import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { server } from "../axios";

export const useAuth = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState<any>({
    loading: false,
    isAuthorized: false,
    user: "devon",
  });

  useEffect(() => {
    setAuth((a: any) => ({ ...a, loading: true }));
    server
      .get("/auth")
      .then(({ data }) => {
        setAuth({
          loading: false,
          isAuthorized: data.authorized,
          user: data.user,
        });
      })
      .catch(() => {
        navigate("/login", { replace: true });
        setAuth({ loading: false, isAuthorized: false, user: "" });
      });
  }, []);

  return [auth, setAuth];
};
