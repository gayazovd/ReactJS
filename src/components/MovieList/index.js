// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { List } from 'immutable';
import classnames from 'classnames/bind';
import MovieListView from './view';
import NotFoundFilms from '../NotFoundFilms';
import styles from './style.scss';
import type { detail } from '../../store/components/Default/reducers/fetchReducers';

const cx = classnames.bind(styles);

type Props = {
    movies: List<detail>
};

class MovieList extends PureComponent<Props> {
    renderFilms = movies => {
        if (movies.size > 0) {
            return <MovieListView data={movies} />;
        }
        return <NotFoundFilms />;
    };

    render() {
        const { movies } = this.props;
        return <div className={cx('main-wrapper')}>{this.renderFilms(movies)}</div>;
    }
}

const mapStateToProps = state => {
    return {
        movies: state.loadingMovies.movies
    };
};

export default withRouter(connect(mapStateToProps)(MovieList));
