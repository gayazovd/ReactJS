import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FilmDetail from './components/Movie';
import MovieList from '../../components/MovieList';
import InformationPanel from '../../components/InformationPanel';
import Footer from '../../components/Footer';

import getDetailFilm from '../../store/components/Default/actions/getDetailFilm';

class Detail extends PureComponent {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getDetailFilm(`/movies/${id}`);
  }
  componentDidUpdate(prevProps) {
    const { id } = this.props.match.params;
    if (id != prevProps.match.params.id) {
      this.props.getDetailFilm(`/movies/${id}`);
    }
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
  movies: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => {
  return {
    movies: state.movies
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
