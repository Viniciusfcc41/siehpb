import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./navbar.module.css";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className={style.body}>
      <img src="/logo.png" className={style.logo} />

      {/* Menu desktop */}
      <ul className={style.navbarOptions}>
        <li>
          <Link
            to="/"
            className={`${style.navbarItem} ${
              location.pathname === "/" ? style.active : ""
            }`}
          >
            Programação
          </Link>
        </li>
        <li>
          <Link
            to="/convidados"
            className={`${style.navbarItem} ${
              location.pathname === "/convidados" ? style.active : ""
            }`}
          >
            Convidados
          </Link>
        </li>
        <li>
          <Link
            to="/trabalhos"
            className={`${style.navbarItem} ${
              location.pathname === "/trabalhos" ? style.active : ""
            }`}
          >
            Trabalhos
          </Link>
        </li>
      </ul>

      {/* Botão hambúrguer */}
      <div className={style.hamburger} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu mobile */}
      <div className={`${style.sideMenu} ${open ? style.open : ""}`}>
        <ul>
          <li>
            <Link
              to="/"
              className={`${style.navbarItem} ${location.pathname === "/" ? style.active : ""}`}onClick={() => setOpen(false)}>
              Programação</Link>
          </li>
          <li>
            <Link to="/convidados"
              className={`${style.navbarItem} ${location.pathname === "/convidados" ? style.active : "" }`}onClick={() => setOpen(false)}>
              Convidados</Link>
          </li>
          <li>
            <Link to="/trabalhos"
              className={`${style.navbarItem} ${location.pathname === "/trabalhos" ? style.active : "" }`}onClick={() => setOpen(false)}>
              Trabalhos</Link>
          </li>
        </ul>
      </div>


      {open && <div className={style.overlay} onClick={() => setOpen(false)} />}
    </div>
  );
};
