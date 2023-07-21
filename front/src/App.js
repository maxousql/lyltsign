/* Le code importe divers modules et composants à partir de différents fichiers. */
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

/**
 * La fonction App renvoie un ensemble d'itinéraires pour différentes pages de l'application Web, avec
 * des protections d'authentification appliquées à certains itinéraires.
 * @returns Le composant App renvoie un élément JSX qui inclut un composant BrowserRouter de React
 * Router. À l'intérieur du composant BrowserRouter, il existe un composant Routes qui contient
 * plusieurs composants Route. Chaque composant Route a un accessoire de chemin qui spécifie le chemin
 * de l'URL et un accessoire d'élément qui spécifie le composant à rendre lorsque le chemin correspond
 * à l'URL actuelle. Les composants rendus incluent Login, Home, Planning, Sign, QrCode,
 */

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