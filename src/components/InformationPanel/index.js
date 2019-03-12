import React, { PureComponent } from 'react'
import InformationPanelView from './view';
import classNames from 'classNames/bind';
import styles from './style.scss';

const cx = classNames.bind(styles);

export default class InformationPanel extends PureComponent{
    state = {
        tabs: ['rating', 'release date'],
        activeTab: 'rating'
    }
    handleClickOnSort = () =>{
        if(this.state.activeTab === 'rating'){
            this.setState({
                activeTab: 'release date'
            })
        }else{
            this.setState({
                activeTab: 'rating'
            })
        }
    }

    render() {
        return (
            <div className={cx('wrapper')}>
                <InformationPanelView {...this.state} onClick={this.handleClickOnSort}/>
            </div>
        )
    }
}