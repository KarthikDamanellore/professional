import React from 'react';
import { navbarlogo } from 'resources/Images';
import Input from 'components/Input';
import Button from 'components/Button';
import styles from './styles.module.css';
import { SocialMediaData } from 'constants/CardData/CardData';

const Footer = () => {
  const footerTopSection = () => {
    return (
      <div className={styles.footerTopSectionContainer}>
        <div className={styles.footerTopSectionRightLogo}>
          <img
            src={navbarlogo}
            alt="footerlogo"
            className={styles.imageWidth}
          />
        </div>
        <div className={styles.footerTopSectionLeftMenuItems}>
          <p className={styles.footerLeftMenuItem}>Home</p>
          <p className={styles.footerLeftMenuItem}>Blog</p>
          <p className={styles.footerLeftMenuItem}>About us</p>
          <p className={styles.footerLeftMenuItem}>Contact us</p>
          <p className={styles.footerLeftMenuItem}>Privacy Policy</p>
        </div>
      </div>
    );
  };
  const footerMiddleSection = () => {
    return (
      <div className={styles.footerMiddleSectionContainer}>
        <div className={styles.footerMiddleSectionRightDescBlock}>
          <p className={styles.footerMiddleSectionRightDes}>
            Subscribe to our news letter to get latest updates and news
          </p>
        </div>
        <div className={styles.footerMiddleSectionLeftInputButtonBlock}>
          <div className={styles.footerInputContainer}>
            <Input
              type="text"
              placeholder="Enter Your Email"
              className={styles.footerInput}
            />
          </div>
          <Button btName="Subscribe" btnStyles={styles.footerBtnStyles} />
        </div>
      </div>
    );
  };
  const footerBottomSection = () => {
    return (
      <div className={styles.footerBottomContainer}>
        <div className={styles.footerBottomLeftBlock}>
          <p className={styles.footerBottomLeftBlockDescOne}>
            Finstreet 118 2561 Fintown
            <p className={styles.footerBottomLeftBlockDescTwo}>
              Hello@finsweet.com 020 7993 2905
            </p>
          </p>
        </div>
        <div className={styles.footerBottomRightBlock}>
          {SocialMediaData &&
            SocialMediaData.map((item, index) => {
              return (
                <div className={styles.socialMediaImgBlock}>
                  <img
                    src={item.socialMediaIcon}
                    alt={item.alt}
                    className={styles.imageWidth}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  };
  return (
    <div className={styles.footerMainContainer}>
      <div className={styles.footerInsideContainer}>
        <div className={styles.footerTopAndMiddleSectionContainer}>
          {footerTopSection()}
          {footerMiddleSection()}
        </div>
        <div className={styles.footerBottomSectionContainer}>
          {footerBottomSection()}
        </div>
      </div>
    </div>
  );
};

export default Footer;
