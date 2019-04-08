import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FilmDetail from './components/Movie';
import MovieList from '../../components/MovieList';
import InformationPanel from '../../components/InformationPanel';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';

import { getDetailFilm } from '../../store/components/Default/actions/actionCreators';

class Detail extends PureComponent {
    constructor(props) {
        super(props);
        const { id } = this.props.match.params;
        this.props.getDetailFilm(`/movies/${id}`);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        window.scrollTo(0, 0);
        const { id } = this.props.match.params;
        if (id != prevProps.match.params.id) {
            this.props.getDetailFilm(`/movies/${id}`);
        }
    }

    render() {
        const { movies, loading } = this.props;
        return (
            <>
                <FilmDetail />
                <InformationPanel />
                <MovieList data={movies} />
                <Footer />
                <Loading loading={loading} />
            </>
        );
    }
}

Detail.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => {
    return {
        movies: state.loadingMovies.movies,
        loading: state.filmPreview.loading
    };
};

const mapDispatchToProps = {
    getDetailFilm
};
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Detail)
);
