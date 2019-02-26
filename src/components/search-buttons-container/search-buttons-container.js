import {React, PureComponent} from 'react';
import SearchTitle from './search-buttons/search-title.js';
import OptionsButton from './search-buttons/search-options-button.js';
import SearchButton from './search-buttons/search-button.js';

class SearchButtonsContainer extends PureComponent{
    render(){
        return (
            <div>
                <SearchTitle text= 'SEARCH BY' />
                <OptionsButton text= 'TITLE'/>
                <OptionsButton text= 'GENRE'/>
                <SearchButton text= 'SEARCH'/>
            </div>
        );
    }
}
export default SearchButtonsContainer;