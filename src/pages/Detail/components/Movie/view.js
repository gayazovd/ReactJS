import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classNames/bind';

import styles from './style.scss';
const cx = classNames.bind(styles);

const FilmDetailView = props => {
  const { data } = props;
  const {
    title,
    tagline,
    vote_average: voteAverage,
    release_date: releaseDate,
    poster_path: posterPath,
    overview,
    runtime
  } = data;
  return (
    <div className={cx('wrapper')}>
      <div className={cx('buttonsWrapper')}>
        <p className={cx('logo')}>netflixroulette</p>
        <button className={cx('search')}>SEARCH</button>
      </div>
      <div className={cx('film-present')}>
        <img className={cx('film-image')} src={posterPath} />
        <div className={cx('description')}>
          <div className={cx('wrapper-title-average')}>
            <h1 className={cx('title')}>{title}</h1>
            <div className={cx('vote-average')}>{voteAverage}</div>
          </div>
          <h5>{tagline}</h5>
          <div className={cx('release-date')}>
            {releaseDate && <span>{new Date(releaseDate).getFullYear()}</span>}
            {runtime && <span>{runtime} min</span>}
          </div>
          <p className={cx('overview')}>{overview}</p>
        </div>
      </div>
    </div>
  );
};
FilmDetailView.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    tagline: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    poster_path: PropTypes.string
  }).isRequired
};

export default FilmDetailView;
