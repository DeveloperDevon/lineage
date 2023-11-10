import { server } from "../axios";

export const getAuth = async () => {
  try {
    const response = await server.get("/auth");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
