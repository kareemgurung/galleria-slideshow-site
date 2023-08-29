import { useContext } from "react";
import styles from "./lightbox.module.scss";
import ImageContext from "../../context/ImageContext";

interface LightBoxProps {
  image: string;
  name: string;
}

const LightBox: React.FC<LightBoxProps> = ({ image, name }) => {
    const ctx = useContext(ImageContext)
  return (
    <div className={styles.container}>
      <div>
        <button type="button" onClick={ctx.closeModal}>close</button>
        <img src={image} alt={name} aria-label={name} />
      </div>
    </div>
  );
};

export default LightBox;
