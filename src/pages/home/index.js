import React, { PureComponent } from 'react';
import Header from '../../components/Header';
import SearchPanel from './components/SearchPanel';
import MovieList from '../../components/MovieList';
import InformationPanel from '../../components/InformationPanel';
export default class Home extends PureComponent {
    render() {
        return (
            <div className="wrapper">
                <Header>
                <SearchPanel />
                </Header>
                <InformationPanel/>
                <MovieList /> 
                {/* <Footer /> */}
            </div>
        )
    }
}