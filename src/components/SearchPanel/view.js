import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.scss';

const cx = classnames.bind(styles);

const SearchPanelView = ({ search, onInputChange, onClick, tabs, activeTab, onTabClick }) => (
    <div className={cx('wrapper')}>
        <div className={cx('logo')}>netflixroullete</div>
        <div className={cx('titleFind')}>FIND YOUR MOVIE</div>
        <input className={cx('inputButton')} value={search} onChange={onInputChange} />
        <div className={cx('buttonsWraper')}>
            <div className={cx('optionsButtons')}>
                <p className={cx('title')}>SEARCH BY</p>
                {tabs.map(item => (
                    <button
                        type="button"
                        key={item.id}
                        className={cx('buttons', { activeTab: activeTab === item.name })}
                        onClick={() => onTabClick(item.name)}
                    >
                        {item.name}
                    </button>
                ))}
            </div>
            <button
                type="button"
                className={cx('search')}
                onClick={e => onClick(search, activeTab, e)}
            >
                SEARCH
            </button>
        </div>
    </div>
);

export default SearchPanelView;
