import React from 'react';
import FilmPreview from '../FilmPreview';
import s from './style.scss';

import classNames from 'classNames/bind';
const cx = classNames.bind(s);

const MovieListView = ({ onHandleClick, data }) => (
  <div className={cx('wrapper')}>
    {data &&
      data.map(item => (
        <FilmPreview onClick={() => onHandleClick(item.id)} key={item.id} film={item} />
      ))}
  </div>
);

export default MovieListView;
