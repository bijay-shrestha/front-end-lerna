import React from 'react';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

const CModal = props => {
    const {
        modalHeading,
        animation,
        autoFocus,
        backdrop,
        backdropClassName,
        centered,
        container,
        dialogAs,
        dialogClassName,
        enforceFocus,
        keyboard,
        manager,
        onEnter,
        onEntered,
        onEntering,
        onEscapeKeyDown,
        onExit,
        onExited,
        onExiting,
        onHide,
        onShow,
        restoreFocus,
        scrollable,
        show,
        size,
        bsPrefix,
        closeButton,
        closeLabel,
        bsPrefixHeader,
        asTitle,
        bsPrefixTitle,
        asBody,
        bsPrefixBody,
        bodyChildren,
        footerAs,
        bsPrefixFooter,
        footerChildren
    } = props;
    return (
        <Modal
            id="modal"
            animation={animation}
            autoFocus={autoFocus}
            backdrop={backdrop}
            backdropClassName={backdropClassName}
            centered={centered}
            container={container}
            dialogAs={dialogAs}
            dialogClassName={dialogClassName}
            enforceFocus={enforceFocus}
            keyboard={keyboard}
            manager={manager}
            onEnter={onEnter}
            onEntered={onEntered}
            onEntering={onEntering}
            onEscapeKeyDown={onEscapeKeyDown}
            onExit={onExit}
            onExited={onExited}
            onExiting={onExiting}
            onHide={onHide}
            onShow={onShow}
            restoreFocus={restoreFocus}
            scrollable={scrollable}
            show={show}
            size={size}
            bsPrefix={bsPrefix}>

            <Modal.Header
                id="modal-header"
                closeButton={closeButton}
                closeLabel={closeLabel}
                bsPrefix={bsPrefixHeader}>
                <Modal.Title
                    id="title"
                    as={asTitle}
                    bsPrefix={bsPrefixTitle}>
                    {modalHeading}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body
                id="modal-body"
                as={asBody}
                bsPrefix={bsPrefixBody}
                children={bodyChildren}
            >
            </Modal.Body>
            <Modal.Footer
                id="modal-footer"
                as={footerAs}
                bsPrefix={bsPrefixFooter}
                children={footerChildren}
            >
            </Modal.Footer>

        </Modal>
    );
};

CModal.defaultProps = {
    centered: true,
    closeButton: true
};

CModal.propTypes = {
    id: PropTypes.string,
    animation: PropTypes.bool,
    autoFocus: PropTypes.bool,
    backdrop: PropTypes.bool || PropTypes.string,
    backdropClassName: PropTypes.string,
    centered: PropTypes.bool,
    container: PropTypes.any,
    dialogAs: PropTypes.elementType,
    dialogClassName: PropTypes.string,
    enforceFocus: PropTypes.bool,
    keyboard: PropTypes.bool,
    manager: PropTypes.object,
    onEnter: PropTypes.func,
    onEntered: PropTypes.func,
    onEntering: PropTypes.func,
    onEscapeKeyDown: PropTypes.func,
    onExit: PropTypes.func,
    onExited: PropTypes.func,
    onExiting: PropTypes.func,
    onHide: PropTypes.func,
    onShow: PropTypes.func,
    restoreFocus: PropTypes.bool,
    scrollable: PropTypes.bool,
    show: PropTypes.bool,
    size: PropTypes.string,//sm lg xl
    bsPrefix: PropTypes.string,
    closeButton: PropTypes.bool,
    closeLabel: PropTypes.string,
    bsPrefixHeader: PropTypes.string,
    asTitle: PropTypes.elementType,
    bsPrefixTitle: PropTypes.string,
    asBody: PropTypes.elementType,
    bsPrefixBody: PropTypes.string,
    footerAs: PropTypes.elementType,
    bsPrefixFooter: PropTypes.string
};

export default CModal;