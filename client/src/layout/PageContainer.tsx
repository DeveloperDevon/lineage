import { useEffect } from "react";
import { AppBar } from "./AppBar.tsx";
import { useAuth } from "../lib/hooks/useAuth.ts";

export const PageContainer: React.FC<any> = ({ children }) => {
  const [auth] = useAuth();

  return (
    <div>
      <AppBar />
      {JSON.stringify(auth)}
      {children}
    </div>
  );
};
