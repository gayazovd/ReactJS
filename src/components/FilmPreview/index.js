// @flow
import React from 'react';
import classnames from 'classnames/bind';
import { withRouter } from 'react-router-dom';
import s from './style.scss';

const cx = classnames.bind(s);

type Props = {
    history: { push: string => void },
    film: {
        id: number,
        title: string,
        release_date: string,
        poster_path: string,
        genres: string[]
    }
};

const FilmPreview = withRouter((props: Props) => {
    const { history } = props;
    const { film } = props;
    const { id, title, release_date: releaseDate, poster_path: posterPath, genres } = film;
    return (
        <div
            className={cx('wrapper')}
            onClick={() => {
                history.push(`/detail/${id}`);
            }}
            onKeyDown={() => {}}
            role="presentation"
        >
            <img className={cx('images')} src={posterPath} alt="img" />
            <div className={cx('description')}>
                <h3>{title}</h3>
                <div className={cx('wrapper-genres-date')}>
                    <h5 className={cx('genres')}>{genres[0]}</h5>
                    <div className={cx('date')}>{new Date(releaseDate).getFullYear()}</div>
                </div>
            </div>
        </div>
    );
});

export default FilmPreview;
