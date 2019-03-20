import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import InformationPanelView from './view';
import styles from './style.scss';
import classNames from 'classNames/bind';

import fetchBySort from '../../store/components/Default/actions/fetchBySort';

const cx = classNames.bind(styles);

class InformationPanel extends PureComponent {
  handleClickOnSort = tab => {
    this.props.fetchBySort(tab);
  };

  render() {
    const { tabs } = this.props;
    return (
      <div className={cx('wrapper')}>
        <InformationPanelView tabs={tabs} onHandeleClick={this.handleClickOnSort} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    tabs: state.tabs
  };
};

const mapDispatchToProps = {
  fetchBySort
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InformationPanel);
