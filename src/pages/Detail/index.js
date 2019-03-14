import React, { PureComponent } from 'react';
import FilmDetail from './components/Movie';
import classNames from 'classNames/bind';
import MovieList from '../../components/MovieList';
import InformationPanel from '../../components/InformationPanel';
import Footer from '../../components/Footer';
import { network } from '../../services/network'; 

import styles from './style.scss';
const cx = classNames.bind(styles);

import { connect } from 'react-redux';
import { fetchData } from '../../store/components/Home/actionsCreator';


class Detail extends PureComponent{


    componentDidMount(){
        this.props.fetchData('/movies');
    }


    
    render() {
        const { movies } = this.props;
        return (
            <>
                <FilmDetail />
                <InformationPanel />
                <MovieList data={movies} />
                <Footer />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

const mapDispatchToProps = {
    fetchData
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail) 