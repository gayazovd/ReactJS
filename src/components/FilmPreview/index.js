import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { withRouter } from 'react-router-dom';
import s from './style.scss';

const cx = classnames.bind(s);

const FilmPreview = withRouter(props => {
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
FilmPreview.propTypes = {
    onClick: PropTypes.func.isRequired,
    film: PropTypes.shape({
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};

export default FilmPreview;
