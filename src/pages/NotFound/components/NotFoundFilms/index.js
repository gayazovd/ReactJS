import React from 'react';
import classNames from 'classNames/bind';

import styles from './style.scss';

const cx = classNames.bind(styles);

const NotFoundFilms = () => 
    <div className={cx('wrapper')}>
        <h1 className={cx('error')}> No films found </h1>
    </div>

export default NotFoundFilms;
