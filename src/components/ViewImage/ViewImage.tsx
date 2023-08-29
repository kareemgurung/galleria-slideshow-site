import styles from "./viewimage.module.scss";

interface ViewImageProps {
  onClick: () => void;
}

const ViewImage: React.FC<ViewImageProps> = ({ onClick }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <img src="../../../images/shared/icon-view-image.svg" alt="" />
      View image
    </div>
  );
};

export default ViewImage;
