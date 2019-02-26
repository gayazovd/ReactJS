import React from 'react';

const SearchPanelView = ({ search, onInputChange, onClick, activeTab, onTabClick }) =>
    <div>
        <input value={search} onChange={onInputChange}  />
        {['title', 'genre'].map((item, index) => <div key={index} onClick={() => onTabClick(item)}>{item}</div>)}
        <button onClick={onClick}>123</button>
    </div>

export default SearchPanelView;
    
