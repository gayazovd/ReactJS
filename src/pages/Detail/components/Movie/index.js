// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames/bind';
import FilmDetailView from './view';
import styles from './style.scss';

const cx = classnames.bind(styles);
type Props = {
    filmPreview: {
        title: string,
        tagline: string,
        vote_average: number,
        release_date: string,
        poster_path: string,
        overview: string,
        runtime: string
    }
};

class FilmDetail extends PureComponent<Props> {
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
        filmPreview: state.filmPreview.detail
    };
};

export default connect(mapStateToProps)(FilmDetail);
