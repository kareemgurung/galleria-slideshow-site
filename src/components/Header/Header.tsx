import { NavLink, useLocation } from "react-router-dom";
import styles from "./header.module.scss";

const Header = () => {
  const location = useLocation();
  const isSlideShow = location.pathname.startsWith("/art");

  return (
    <header className={styles.container}>
      <nav>
        <NavLink to="/">
          <img
            src="../../../images/shared/logo.svg"
            alt="galleria logo"
            aria-label="galleria logo"
          />
        </NavLink>
        <NavLink className={styles.link} to={isSlideShow ? "/" : "/art/1"}>
          {isSlideShow ? "stop slideshow" : "start slideshow"}
        </NavLink>
      </nav>
      <hr />
    </header>
  );
};

export default Header;
