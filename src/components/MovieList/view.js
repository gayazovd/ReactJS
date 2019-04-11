// @flow
import React from 'react';
import { List } from 'immutable';
import classnames from 'classnames/bind';
import FilmPreview from '../FilmPreview';
import styles from './style.scss';
import type { detail } from '../../store/components/Default/reducers/fetchReducers';

const cx = classnames.bind(styles);

type Props = {
    data: List<detail>
};

const MovieListView = ({ data }: Props) => (
    <div className={cx('wrapper')}>
        {data && data.map(item => <FilmPreview key={item.id} film={item} />)}
    </div>
);

export default MovieListView;
