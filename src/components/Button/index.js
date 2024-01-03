import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

const Button = (props) => {
  const { btName, btnStyles, image, imageWrapperStyles, onClick, type } = props;
  console.log(btnStyles)
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(styles.btnStyles, btnStyles)}
    >
      {btName}
      {image && (
        <div
          className={classNames(styles.imageWrapperStyles, imageWrapperStyles)}
        >
          <img src={image} className={styles.imgStyles} alt="" />
        </div>
      )}
    </button>
  );
};

export default Button;
