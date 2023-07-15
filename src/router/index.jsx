import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import StoresPage from "../pages/StoresPage";
import { PATHS } from "./paths";

const Router = () => {
  
    return (
      <>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path={PATHS.ABOUT} element={<About />} />
          <Route path={PATHS.STORES.ROOT} element={<Outlet />}>
            <Route index element={<StoresPage />} />
            <Route path={PATHS.STORES.VIEW} element={<PostPage />} />
            <Route path={PATHS.STORES.EDIT} element={<EditPostPage />} />
            <Route path={PATHS.STORES.CREATE} element={<CreatePostPage />} />
          </Route>

          <Route
            path={PATHS.ERRORS.NOT_FOUND}
            element={<H1>Page not found 404</H1>}
          />

          <Route
            path="*"
            element={<Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />}
          />
        </Routes>
      </>
    );
  }
export default Router
