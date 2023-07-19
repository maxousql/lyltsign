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
        <Route path="/planning" element={
          <AuthGuard>
            <Planning />
          </AuthGuard>
        } />
        <Route path="/sign" element={
          <AuthGuard>
            <Sign />
          </AuthGuard>
        } />
        <Route path="/qrcode" element={
          <AuthGuard>
            <QrCode />
          </AuthGuard>
        } />
        <Route path="/adduser" element={
          <AuthGuard>
            <AddUser />
          </AuthGuard>
        } />
        <Route path="/absence" element={
          <AuthGuard>
            <PageAbsence />
          </AuthGuard>
        } />
        <Route path="/profil" element={
          <AuthGuard>
            <ProfilePage />
          </AuthGuard>
        } />
        <Route path="/doc" element={
          <AuthGuard>
            <DocumentationPage />
          </AuthGuard>
        } />

        <Route path="*" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;