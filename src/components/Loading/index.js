import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.scss';

const cx = classnames.bind(styles);

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
