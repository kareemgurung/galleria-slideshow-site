import { Link } from "react-router-dom";
import styles from "./card.module.scss";

interface CardProps {
  id: string;
  image: string;
  artName: string;
  artistName: string;
}

const Card: React.FC<CardProps> = ({ id, image, artName, artistName }) => {
  const imageRender = image
  return (
    <Link to={`/art/${id}`} className={styles.container}>
        <div className={styles.gradient}></div>
      <div className={styles.desc}>
        <h2>{artName}</h2>
        <p>{artistName}</p>
      </div>
      <img src={imageRender} alt={artName} aria-label={artName} />
    </Link>
  );
};

export default Card;
