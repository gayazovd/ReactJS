// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames/bind';
import { List } from 'immutable';
import InformationPanelView from './view';
import styles from './style.scss';

import { fetchBySort } from '../../store/components/Default/actions/actionCreators';

const cx = classnames.bind(styles);

const tabs = List([
    { id: 1, name: 'rating', SortBy: 'vote_average', sortOrder: false },
    { id: 2, name: 'release date', SortBy: 'release_date', sortOrder: true }
]);

type Props = {
    length: number,
    activeTab: {
        id: number,
        name: string,
        SortBy: string,
        sortOrder: boolean
    },
    fetchBySort: ({ id: number, name: string, SortBy: string, sortOrder: boolean }) => void
};

class InformationPanel extends PureComponent<Props> {
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
        length: state.loadingMovies.movies.size,
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
