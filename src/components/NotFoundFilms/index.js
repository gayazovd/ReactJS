import React from 'react';
import classnames from 'classnames/bind';

import styles from './style.scss';

const cx = classnames.bind(styles);

const NotFoundFilms = ({ loading }) => (
    <div className={cx('wrapper', { notActive: loading })}>
        <h1 className={cx('error')}>No films found</h1>
    </div>
);

export default NotFoundFilms;
