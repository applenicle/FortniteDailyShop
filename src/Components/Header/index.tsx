import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.inner}>
      <nav className={styles.menu}>
        <ul className={styles.list}>
          <li className={styles.item}>Shop</li>
          <li className={styles.item}>fgffff</li>
        </ul>
      </nav>
      <div className={styles.logo}>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F11%2FSunsilk-Logo-1954-1963.png&f=1&nofb=1"
          alt="Logo"
        />
      </div>
      <nav className={styles.menu}>
        <ul className={styles.list}>
          <li className={styles.item}>fgffff</li>
          <li className={styles.item}>fgffff</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
