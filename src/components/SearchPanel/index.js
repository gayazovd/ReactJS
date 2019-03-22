import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SearchPanelView from './view';
import { getActiveTab } from '../../store/components/Default/actions/actions';

const TABS = [{ id: 1, name: 'genre' }, { id: 2, name: 'title' }];

class SearchPanel extends PureComponent {
  static propTypes = {
    activeTab: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    }).isRequired
  };

  state = {
    search: ''
  };

  handleChangeInput = e => {
    const search = e.target.value;
    this.setState({ search });
  };

  handleClick = search => {
    console.log(search);
  };

  handleTabClick = tab => {
    this.props.getActiveTab(tab);
  };

  render() {
    const { activeTab } = this.props;
    const { search } = this.state;
    return (
      <SearchPanelView
        search={search}
        activeTab={activeTab}
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
    activeTab: state.tabActive,
    input: state.inputText
  };
};
const mapDispatchToProps = {
  getActiveTab
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPanel);
