import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { server } from "../axios";
import { MemberI } from "../types";

export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [member, setMember] = useState<MemberI | null>(null);
  const [authorized, setAuthorized] = useState(false);

  const login = async (user: Partial<MemberI>) => {
    const response = await server.post("/auth/login", user);
    const { verified } = response.data;
    if (verified)
      navigate(`/member/${response.data.member._id}`, { replace: true });
  };

  useEffect(() => {
    setLoading(true);
    server
      .get("/auth")
      .then(({ data }) => {
        setMember(data.member);
        setAuthorized(data.authorized);
      })
      .catch((e) => {
        navigate("/login", { replace: true });
        setAuthorized(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { loading, member, authorized, login, setAuthorized };
};
