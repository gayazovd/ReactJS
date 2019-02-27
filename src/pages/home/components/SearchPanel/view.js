import React from 'react';

const SearchPanelView = ({ search, onInputChange, onClick, activeTab, onTabClick }) =>
    <div>
        <input value={search} onChange={onInputChange}  />
        <p>SEARCH BY</p>
        {['title', 'genre'].map((item, index) => <button key={index} onClick={() => onTabClick(item)}>{item}</button>)}
        <button onClick={onClick}>SEARCH</button>
    </div>

export default SearchPanelView;
    
