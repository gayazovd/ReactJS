import React, { PureComponent } from 'react';
import Header from '../../components/Header';
import SearchPanel from './components/SearchPanel';
import MovieList from '../../components/MovieList';
import InformationPanel from '../../components/InformationPanel';
import Footer from '../../components/Footer';
import classNames from 'classNames/bind';
import { network } from '../../services/network'; 

import styles from './style.scss';

const cx = classNames.bind(styles);
export default class Home extends PureComponent {

    state = {
        movies: [],
    }

    async componentDidMount() {
        try {
           const { data: { data: movies } } = await network('/movies');

           this.setState({ movies });
           
        } catch(e) {
           console.log(e);     
        }
    }

    render() {
        const { movies } = this.state;

        return (
            <div className={cx("wrapper")}>
                <Header>
                    <SearchPanel />
                </Header>
                <InformationPanel/>
                <MovieList data={movies}/> 
                <Footer />
            </div>
        )
    }
}