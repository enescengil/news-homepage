import styles from "./navbar.module.scss";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as MenuIcon } from "../../assets/images/icon-menu.svg";

export default function Navbar(props) {
  return (
    <div className={styles.header}>
      <div className={styles.logo_wrapper}>
        <Logo />
      </div>
      <nav>
        <span>Home</span>
        <span>New</span>
        <span>Popular</span>
        <span>Trending</span>
        <span>Categories</span>
      </nav>
      <div className={styles.menu_btn}>
        <MenuIcon
          onClick={() => {
            props.setMenu(true);
          }}
        />
      </div>
    </div>
  );
}
