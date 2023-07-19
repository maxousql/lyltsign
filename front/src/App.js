import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Planning from "./pages/planning";
import Sign from "./pages/sign";
import QrCode from "./pages/qrCode";
import AddUser from "./pages/addUser";
import PageAbsence from "./pages/pageAbsence";
import ProfilePage from "./pages/ProfilePage";
import AuthGuard from "./components/authGuard";
import DocumentationPage from "./pages/DocumentationPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={
          <AuthGuard>
            <Home />
          </AuthGuard>
        } />
        <Route path="/planning" element={<Planning />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/qrcode" element={<QrCode />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/absence" element={<PageAbsence />} />
        <Route path="/profil" element={<ProfilePage />} />
        <Route path="/documentation" element={<DocumentationPage/>}/>
        <Route path="" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;