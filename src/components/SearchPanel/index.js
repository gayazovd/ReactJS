import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SearchPanelView from './view';
import { activeSearchTab } from '../../store/components/Default/actions/actions';
import getSearchingMovies from '../../store/components/Default/actions/searchRequest';

const TABS = [{ id: 1, name: 'genres' }, { id: 2, name: 'title' }];

class SearchPanel extends PureComponent {
  static propTypes = {
    /*   searchTab: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    }).isRequired */
  };

  state = {
    search: '',
    searchTab: {}
  };

  handleChangeInput = e => {
    const search = e.target.value;
    this.setState({ search });
  };

  handleClick = (search, tab) => {
    const { name } = tab;
    this.props.getSearchingMovies(search, name);
    console.log(search, tab);
  };

  handleTabClick = tab => {
    // this.props.getActiveTab(tab);
    this.setState({ searchTab: tab });
  };

  render() {
    // const { searchTab } = this.props;
    const { search, searchTab } = this.state;
    return (
      <SearchPanelView
        search={search}
        activeTab={searchTab}
        tabs={TABS}
        onInputChange={this.handleChangeInput}
        onClick={this.handleClick}
        onTabClick={this.handleTabClick}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    // searchTab: state.searchTab
  };
};
const mapDispatchToProps = {
  // activeSearchTab,
  getSearchingMovies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPanel);
