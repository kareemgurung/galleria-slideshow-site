import { useContext } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./footer.module.scss";
import ImageContext from "../../context/ImageContext";

interface FooterProps {
  artName: string;
  artistName: string;
}

const Footer: React.FC<FooterProps> = ({ artName, artistName}) => {
  const ctx = useContext(ImageContext);

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.container__name}>
          <h2>{artName}</h2>
          <p>{artistName}</p>
        </div>
        <div className={styles.container__nextprev}>
          <button onClick={ctx.prevPage} disabled={ctx.firstPage}>
            <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#000" fill="none" fillRule="evenodd" opacity={ctx.firstPage ? "0.15": "1"}>
                <path
                  d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z"
                  strokeWidth="2"
                />
                <path fill="#D8D8D8" d="M.986.5h-1v22.775h1z" />
              </g>
            </svg>
          </button>
          <button onClick={ctx.nextPage} disabled={ctx.lastPage}>
            <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#000" fill="none" fillRule="evenodd" opacity={ctx.lastPage ? "0.15": "1"}>
                <path
                  d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z"
                  strokeWidth="2"
                />
                <path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z" />
              </g>
            </svg>
          </button>
        </div>
      </div>
      <ProgressBar/>
    </div>
  );
};

export default Footer;
