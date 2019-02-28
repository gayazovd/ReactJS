import React, { PureComponent } from 'react';
import MovieListView from './view';
import DataMock from '../../../DataMock.json';
import classNames from 'classNames/bind';
import s from './style.scss';
const cx = classNames.bind(s);


class MovieList extends PureComponent{

render() {
    return (
        <div className={cx('main-wrapper')}>
            <MovieListView data={DataMock}/>
        </div>
    )
}
}

export default MovieList;