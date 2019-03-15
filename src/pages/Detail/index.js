import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import FilmDetail from './components/Movie';
import MovieList from '../../components/MovieList';
import InformationPanel from '../../components/InformationPanel';
import Footer from '../../components/Footer';

import styles from './style.scss';

import fetchData from '../../store/components/Home/actionsCreator';

import classNames from 'classNames/bind';
const cx = classNames.bind(styles);

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
