import React from 'react';
import classNames from 'classNames/bind';
import styles from './style.scss';

const cx = classNames.bind(styles);

const FilmDetailView = (props) =>{ 
let {title, tagline, vote_average, vote_count, release_date, poster_path, overview, budget, revenue, runtime, genres} = props;
    return ( 
        <div>
            <div className={cx('buttonsWrapper')}>
                <p className={cx('logo')}>netflixroulette</p>
                <button className={cx('search')}>SEARCH</button>
            </div>
    
        </div>
    );
}

export default FilmDetailView;