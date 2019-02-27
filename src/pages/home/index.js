import React, { PureComponent } from 'react';
import Header from '../../components/header';
import SearchPanel from './components/SearchPanel';

export default class Home extends PureComponent {
    render() {
        return (
            <div className="wrapper">
                <Header>
                <SearchPanel />
                </Header>
                <MovieList />
                <Footer />
            </div>
        )
    }
}