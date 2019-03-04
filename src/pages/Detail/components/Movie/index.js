import React, { PureComponent } from 'react';
import FilmDetailView from './view';
import classNames from 'classNames/bind';
import { network } from '../../../../services/network'; 

import styles from'./style.scss';
const cx = classNames.bind(styles);

export default class FilmDetail extends PureComponent{

    state ={
        movie:{}
    }

    async componentDidMount(){
        try{
            const {data: movie}=await network('movies/269149');
            console.log(movie)
            this.setState({movie});
        }catch(e){
            console.log(e);
        }
    }
    
    render() {
        const { movie } = this.state;
        return (<div className={cx('main-wrapper')}>
                    <FilmDetailView data={movie}/>
                </div>
        );  
    }
}

