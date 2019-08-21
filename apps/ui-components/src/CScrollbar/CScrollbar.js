import React, {PureComponent} from 'react';
import {Scrollbars} from 'react-custom-scrollbars';

class CScrollbar extends PureComponent {

    render() {
        const {id} = this.props;
        return (
            <Scrollbars id={"scrollbar_".concat(id)}>
            </Scrollbars>
        )
    }
}

export default CScrollbar;