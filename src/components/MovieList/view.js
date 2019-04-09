import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import FilmPreview from '../FilmPreview';
import styles from './style.scss';

const cx = classnames.bind(styles);

const MovieListView = ({ data }) => (
    <div className={cx('wrapper')}>
        {data && data.map(item => <FilmPreview key={item.id} film={item} />)}
    </div>
);
MovieListView.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default MovieListView;
