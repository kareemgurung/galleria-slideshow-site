import styles from "./footer.module.scss";

interface FooterProps {
  artName: string;
  artistName: string;
}

const Footer: React.FC<FooterProps> = ({ artName, artistName }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__name}>
        <h2>{artName}</h2>
        <p>{artistName}</p>
      </div>
      <div className={styles.container__nextprev}>
        <button>
          <img src="./assets/shared/icon-back-button.svg" alt="back button" />
        </button>
        <button>
          <img src="./assets/shared/icon-next-button.svg" alt="back button" />
        </button>
      </div>
    </div>
  );
};

export default Footer;