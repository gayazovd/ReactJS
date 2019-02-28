import React from 'react';
import classNames from 'classNames/bind';
import s from './style.scss';

const cx = classNames.bind(s);

const FilmPreview = (props) =>{
    let {title, tagline, vote_average, vote_count, release_date, poster_path, overview, budget, revenue, runtime, genres} = props.film;
        return (
                <div className={cx('wrapper')}>
                    <img className={cx('images')} src={poster_path} />
                    <div>
                        <div>
                            <h3>{title}</h3>
                            <h5>{genres}</h5>
                        </div>
                        <div>
                            {release_date}
                        </div>
                    </div>
                </div>
        );
}

export default FilmPreview;