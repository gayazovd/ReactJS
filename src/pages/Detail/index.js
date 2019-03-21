import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilmDetail from './components/Movie';
import MovieList from '../../components/MovieList';
import InformationPanel from '../../components/InformationPanel';
import Footer from '../../components/Footer';

import fetchData from '../../store/components/Default/actions/actionsCreator';

class Detail extends PureComponent {
  componentDidMount() {
    this.props.fetchData('/movies');
  }

  render() {
    const { movies } = this.props;
    return (
      <>
        <FilmDetail />
        <InformationPanel />
        <MovieList data={movies} />
        <Footer />
      </>
    );
  }
}

Detail.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchData: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = {
  fetchData
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
