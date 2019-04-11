// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { List } from 'immutable';
import { getSearchingMovies } from '../../store/components/Default/actions/actionCreators';
import Header from '../../components/Header';
import SearchPanel from '../../components/SearchPanel';
import MovieList from '../../components/MovieList';
import InformationPanel from '../../components/InformationPanel';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';

import type { detail } from '../../store/components/Default/reducers/fetchReducers';

type Props = {
    movies: List<detail>,
    loading: boolean,
    location: { search: string },
    getSearchingMovies: (?string, ?string) => void
};

class Home extends PureComponent<Props> {
    constructor(props) {
        super(props);
        const params = new URLSearchParams(this.props.location.search);
        const search = params.get('searchFilm');
        const tab = params.get('tab');
        if (search !== null && tab !== null) {
            this.props.getSearchingMovies(search, tab);
        }
    }

    componentDidUpdate(prevProps) {
        const params = new URLSearchParams(this.props.location.search);
        const search = params.get('searchFilm');
        const tab = params.get('tab');
        if (this.props.location !== prevProps.location) {
            this.props.getSearchingMovies(search, tab);
        }
    }

    render() {
        const { movies, loading } = this.props;
        return (
            <>
                <Header>
                    <SearchPanel />
                </Header>
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
        loading: state.loadingMovies.loading
    };
};

const mapDispatchToProps = {
    getSearchingMovies
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Home)
);
