import React, {PureComponent} from 'react';
import {CButton, CModal} from "@cogent/ui-components";

class ModalTestComponent extends PureComponent {

    state = {
        showModal: false
    };

    setShowModal = () => {
        this.setState({showModal: !this.state.showModal});
    };

    render() {
        let footerButton = <CButton id="sabu" name="Sabu"/>;
        let body = <> <h1>This is Modal body</h1><CButton id="sauravi" name="sauravi"/></>;
        return (
            <>
                <CButton id="modal" name="Open Modal" onClickHandler={this.setShowModal}/>
                <CModal show={this.state.showModal}
                        modalHeading="Modal Smriti"
                        size="md"
                        bodyChildren={body}
                        footerChildren={footerButton}
                        onHide={this.setShowModal}
                />
            </>
        );
    }
}

export default ModalTestComponent;