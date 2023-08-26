import styles from "./main.module.scss";
import items from "../../data.json";
import Card from "../Card/Card";

const Main = () => {
  return (
    <main className={styles.container}>
      {items.map((item) => {
        return (
          <Card
            key={item.id}
            image={item.images.thumbnail}
            artName={item.name}
            artistName={item.artist.name}
          />
        );
      })}
    </main>
  );
};

export default Main;
