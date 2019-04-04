import React from 'react';
import classNames from 'classNames/bind';
import styles from './style.scss';

const cx = classNames.bind(styles);

const Loading = ({ loading }) => {
  if (!loading) {
    return null;
  }
  return (
    <div className={cx('wrapper')}>
      <div className={cx('cssload-loader')} />
    </div>
  );
};
export default Loading;
