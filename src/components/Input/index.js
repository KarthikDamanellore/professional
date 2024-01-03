import classNames from 'classnames';
import React from 'react';
import styles from "./styles.module.css"

const Input = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  onFocus,
  className,
  image,
}) => {
  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={classNames(styles.input, className)}
      />
      {image && (
        <div className={styles.inputIcon}>
          <img src={image} className={styles.imageWidth} />
        </div>
      )}
    </div>
  );
};

export default Input;
