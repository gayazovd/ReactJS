import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames/bind';
import FilmDetailView from './view';
import styles from './style.scss';

const cx = classnames.bind(styles);

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

export default connect(mapStateToProps)(FilmDetail);
