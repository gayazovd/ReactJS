import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.scss';

const cx = classnames.bind(styles);

const InformationPanelView = props => {
    const { onHandleClick, tabs, length, activeTab } = props;
    return (
        <>
            <div>{length} movies found</div>
            <div className={cx('sort-oprions')}>
                <div>Sort by</div>
                {tabs.map(tab => (
                    <div
                        key={tab.id}
                        onClick={() => onHandleClick(tab)}
                        className={cx({ activeTab: tab.name === activeTab.name })}
                        onKeyDown={() => {}}
                        role="presentation"
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
        </>
    );
};

export default InformationPanelView;
