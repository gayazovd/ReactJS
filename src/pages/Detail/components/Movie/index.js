import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import FilmDetailView from './view';
import { getFilm } from '../../../../store/components/Default/actions/actions';

import styles from './style.scss';
import classNames from 'classNames/bind';

const cx = classNames.bind(styles);

class FilmDetail extends PureComponent {
  render() {
    const { active } = this.props;
    return (
      <div className={cx('main-wrapper')}>
        <FilmDetailView data={active} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movies: state.movies,
    active: state.active
  };
};
const mapDispatchToProps = {
  getFilm
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmDetail);
