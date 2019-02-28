import React from 'react';
import classNames from 'classNames/bind';
import style from './searchPanel.scss';

const cx = classNames.bind(style);

const SearchPanelView = ({ search, onInputChange, onClick, tabs , activeTab, onTabClick }) =>
    <div className={cx('wrapper')} >
        <input className={cx('inputButton')} value={search} onChange={onInputChange}  />
        <div className={cx('buttonsWraper')}>
            <div>
                <p className={cx('title')}>SEARCH BY</p>
                    {tabs.map((item, index) => 
                        <button className={cx('buttons', { activeTab})} 
                        key={index} 
                        onClick={() => onTabClick(item)}>{item}</button>)}
            </div>
        <button className={cx('search')} onClick={onClick}>SEARCH</button>
        </div>
    </div>

export default SearchPanelView;
    
