import styles from "./Navbar.module.css";

function Navbar() {

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div>
          <h1 className={styles.navbar__brand}>Covid ID</h1>
        </div>
        <div>
          <ul className={styles.navbar__list}>
            <li>Global</li>
            <li>Indonesia</li>
            <li>Province</li>
            <li>About</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
