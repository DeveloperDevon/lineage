import { useEffect, useState } from "react";
import { server } from "../axios";

export const useAuth = () => {
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
      .catch(() => setAuth({ loading: false, isAuthorized: false, user: "" }));
  }, []);

  return [auth, setAuth];
};
