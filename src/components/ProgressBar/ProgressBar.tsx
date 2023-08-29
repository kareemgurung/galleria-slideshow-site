import { useContext } from "react";
import styles from "./progressbar.module.scss";
import ImageContext from "../../context/ImageContext";


const  ProgressBar = () => {
  const ctx = useContext(ImageContext)
  return (
    <>
      <div className={styles.static}></div>
      <div className={styles.dynamic} style={{width: `${ctx.width}%`}}></div>
    </>
  );
};

export default ProgressBar;
