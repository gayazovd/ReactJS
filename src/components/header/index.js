import React from 'react';
import style from './header.scss';
import classNames from 'classNames/bind';

const cx = classNames.bind(style);

const Header = ({ children }) => 
    <div className={cx('wrapper','wrapperPosition')}>
        <div className={cx('logo')}>netflixroullete</div>
        {children}
    </div>

export default Header;