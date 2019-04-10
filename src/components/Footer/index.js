// @flow
import React from 'react';
import injectSheet from 'react-jss';

const style = {
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        background: '#2c2a2a',
        height: '40px',
        flex: [0, 0, 'auto']
    },
    logo: {
        color: 'rgb(207, 63, 87)',
        width: '70%',
        padding: '5px'
    }
};

type Props = {
    classes: any
};

const Footer = ({ classes }: Props) => (
    <div className={classes.wrapper}>
        <div className={classes.logo}>netflixroullete</div>
    </div>
);

export default injectSheet(style)(Footer);
