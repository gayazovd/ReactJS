import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilmDetailView from './view';
import { getFilm } from '../../../../store/components/Default/actions/actions';
import Loading from '../../../../components/Loading';

import styles from './style.scss';
import classNames from 'classNames/bind';

const cx = classNames.bind(styles);

class FilmDetail extends PureComponent {
  static propTypes = {
    filmPreview: PropTypes.shape({
      id: PropTypes.number,
      genres: PropTypes.array,
      vote_average: PropTypes.number,
      release_date: PropTypes.string,
      overview: PropTypes.string
    }).isRequired
  };

  render() {
    const { filmPreview } = this.props;
    return (
      <div className={cx('main-wrapper')}>
        <FilmDetailView data={filmPreview} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filmPreview: state.filmPreview.detail,
    loading: state.filmPreview.loading
  };
};
const mapDispatchToProps = {
  getFilm
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmDetail);
