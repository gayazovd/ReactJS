import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Modal from '../Modal';
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
    searchTab: TABS[1].name,
    isOpen: false
  };

  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);
    const tab = params.get('tab');
    if (tab) {
      this.setState({ searchTab: tab });
    }
  }

  handleChangeInput = e => {
    const search = e.target.value;
    this.setState({ search });
  };

  handleClick = (search, name, event) => {
    if (search === '' || name === '') {
      event.preventDefault();
      this.setState({ isOpen: true });
    } else {
      const { history } = this.props;
      history.push({
        pathname: '/search',
        search: `?${new URLSearchParams({ searchFilm: search, tab: name })}`
      });
    }
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  handleTabClick = tab => {
    this.setState({ searchTab: tab });
  };

  render() {
    const { search, searchTab, isOpen } = this.state;
    return (
      <>
        <SearchPanelView
          search={search}
          activeTab={searchTab}
          tabs={TABS}
          onInputChange={this.handleChangeInput}
          onClick={this.handleClick}
          onTabClick={this.handleTabClick}
        />
        <Modal
          show={isOpen}
          text="Введите данные в поисковую панель!"
          closeModal={this.closeModal}
        />
      </>
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchPanel)
);
