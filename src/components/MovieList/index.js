import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import MovieListView from './view';
import { getIdByFilm } from '../../store/components/Detail/getIdfilm';
import classNames from 'classNames/bind';
import s from './style.scss';
const cx = classNames.bind(s);

class MovieList extends PureComponent {
  handleClickOnFilm = id => {
    this.props.getIdByFilm(id);
  };

  render() {
    return (
      <div className={cx('main-wrapper')}>
        <MovieListView onHandleClick={this.handleClickOnFilm} {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    id: state.id
  };
};
const mapDispatchToProps = {
  getIdByFilm
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
