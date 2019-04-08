import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MovieListView from './view';
import NotFoundFilms from '../NotFoundFilms';

import classNames from 'classNames/bind';
import s from './style.scss';
const cx = classNames.bind(s);

class MovieList extends PureComponent {
    handleClickOnFilm = item => {
        this.props.getFilm(item);
    };

    renderFilms = movies => {
        if (movies.length > 0) {
            return <MovieListView onHandleClick={this.handleClickOnFilm} data={movies} />;
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
