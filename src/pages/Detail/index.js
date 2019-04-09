// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FilmDetail from './components/Movie';
import MovieList from '../../components/MovieList';
import InformationPanel from '../../components/InformationPanel';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import { getDetailFilm } from '../../store/components/Default/actions/actionCreators';
import type { detail } from '../../store/components/Default/reducers/fetchReducers';

type Params = {
    id: number
};
type Match = {
    params: Params,
    isExact: boolean,
    path: string,
    url: string
};

type Props = {
    movies: detail[],
    loading: boolean,
    match: Match,
    getDetailFilm: string => void
};

class Detail extends PureComponent<Props> {
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
