import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieListView from './view';
import { getFilm } from '../../store/components/Default/actions/actions';
import classNames from 'classNames/bind';
import s from './style.scss';
const cx = classNames.bind(s);

class MovieList extends PureComponent {
  handleClickOnFilm = item => {
    this.props.getFilm(item);
  };

  render() {
    const { movies } = this.props;
    return (
      <div className={cx('main-wrapper')}>
        <MovieListView onHandleClick={this.handleClickOnFilm} data={movies} />
      </div>
    );
  }
}
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};
const mapDispatchToProps = {
  getFilm
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
