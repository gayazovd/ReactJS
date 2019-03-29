import React from 'react';
import classNames from 'classNames/bind';

import styles from './style.scss';

const cx = classNames.bind(styles);

const Modal = props => {
  const { show, closeModal, text } = props;
  if (!show) {
    return null;
  }
  return (
    <div className={cx('main-wrapper')}>
      <div className={cx('wrapper')}>
        <h2>{text}</h2>
        <button type="button" className={cx('closeButton')} onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
