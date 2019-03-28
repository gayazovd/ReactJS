import React from 'react';
import styles from './style.scss';
import classNames from 'classNames/bind';

const cx = classNames.bind(styles);

const Header = ({ children }) => <div className={cx('wrapper', 'wrapperPosition')}>{children}</div>;

export default Header;
