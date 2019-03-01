import React from 'react';
import FilmPreview from '../FilmPreview';
import classNames from 'classNames/bind';
import s from './style.scss';
const cx = classNames.bind(s);

const MovieListView = ({ data }) =>  
    <div className={cx('wrapper')}>
        {data.map(item =>
            <FilmPreview key={item.id} film={item}/> 
        )}
    </div>

export default MovieListView;
