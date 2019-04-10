// @flow
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import classnames from 'classnames/bind';
import styles from './style.scss';

const cx = classnames.bind(styles);

type Props = {
    data: {
        title: string,
        tagline: string,
        vote_average: number,
        release_date: string,
        poster_path: string,
        overview: string,
        runtime: string
    }
};

const FilmDetailView = (props: Props) => {
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
                <NavLink to="/search" className={cx('link')}>
                    <button type="button" className={cx('search')}>
                        SEARCH
                    </button>
                </NavLink>
            </div>
            <div className={cx('film-present')}>
                <img className={cx('film-image')} src={posterPath} alt="img" />
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

export default withRouter(FilmDetailView);
