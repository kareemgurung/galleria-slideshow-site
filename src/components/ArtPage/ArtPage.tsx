import { Link, useParams } from "react-router-dom";
import styles from "./artpage.module.scss";
import Footer from "../Footer/Footer";
import items from "../../data.json";
import ViewImage from "../ViewImage/ViewImage";
import LightBox from "../Lightbox/LightBox";
import ImageContext from "../../context/LightBoxContext";
import { useContext } from "react";

type ArtParams = {
  artId: string;
};

const ArtPage = () => {
  const { artId } = useParams<ArtParams>();
  const ctx = useContext(ImageContext);

  const art = items.find((item) => item.id === artId);

  if (!art) {
    return <div>Art Page not found</div>;
  }

  return (
    <>
      <section className={styles.container}>
        <div className={styles.container__title}>
          <ViewImage onClick={ctx.openModal} />
          <picture className={styles.image}>
            <source media="(min-width:768px)" srcSet={art.images.hero.large} />
            <img
              src={art.images.hero.small}
              alt={art.name}
              aria-label={art.name}
            />
          </picture>
          <div className={styles.floater}>
            <div className={styles.name}>
              <h2>{art.name}</h2>
              <p>{art.artist.name}</p>
            </div>
            <img
              src={art.artist.image}
              alt={art.artist.name}
              className={styles.artistImage}
            />
          </div>
        </div>
        <div className={styles.container__desc}>
          <span className={styles.year}>{art.year}</span>
          <p>{art.description}</p>
          <Link to={art.source} className={styles.link}>
            go to source
          </Link>
        </div>
      </section>
      <Footer artName={art.name} artistName={art.artist.name} />
      {ctx.modalState && (
        <LightBox image={art.images.gallery} name={art.name} />
      )}
    </>
  );
};

export default ArtPage;
