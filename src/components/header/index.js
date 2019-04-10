// @flow
import * as React from 'react';
import classnames from 'classnames/bind';
import styles from './style.scss';

const cx = classnames.bind(styles);

type Props = {
    children: React.Node
};

const Header = ({ children }: Props) => (
    <div className={cx('wrapper', 'wrapperPosition')}>{children}</div>
);

export default Header;
