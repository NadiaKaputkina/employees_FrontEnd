import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TabBarNav = ({children, navLabel, className, onChangeActiveTab}) => {
    const classes = classNames(
        'nav-item',
        className,
    );

    return (
        <button
            className={classes}
            onClick={() => {onChangeActiveTab(navLabel)}}
        >
            {children}
        </button>
    )
};

TabBarNav.propTypes = {
    children: PropTypes.node,
    navLabel: PropTypes.string,
    className: PropTypes.string,
    onChangeActiveTab: PropTypes.func,
};

TabBarNav.defaultProps = {
    children: null,
    navLabel: 'Tab',
    className: '',
    onChangeActiveTab: () => {},
};

export default TabBarNav;