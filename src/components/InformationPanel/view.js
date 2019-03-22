import React from 'react';
import classNames from 'classNames/bind';
import styles from './style.scss';
const cx = classNames.bind(styles);

const InformationPanelView = props => {
  const { onHandleClick, tabs, length, activeTab } = props;
  return (
    <>
      <div>{length} movies found</div>
      <div className={cx('sort-oprions')}>
        <div>Sort by</div>
        {tabs.map(tab => (
          <div
            key={tab.id}
            onClick={() => onHandleClick(tab)}
            className={cx({ activeTab: tab.name === activeTab.name })}
          >
            {tab.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default InformationPanelView;
