import React, { PureComponent } from 'react';
import FilmDetail from './components/Movie';
import classNames from 'classNames/bind';
import styles from './style.scss';

const cx = classNames.bind(styles);



export default class Detail extends PureComponent{
    
    render() {
        return (
            <div className={cx('wrapper')}>
                <FilmDetail/>
            </div>
        )
    }
}
