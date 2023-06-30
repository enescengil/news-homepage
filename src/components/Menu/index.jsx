import "../../styles/_variables.scss";
import styles from "./menu.module.scss";
import { ReactComponent as Close } from "../../assets/images/icon-menu-close.svg";

export default function index(props) {
  return (
    <div
      className={
        props.menu ? `${styles.wrapper} ${styles.active} ` : styles.wrapper
      }
    >
      <div
        className={styles.overlay}
        onClick={() => props.setMenu(false)}
      ></div>
      <div className={styles.menu}>
        <div className={styles.close}>
          <Close onClick={() => props.setMenu(false)} />
        </div>
        <nav>
          <span>Home</span>
          <span>New</span>
          <span>Popular</span>
          <span>Trending</span>
          <span>Categories</span>
        </nav>
      </div>
    </div>
  );
}
