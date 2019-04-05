import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import dart from '../../images/dart.jpg';

import classNames from 'classNames/bind';
import styles from './style.scss';

const cx = classNames.bind(styles);

export default class NotFound extends PureComponent {
    render() {
        return (
            <div className={cx('wrapper')}>
                <img src={dart} />
                <h1 className={cx('error')}>404 page not found</h1>
                <NavLink to="/search" className={cx('link')}>
                    Вернуться на главную
                </NavLink>
            </div>
        );
    }
}
