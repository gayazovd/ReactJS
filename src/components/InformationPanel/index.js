import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import InformationPanelView from './view';
import styles from './style.scss';
import classNames from 'classNames/bind';

import { fetchBySort } from '../../store/components/Default/actions/actionCreators';

const cx = classNames.bind(styles);

const tabs = [
    { id: 1, name: 'rating', SortBy: 'vote_average', sortOrder: false },
    { id: 2, name: 'release date', SortBy: 'release_date', sortOrder: true }
];

class InformationPanel extends PureComponent {
    handleClickOnSort = tab => {
        this.props.fetchBySort(tab);
    };

    render() {
        const { length, activeTab } = this.props;
        return (
            <div className={cx('wrapper')}>
                <InformationPanelView
                    activeTab={activeTab}
                    tabs={tabs}
                    length={length}
                    onHandleClick={this.handleClickOnSort}
                />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        length: state.loadingMovies.movies.length,
        activeTab: state.tabActive
    };
};

const mapDispatchToProps = {
    fetchBySort
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InformationPanel);
