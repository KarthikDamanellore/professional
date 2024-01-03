import React from 'react';
import styles from './styles.module.css';

const CategoryCard = () => {
  const { image, chooseCategoryHeading, chooseCategoryDesc } = props;
  return (
    <div className={styles.categoryCardContainer}>
      <div>
        <img src={image} />
      </div>
      <h5>{chooseCategoryHeading}</h5>
      <p>{chooseCategoryDesc}</p>
    </div>
  );
};

export default CategoryCard;
