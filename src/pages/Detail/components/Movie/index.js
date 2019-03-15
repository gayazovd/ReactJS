import React, { PureComponent } from 'react';
import FilmDetailView from './view';
import classNames from 'classNames/bind';
import { network } from '../../../../services/network';

import { connect } from 'react-redux';
import getDataFromServer from '../../../../store/components/Detail/fetchFilms';

import styles from './style.scss';
const cx = classNames.bind(styles);

class FilmDetail extends PureComponent {
  componentDidMount() {
    this.props.getDataFromServer('/movies/269149');
  }

  /*     async componentDidMount(){
        try{
            const {data: movie}=await network(`/movies/269149`);
            console.log(movie)
            this.setState({movie});
        }catch(e){
            console.log(e);
        }
    } */

  render() {
    const { movie } = this.props;
    return (
      <div className={cx('main-wrapper')}>
        <FilmDetailView data={movie} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movie: state.movie
  };
};

const mapDispatchToProps = {
  getDataFromServer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmDetail);
