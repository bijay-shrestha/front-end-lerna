import React, {PureComponent} from 'react';
import Proptypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

class CTabs extends PureComponent {

    state = {
        activeTabKey: ''
    };


    setActiveTabKey = value => this.setState({activeTabKey: value});

    getCurrentUrlAndSetActiveTab = () => {
        this.setActiveTabKey(this.props.location.pathname);
    };

    handleTabSelect = async path => {
        await this.setActiveTabKey(path);
        this.props.history.push(path);
    };

    componentDidMount() {
        this.getCurrentUrlAndSetActiveTab();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.history) {
            const newPath = prevProps.history.location.pathname;
            const oldPath = prevProps.location.pathname;
            if (newPath !== oldPath) {
                this.setActiveTabKey(newPath);
            } else {
                return false
            }
        } else {
            return false
        }

    }

    getTabElements = tab => (
        <Tab
            id={"tab_" + tab.id}
            key={"tab_" + tab.id}
            title={tab.name}
            eventKey={tab.path}
        >
            {tab.content}
        </Tab>
    );

    render() {
        const
            {
                id,
                mountOnEnter,
                transition,
                unmountOnExit,
                variant,
                data
            } = this.props;

        return (
            <Tabs
                id={id}
                activeKey={this.state.activeTabKey}
                mountOnEnter={mountOnEnter}
                transition={transition}
                unmountOnExit={unmountOnExit}
                variant={variant}
                onSelect={path => this.handleTabSelect(path)}
            >
                {data.map(tab =>
                    this.getTabElements(tab)
                )}
            </Tabs>);
    }
}

CTabs.defaultProps = {
    location: {pathname: '/'},
    history: {location: {pathname: '/'}}
};

React.propTypes = {
    data: Proptypes.array.isRequired,
    id: Proptypes.string,
    activeKey: Proptypes.string,
    mountOnEnter: Proptypes.bool,
    onSelect: Proptypes.func.isRequired,
    transition: Proptypes.bool,
    unmountOnExit: Proptypes.bool,
    variant: Proptypes.string, // variant = tabs or pills
    title: Proptypes.string.isRequired,
    eventKey: Proptypes.string.isRequired
};

export default withRouter(CTabs);