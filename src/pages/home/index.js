import React, { PureComponent } from 'react';
import Header from '../../components/Header';
import SearchPanel from './components/SearchPanel';
import MovieList from '../../components/MovieList';
import InformationPanel from '../../components/InformationPanel';
import Footer from '../../components/Footer';
import styles from './style.scss';
import classNames from 'classNames/bind';

const cx = classNames.bind(styles);
export default class Home extends PureComponent {
    render() {
        return (
            <div className={cx("wrapper")}>
                <Header>
                <SearchPanel />
                </Header>
                <InformationPanel/>
                <MovieList /> 
                <Footer />
            </div>
        )
    }
}