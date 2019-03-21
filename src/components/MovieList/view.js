import React from 'react';
import PropTypes from 'prop-types';
import FilmPreview from '../FilmPreview';
import s from './style.scss';

import classNames from 'classNames/bind';
const cx = classNames.bind(s);

const MovieListView = ({ onHandleClick, data }) => (
  <div className={cx('wrapper')}>
    {data &&
      data.map(item => (
        <FilmPreview onClick={() => onHandleClick(item)} key={item.id} film={item} />
      ))}
  </div>
);
MovieListView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onHandleClick: PropTypes.func.isRequired
};

export default MovieListView;
