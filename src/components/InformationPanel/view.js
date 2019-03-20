import React from 'react';
import classNames from 'classNames/bind';
import styles from './style.scss';
const cx = classNames.bind(styles);

const InformationPanelView = props => {
  let { onHandeleClick, tabs } = props;
  return (
    <>
      <div>7 movies found</div>
      <div className={cx('sort-oprions')}>
        <div id="test">Sort by</div>
        {tabs.map(tab => (
          <div
            key={tab.id}
            onClick={() => onHandeleClick(tab)}
            className={cx({ activeTab: tab.active })}
          >
            {tab.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default InformationPanelView;
