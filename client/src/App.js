import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
const HomePage = lazy(() => import("./pages/HomePage"));
const UserPage = lazy(() => import("./pages/UserPage"));
const GroupPage = lazy(() => import("./pages/GroupPage"));
const UserProfile = lazy(() => import("./components/UserProfile"));

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <Suspense fallback={'Loading....'}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/groups" element={<GroupPage />} />
          <Route path="/users/:idUser" element={<UserProfile />} />
          {/* <Route path="/tasks" element={<TaskPage />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
