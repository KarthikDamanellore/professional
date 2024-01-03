import React from 'react';
import NavBar from 'components/NavBar';
import Button from 'components/Button';
import styles from './styles.module.css';
import { FeaturesPostData } from 'constants/CardData/CardData';
import { featurepostimage } from 'resources/Images';
const Home = () => {
  const bannerSection = () => {
    return (
      <div className={styles.bannerMainContainer}>
        <div className={styles.bannerInsideContainer}>
          <div className={styles.bannerInfoBlockOne}>
            <p className={styles.bannerInfoHeading}>
              Posted &nbsp; on &nbsp;
              <span className={styles.bannerInfoSubDesc}>startup</span>
            </p>
            <h1 className={styles.bannerInfoMainHeading}>
              Step-by-step guide to choosing great font pairs
            </h1>
            <p className={styles.bannerInfoSubHeading}>
              By &nbsp;
              <span className={styles.bannerInfoSubHeadingDesc}>
                James West
              </span>
              &nbsp; | May 23, 2022
            </p>
          </div>
          <div className={styles.bannerInfoBlockTwo}>
            <p className={styles.bannerInfoBlockTwoHeading}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <Button btName="Read More >" btnStyles={styles.bannerBtnStyles} />
          </div>
        </div>
      </div>
    );
  };

  const featurePostSection = () => {
    return (
      <div className={styles.featuresPostContainer}>
        <div className={styles.featuresPostLeftBlock}>
          <div className={styles.featuresPostHeadingBlock}>
            <p className={styles.featuresPostHeading}>Featured Post</p>
          </div>
          <div className={styles.featuresPostDescAndImgBlock}>
            <div className={styles.featuresPostDescAndSubHeadingBlock}>
              <div className={styles.featurePostImgBlock}>
                <img
                  src={featurepostimage}
                  className={styles.featurePostImageWidth}
                />
              </div>
              <p className={styles.featurePostDesc}>
                By <span className={styles.featurePostSubDesc}>John Doe</span> l
                May 23, 2022
              </p>
            </div>
            <div className={styles.featuresPostDescBlockTwo}>
              <div className={styles.featuresPostInfo}>
                <p className={styles.featuresInfoDescOne}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
                <p className={styles.featuresInfoDescTwo}>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
              </div>
              <div className={styles.featuresPostBtnBlock}>
                <Button
                  btName="Read More >"
                  btnStyles={styles.bannerBtnStyles}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.featuresPostRightBlock}>
          <div className={styles.featuresPostRightTitleInfo}>
            <h5 className={styles.featuresPostFitleInfoHeading}>All Posts</h5>
            <p className={styles.featuresPostTitleDesc}>View All</p>
          </div>
          <div className={styles.featuresRightBlockDeatils}>
            {FeaturesPostData &&
              FeaturesPostData.map((item, index) => {
                return (
                  <div key={index} className={styles.featuresPostDescContainer}>
                    <p className={styles.featuresPostRightBlockHeading}>
                      <span>{item.featuresPostRightBlockSubDescOne}</span>
                      <span className={styles.featurePostRightBlockSubDesc}>
                        {item.featurePostRightBlockSubDesc}
                      </span>
                      {item.featuresPostRightBlockHeading}
                    </p>
                    <p className={styles.featuresPostRightBlockDesc}>
                      {item.featuresPostRightBlockDesc}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  };
  const aboutUsSection = () => {
    return (
      <div className={styles.aboutContainer}>
        <div className={styles.aboutColorsBlock}></div>
        <div className={styles.aboutDescriptionBlock}>
          <div className={styles.aboutDescriptionLeftBlock}>
            <div className={styles.aboutDescriptionLeftInfoTop}>
              <p className={styles.aboutLeftHeading}>ABOUT US</p>
              <p className={styles.aboutLeftDesc}>
                We are a community of content writers who share their learnings
              </p>
            </div>
            <div className={styles.aboutDescriptionLeftInfoBottom}>
              <p className={styles.aboutLeftDescBottom}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className={styles.aboutLeftReadMore}>Read More</p>
            </div>
          </div>
          <div className={styles.aboutDescriptionRightBlock}>
            <div className={styles.aboutDescriptionRightInfoTop}>
              <p className={styles.aboutRightHeading}>Our mision</p>
              <p className={styles.aboutRightDesc}>
                Creating valuable content for creatives all around the world
              </p>
            </div>
            <div className={styles.aboutDescriptionRightInfoBottom}>
              <p className={styles.aboutLeftDescBottom}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const chooseCategorySection = () => {};
  const specialPostSection = () => {};
  const listOfAutorsSection = () => {};
  const logoWrapperSection = () => {};
  const testMonialSection = () => {};
  const joinTeamSection = () => {};
  return (
    <div className={styles.homeMainContainer}>
      <NavBar />
      {bannerSection()}
      {/* <div className={styles.featuresMainContainer}> */}
      <div className={styles.featuresInsideContainer}>
        <div className={styles.featuresBlockOne}>
          {featurePostSection()}
          {aboutUsSection()}
          {chooseCategorySection()}
          {specialPostSection()}
          {listOfAutorsSection()}
        </div>
        <div className={styles.featuresBlockTwo}>
          <div className={styles.featuresLogoTestimonialContainer}>
            {logoWrapperSection()}
            {testMonialSection()}
          </div>
          <div className={styles.featuresJoinTeamContainer}>
            {joinTeamSection()}
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Home;
