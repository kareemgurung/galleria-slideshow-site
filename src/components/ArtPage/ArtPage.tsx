import { Link } from "react-router-dom";
import styles from "./artpage.module.scss";
import Footer from "../Footer/Footer";

const ArtPage = () => {
  const art = {
    name: "Starry Night",
    year: 1889,
    description:
      'Although The Starry Night was painted during the day in Van Gogh\'s ground-floor studio, it would be inaccurate to state that the picture was painted from memory. The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. "Through the iron-barred window," he wrote to his brother, Theo, around 23 May 1889, "I can see an enclosed square of wheat ... above which, in the morning, I watch the sun rise in all its glory."',
    source: "https://en.wikipedia.org/wiki/The_Starry_Night",
    artist: {
      image: "./assets/starry-night/artist.jpg",
      name: "Vincent Van Gogh",
    },
    images: {
      thumbnail: "./assets/starry-night/thumbnail.jpg",
      hero: {
        small: "./assets/starry-night/hero-small.jpg",
        large: "./assets/starry-night/hero-large.jpg",
      },
      gallery: "./assets/starry-night/gallery.jpg",
    },
  };
  return (
    <>
      <section className={styles.container}>
        <div className={styles.container__title}>
          <picture className={styles.image}>
            <source media="(min-width:650px)" srcSet={art.images.hero.large} />
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
    </>
  );
};

export default ArtPage;
