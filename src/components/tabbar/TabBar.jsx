import React, {Component} from 'react';
import classNames from 'classnames';
import {connect} from "react-redux";

import TabBarNav from './TabBarNav';

import store from "../../store";
import {act_activeTab} from "../../actions/actionsCreator";


class TabBar extends Component {

    componentDidMount() {
        const pathname = window.location.pathname.match(/[a-z]+/);
        const activeTab = (!pathname) ? 'home' : pathname[0];

        this.setActiveTab(activeTab);
    };

    getChildrenLabel = (children) => children.map( ({props}) => props.children );

    setActiveTab = (activeTab) => {
        const { activeTab: currentTab } = this.props;

        if (currentTab !== activeTab) {
            store.dispatch(act_activeTab(activeTab));
        }
    };

    render() {
        const { children = [], activeTab } = this.props;

        const renderTabs = this.getChildrenLabel(children).map((navLabel, i) => (
            <TabBarNav
                key={navLabel}
                navLabel={navLabel}
                className={ classNames({active: activeTab === navLabel}) }
                onChangeActiveTab={this.setActiveTab}
            >
                { children[i] }
            </TabBarNav>
        ));

        return (
            <nav className='tab-bar-nav'>
                { renderTabs }
            </nav>
        )
    }
}

const mapStateToProps = (state) => (
    {
        activeTab: state.activeTab
    }
);

export default connect(mapStateToProps)(TabBar);