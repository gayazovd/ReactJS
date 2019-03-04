import React, { PureComponent } from 'react';
import FilmDetail from './components/Movie';
import classNames from 'classNames/bind';
import MovieList from '../../components/MovieList';
import InformationPanel from '../../components/InformationPanel/view';
import Footer from '../../components/Footer';
import { network } from '../../services/network'; 

import styles from './style.scss';
const cx = classNames.bind(styles);



export default class Detail extends PureComponent{
    state = {
        movies: []
    }

    async componentDidMount(){
        try{
            const { data: { data: movies } } = await network('/movies');
            this.setState({ movies });
        }catch(e){
            console.log(e);
        }
    }
    
    render() {
        const {movies} = this.state;
        console.log(movies);
        return (
            <>
                <FilmDetail/>
                <InformationPanel/>
                <MovieList data={movies}/>
                <Footer/>
            </>
        )
    }
}
