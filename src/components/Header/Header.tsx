import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./header.module.scss";

const Header = () => {
  const navigate = useNavigate();
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
        <Button
          text="start slideshow"
          type="button"
          onClick={() => navigate("/test")}
        />
      </nav>
      <hr />
    </header>
  );
};

export default Header;
