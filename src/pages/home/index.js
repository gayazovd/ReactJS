import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
    // this.props.fetchData('/movies');
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
  fetchData
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
