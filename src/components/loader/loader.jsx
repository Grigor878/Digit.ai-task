import spinner from "../../assets/imgs/spiner.gif";
import styles from "./loader.module.scss";

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <img src={spinner} alt="Loading..." />
    </div>
  );
};
