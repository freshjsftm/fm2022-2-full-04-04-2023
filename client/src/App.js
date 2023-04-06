import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import GroupPage from "./pages/GroupPage";
import NavMenu from "./components/NavMenu";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/groups" element={<GroupPage />} />
        <Route path="/users/:idUser" element={<UserProfile />} />
        {/* <Route path="/tasks" element={<TaskPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
