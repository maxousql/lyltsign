import React, { useEffect, useRef } from 'react';
import logo from '../img/test.png';
import userIcon from '../img/user.png';
import '../styles/navBar.css';

import { useNavigate, Link } from 'react-router-dom';
import { accountService } from '../services/accountService';

const Navigation = () => {
  let navigate = useNavigate();

  const hamburgerTogglerRef = useRef(null);
  const navLinksContainerRef = useRef(null);

  useEffect(() => {
    const toggleNav = () => {
      const hamburgerToggler = hamburgerTogglerRef.current;
      const navLinksContainer = navLinksContainerRef.current;

      if (hamburgerToggler && navLinksContainer) {
        hamburgerToggler.classList.toggle("open");
        const ariaToggle = hamburgerToggler.getAttribute("aria-expanded") === "true" ? "false" : "true";
        hamburgerToggler.setAttribute("aria-expanded", ariaToggle);
        navLinksContainer.classList.toggle("open");
      }
    };

    const hamburgerToggler = hamburgerTogglerRef.current;
    if (hamburgerToggler) {
      hamburgerToggler.addEventListener("click", toggleNav);
    }

    const resizeObserver = new ResizeObserver(entries => {
      const navLinksContainer = navLinksContainerRef.current;
      if (navLinksContainer) {
        if (entries[0].contentRect.width <= 900) {
          navLinksContainer.style.transition = "transform 0.3s ease-out";
        } else {
          navLinksContainer.style.transition = "none";
        }
      }
    });

    resizeObserver.observe(document.body);

    return () => {
      if (hamburgerToggler) {
        hamburgerToggler.removeEventListener("click", toggleNav);
      }
      resizeObserver.disconnect();
    };
  }, []);

  const logout = () => {
    accountService.logout()
    navigate("/login")
  }

  return (
    <nav>
      <a href="/" className="nav-icon" aria-label="visit homepage" aria-current="page">
        <span>LYLT</span>
        <img src={logo} alt="pizza icon" />
        <span>SIGN</span>
      </a>

      <div className="main-navlinks">
        <button className="hamburger" type="button" aria-label="toggle navigation" aria-expanded="false" ref={hamburgerTogglerRef}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="navlinks-container" ref={navLinksContainerRef}>
          <a href="/"><Link to="/home">Accueil</Link></a>
          <a href="/"><Link to="/planning">Planning</Link></a>
          <a href="/"><Link to="/absence">Absences</Link></a>
          <a href="/"><Link to="/qrcode">QRCODE</Link></a>
          <a href="/"><Link to="/sign">Signature</Link></a>
          <a href="/"><Link to="/doc">Documentation</Link></a>
          <a href="/"><Link to="/profil">Profil</Link></a>
        </div>
      </div>

      <div className="nav-authentication">
        <a href="/" className="sign-user" aria-label="Sign in page">
          <img src={userIcon} alt="user-icon" />
        </a>
        <div className="sign-btns">
          <button type="button" onClick={logout}>Déconnexion</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
