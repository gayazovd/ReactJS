import React from 'react';
import classNames from 'classNames/bind';
import styles from './style.scss';

const cx = classNames.bind(styles);

const InformationPanelView = (props) =>{
    console.log(props)
    let {onClick,tabs, activeTab} = props;
    return (<>
                <div>7 movies found</div>
                <div className={cx('sort-oprions')} >
                    <div onClick={onClick} > Sort by </div>
                    {tabs.map(tab => <div key={tab} className={cx({activeTab: activeTab === tab})} > {tab} </div>)}
                </div>
            </>
    );
}

export default InformationPanelView;