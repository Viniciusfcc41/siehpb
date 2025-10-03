import { useState } from "react";
import style from "./navbar.module.css";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.body}>
      <img src="/logo.png" className={style.logo} />

      {/* Menu normal (desktop) */}
      <ul className={style.navbarOptions}>
       <a href="/"> <li className={style.navbarItem}>Programação</li></a>
       <a href="/convidados"> <li className={style.navbarItem}>Convidados</li></a>
      </ul>

      {/* Botão hambúrguer (mobile) */}
      <div className={style.hamburger} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu lateral (mobile) */}
      <div className={`${style.sideMenu} ${open ? style.open : ""}`}>
        <ul>
          <a href="/"> <li className={style.navbarItem}>Programação</li></a>
       <a href="/convidados"> <li className={style.navbarItem}>Convidados</li></a>
        </ul>
      </div>

      {/* Overlay escuro */}
      {open && <div className={style.overlay} onClick={() => setOpen(false)} />}
    </div>
  );
};
