// @flow
import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.scss';

const cx = classnames.bind(styles);

type Props = {
    loading: boolean
};

const Loading = ({ loading }: Props) => {
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
