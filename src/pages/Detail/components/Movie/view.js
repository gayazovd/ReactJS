import React from 'react';
import classNames from 'classNames/bind';

import styles from './style.scss';
const cx = classNames.bind(styles);

const FilmDetailView = props => {
  let {
    title,
    tagline,
    vote_average,
    vote_count,
    release_date,
    poster_path,
    overview,
    budget,
    revenue,
    runtime,
    genres
  } = props.data;
  return (
    <div className={cx('wrapper')}>
      <div className={cx('buttonsWrapper')}>
        <p className={cx('logo')}>netflixroulette</p>
        <button className={cx('search')}>SEARCH</button>
      </div>
      <div className={cx('film-present')}>
        <img className={cx('film-image')} src={poster_path} />
        <div className={cx('description')}>
          <div className={cx('wrapper-title-average')}>
            <h1 className={cx('title')}>{title}</h1>
            <div className={cx('vote-average')}>{vote_average}</div>
          </div>
          <h5>{tagline}</h5>
          <div className={cx('release-date')}>
            {release_date && <span>{new Date(release_date).getFullYear()}</span>}
            {runtime && <span>{runtime} min</span>}
          </div>
          <p className={cx('overview')}>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default FilmDetailView;
