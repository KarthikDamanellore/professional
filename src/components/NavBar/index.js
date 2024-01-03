import React from 'react';
import { hambergericon, navbarlogo } from 'resources/Images';
import Button from 'components/Button';
import styles from './styles.module.css';

const NavBar = () => {
  return (
    <div className={styles.navBarMainContainer}>
      <div className={styles.navBarInsideContainer}>
        <div className={styles.navbarLogoLeft}>
          <img
            src={navbarlogo}
            alt="navbarlogo"
            className={styles.imageWidth}
          />
        </div>
        <div className={styles.navbarMenuItemsRight}>
          <p className={styles.navBarMenuItem}>Home</p>
          <p className={styles.navBarMenuItem}>Blog</p>
          <p className={styles.navBarMenuItem}>About Us</p>
          <p className={styles.navBarMenuItem}>Contact us</p>
          <Button btName="Subscribe" btnStyles={styles.subscribeBtnStyles} />
        </div>
        <div className={styles.hambergerIconImgBlock}>
          <img src={hambergericon} alt="" className={styles.imageWidth} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
