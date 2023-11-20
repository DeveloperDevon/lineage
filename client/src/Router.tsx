import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as Pages from "./pages";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Pages.LoginPage />,
  },
  {
    path: "/",
    element: <Pages.HomePage />,
  },
  {
    path: "/member/:memberId",
    element: <Pages.MemberPage />,
  },
  {
    path: "/members",
    element: <Pages.ManageMembersPage />,
  },
]);

export const Router = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <RouterProvider router={router} />
    </div>
  );
};
