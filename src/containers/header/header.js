import React, { PureComponent } from 'react';
import SearchPanel from './components/SearchPanel';

class Header extends PureComponent{

    render(){ 
        return ( 
            <div>
                <div>
                    <SearchPanel/>
                </div>
            </div> 
        );
    }
}

export default Header;