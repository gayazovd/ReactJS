import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.scss';

const cx = classnames.bind(styles);

const Footer = () => (
    <div className={cx('wrapper')}>
        <div className={cx('logo')}>netflixroullete</div>
    </div>
);

export default Footer;
