import React, { PureComponent } from 'react';
import Header from '../../components/Header';
import SearchPanel from '../../components/SearchPanel';
import MovieList from '../../components/MovieList';
import InformationPanel from '../../components/InformationPanel';
import Footer from '../../components/Footer';
import classNames from 'classNames/bind';
import { network } from '../../services/network'; 

import { connect } from 'react-redux';
import { fetchData } from '../../store/components/Home/actionsCreator';

import styles from './style.scss';
const cx = classNames.bind(styles);

class Home extends PureComponent {


    componentDidMount(){
        this.props.fetchData('/movies');
    }
/*     async componentDidMount() {
        try {
           const { data: { data: movies } } = await network('/movies');

           this.setState({ movies });
           
        } catch(e) {
           console.log(e);     
        }
    } */

    render() {
        return (
            <>
                <Header>
                    <SearchPanel />
                </Header>
                <InformationPanel/>
                <MovieList data={this.props.movies}/> 
                <Footer />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    };
}

const mapDispatchToProps = {
    fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);