import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Planning from "./pages/planning";
import Sign from "./pages/sign";
import QrCode from "./pages/qrCode";

import AuthGuard from "./components/authGuard";

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

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;