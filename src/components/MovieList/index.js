import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames/bind';
import MovieListView from './view';
import NotFoundFilms from '../NotFoundFilms';
import styles from './style.scss';

const cx = classnames.bind(styles);

class MovieList extends PureComponent {
    renderFilms = movies => {
        if (movies.length > 0) {
            return <MovieListView data={movies} />;
        }
        return <NotFoundFilms />;
    };

    render() {
        const { movies } = this.props;
        return <div className={cx('main-wrapper')}>{this.renderFilms(movies)}</div>;
    }
}
MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => {
    return {
        movies: state.loadingMovies.movies
    };
};

export default withRouter(connect(mapStateToProps)(MovieList));
