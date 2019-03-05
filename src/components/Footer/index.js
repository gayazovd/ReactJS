import React, {PureComponent} from 'react';
import styles from './style.scss';
import classNames from 'classNames/bind';

const cx = classNames.bind(styles);

const Footer = () => 
    <div className={cx('wrapper')}>
       <div className={cx('logo')}>netflixroullete</div>
    </div>

export default Footer;