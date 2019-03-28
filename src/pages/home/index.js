import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import getSearchingMovies from '../../store/components/Default/actions/searchRequest';
import Header from '../../components/Header';
import SearchPanel from '../../components/SearchPanel';
import MovieList from '../../components/MovieList';
import InformationPanel from '../../components/InformationPanel';
import Footer from '../../components/Footer';
import NotFoundFilms from './components/NotFoundFilms';

import fetchData from '../../store/components/Default/actions/getDetailFilm';

class Home extends PureComponent {
  static propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);
    const search = params.get('searchFilm');
    const tab = params.get('tab');
    if (search !== null && tab !== null) {
      this.props.getSearchingMovies(params.get('searchFilm'), params.get('tab'));
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
    const { movies } = this.props;
    return (
      <>
        <Header>
          <SearchPanel />
        </Header>
        <InformationPanel />
        {movies && movies.length > 0 ? <MovieList data={movies} /> : <NotFoundFilms />}
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = {
  fetchData,
  getSearchingMovies
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
