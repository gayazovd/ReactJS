import React, { PureComponent } from 'react';
import FilmDetailView from './view';
import styles from'./style.scss';
import classNames from 'classNames/bind';
import DataMock from '../../../../../DataMock.json';
const data = DataMock[0];

const cx = classNames.bind(styles);

export default class FilmDetail extends PureComponent{
    
    render() {
        return (<div className={cx('wrapper')}>
                    <FilmDetailView data={data}/>
                </div>
        );  
    }
}

