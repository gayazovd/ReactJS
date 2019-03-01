import React from 'react';
import classNames from 'classNames/bind';
import s from './style.scss';

const cx = classNames.bind(s);

const FilmPreview = (props) =>{
    let {title, release_date, poster_path, genres} = props.film;
    const element = <div className={cx('wrapper')}>
                        <img className={cx('images')} src={poster_path} />
                        <div className={cx('description')}>
                            <div>
                                <h3>{title}</h3>
                                <h5>{genres[0]}</h5>
                            </div>
                            <div className={cx('date')}>
                                {new Date(release_date).getFullYear()}
                            </div>
                        </div>
                    </div>
        return (
            element
        );
}

export default FilmPreview;