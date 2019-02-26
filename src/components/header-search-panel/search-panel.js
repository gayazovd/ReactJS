import {React, PureComponent} from 'react';
import SearchInput from '../search-input/search-input.js';
import SearchButtonsContainer from '../search-buttons-container/search-buttons-container.js';

class SearchPanel extends PureComponent{
    render() {
        return ( 
                <div>   
                    <SearchInput/>
                    <SearchButtonsContainer/>
                </div>
        );
    }
}

export default SearchPanel;
