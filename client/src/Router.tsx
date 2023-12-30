import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as Layouts from './layout'
import * as Pages from "./pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Layouts.AuthLayout />}>
          <Route path='login' element={<Pages.LoginPage />} />
        </Route>
        <Route path='/' element={<Layouts.DefaultLayout />}>
          <Route path='/' element={<Pages.HomePage />} />
          <Route path='/comments' element={<Pages.CommentsPage />} />
          <Route path='/members' element={<Pages.ManageMembersPage />} />
          <Route path='/member/:memberId' element={<Pages.MemberPage />} />
          <Route path='/photos' element={<Pages.PhotosPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
