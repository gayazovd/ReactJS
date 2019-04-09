import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.scss';

const cx = classnames.bind(styles);

const Header = ({ children }) => <div className={cx('wrapper', 'wrapperPosition')}>{children}</div>;

export default Header;
