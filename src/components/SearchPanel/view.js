import React from 'react';
import classNames from 'classNames/bind';
import styles from './style.scss';

const cx = classNames.bind(styles);

const SearchPanelView = ({ search, onInputChange, onClick, tabs, activeTab, onTabClick }) => (
  <div className={cx('wrapper')}>
    <div className={cx('logo')}>netflixroullete</div>
    <div className={cx('titleFind')}>FIND YOUR MOVIE</div>
    <input className={cx('inputButton')} value={search} onChange={onInputChange} />
    <div className={cx('buttonsWraper')}>
      <div className={cx('optionsButtons')}>
        <p className={cx('title')}>SEARCH BY</p>
        {tabs.map((item, index) => (
          <button
            type="button"
            key={item.id}
            className={cx('buttons', { activeTab: activeTab === item })}
            onClick={() => onTabClick(item)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <button type="button" className={cx('search')} onClick={() => onClick(search)}>SEARCH</button>
    </div>
  </div>
);

export default SearchPanelView;
