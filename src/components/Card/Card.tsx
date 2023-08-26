import { Link } from "react-router-dom";
import styles from "./card.module.scss";

interface CardProps {
  image: string;
  artName: string;
  artistName: string;
}

const Card: React.FC<CardProps> = ({ image, artName, artistName }) => {
  return (
    <Link to="/" className={styles.container}>
      <div className={styles.desc}>
        <h2>{artName}</h2>
        <p>{artistName}</p>
      </div>
      <img src={image} alt={artName} aria-label={artName} />
    </Link>
  );
};

export default Card;
