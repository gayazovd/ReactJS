// @flow
import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames/bind';

import styles from './style.scss';

const cx = classnames.bind(styles);

type Props = {
    loading: boolean
};

const Error = styled.h1`
    font-size: 46px;
`;

const NotFoundFilms = ({ loading }: Props) => (
    <div className={cx('wrapper', { notActive: loading })}>
        <Error>No films found</Error>
    </div>
);

export default NotFoundFilms;
