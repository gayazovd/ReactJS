import React, { PureComponent } from 'react';
import Header from '../../components/Header';
import SearchPanel from '../../components/SearchPanel';
import InformationPanel from '../../components/InformationPanel/view';
import NotFoundFilms from './components/NotFoundFilms';
import Footer from '../../components/Footer';

export default class NotFound extends PureComponent{
    
    render() {
        return (
            <>
                <Header>
                    <SearchPanel />
                </Header>
                <InformationPanel />
                <NotFoundFilms />
                <Footer />
            </>
        )
    }
}