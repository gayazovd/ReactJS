import React from 'react';
import classNames from 'classNames/bind';
import s from './style.scss';

const cx = classNames.bind(s);

const FilmPreview = (props) =>{
    let {title, release_date, poster_path, genres} = props.film;
        return (
            <div className={cx('wrapper')}>
                <img className={cx('images')} src={poster_path} />
                <div className={cx('description')}>
                <h3>{title}</h3>
                    <div className={cx('wrapper-genres-date')}>
                        <h5 className={cx('genres')}>{genres[0]}</h5>
                        <div className={cx('date')}>
                            {new Date(release_date).getFullYear()}
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default FilmPreview;