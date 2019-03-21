import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import SearchPanel from '../../components/SearchPanel';
import MovieList from '../../components/MovieList';
import InformationPanel from '../../components/InformationPanel';
import Footer from '../../components/Footer';

import fetchData from '../../store/components/Default/actions/actionsCreator';

class Home extends PureComponent {
  static propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  componentDidMount() {
    this.props.fetchData('/movies');
  }

  render() {
    const { movies } = this.props;
    return (
      <>
        <Header>
          <SearchPanel />
        </Header>
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
)(Home);
