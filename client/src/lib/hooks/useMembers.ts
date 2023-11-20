import { useEffect, useState } from "react";
import { server } from "../axios";
import { useNavigate } from "react-router-dom";
import { MemberI } from "../types";

export const useMembers = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [members, setMembers] = useState<MemberI[]>([]);

  const addMember = async (member: MemberI) => {
    try {
      const response = await server.post("/members", member);
      setMembers((m) => [...m, { ...member, _id: response.data.insertedId }]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    server
      .get("/members")
      .then(({ data }) => setMembers(data))
      .catch(() => {
        setMembers([]);
        navigate("/login");
      })
      .finally(() => setLoading(false));
  }, []);

  return { loading, members, addMember };
};
