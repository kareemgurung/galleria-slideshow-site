import Button from "../Button/Button";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <div>
        <img
          src="./assets/shared/logo.svg"
          alt="galleria logo"
          aria-label="galleria logo"
        />
        <Button
          text="start slideshow"
          type="button"
          onClick={() => console.log("start slide show")}
        />
      </div>
      <hr />
    </header>
  );
};

export default Header;
