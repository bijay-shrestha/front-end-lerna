import CModal from '../CModal';

expect.addSnapshotSerializer(enzymeSerializer);

describe('CModal Tests', () => {
    let sWrapper, mockFunction;
    beforeEach(() => {
        mockFunction = jest.fn();
        sWrapper = shallow(<CModal/>);
    });

    test('if CModal is defined', () => {
        expect(sWrapper).toBeDefined();
    });

    describe('Modal Tests', () => {
        test('if has one Modal element', () => {
            expect(sWrapper.find('#modal').length).toEqual(1);
        });

        test('if Modal has all required props', () => {
            let propRequired = [
                'id',
                'animation',
                'autoFocus',
                'backdrop',
                'backdropClassName',
                'centered',
                'container',
                'dialogAs',
                'dialogClassName',
                'enforceFocus',
                'keyboard',
                'manager',
                'onEnter',
                'onEntered',
                'onEntering',
                'onEscapeKeyDown',
                'onExit',
                'onExited',
                'onExiting',
                'onHide',
                'onShow',
                'restoreFocus',
                'scrollable',
                'show',
                'size',
                'bsPrefix'
            ];

            let propsForModal = Object.keys(sWrapper.find('#modal').props());
            propRequired.forEach((propAvail, i) => (
                expect(propAvail).toContain(propsForModal[i])
            ));
        });

        test('if centered props has non empty value', () => {
            expect(sWrapper.find('#modal').prop('centered')).not.toEqual('');
        })
    });


    describe('Modal.Header Tests', () => {
        test('if one Modal.Header element is defined', () => {
            expect(sWrapper.find('#modal-header')).toBeDefined();
            expect(sWrapper.find('#modal-header').length).toBe(1);
        });

        test('if Modal.Header contains required props', () => {
            let propRequired = [
                'id',
                'closeButton',
                'closeLabel',
                'bsPrefix'
            ];

            let propsOfModalHeader = Object.keys(sWrapper.find('#modal-header').props());
            propRequired.forEach((propAvail, i) => (
                expect(propAvail).toContain(propsOfModalHeader[i])
            ));
        });

        test('if closeButton props has non empty value', () => {
            expect(sWrapper.find('#modal-header').prop('closeButton')).not.toEqual('');
        });

    });

    describe('Modal.Title Tests', () => {
        test('if one Modal.Title element is defined', () => {
            expect(sWrapper.find('#title')).toBeDefined();
            expect(sWrapper.find('#title').length).toBe(1);
        });

        test('if Modal.title contains required props', () => {
            let propRequired = [
                'id',
                'as',
                'bsPrefix'
            ];
            let propsOfModalTitle = Object.keys(sWrapper.find('#title').props());
            propRequired.forEach((propAvail, i) => (
                expect(propAvail).toContain(propsOfModalTitle[i])
            ));
        });
    });

    describe('Modal.Body Tests', () => {
        test('if one Modal.Body element is defined', () => {
            expect(sWrapper.find('#modal-body')).toBeDefined();
            expect(sWrapper.find('#modal-body').length).toBe(1);
        });

        test('if Modal.Body contains required props', () => {
            let propRequired = [
                'id',
                'as',
                'bsPrefix',
                'children'
            ];

            let propsOfModalBody = Object.keys(sWrapper.find('#modal-body').props());
            propRequired.forEach((propAvail, i) => (
                expect(propAvail).toContain(propsOfModalBody[i])
            ));
        });
    });

    describe('Modal.Footer Tests', () => {
        test('if one Modal.Footer element is defined', () => {
            expect(sWrapper.find('#modal-footer')).toBeDefined();
            expect(sWrapper.find('#modal-footer').length).toBe(1);
        });

        test('if Modal.Footer contains required props', () => {
            let propRequired = [
                'id',
                'as',
                'bsPrefix',
                'children'
            ];

            let propsOfModalBody = Object.keys(sWrapper.find('#modal-footer').props());
            propRequired.forEach((propAvail, i) => (
                expect(propAvail).toContain(propsOfModalBody[i])
            ));
        });
    });


    describe('Snapshot Testing', () => {
        it('should match snapshot', () => {
            expect(sWrapper).toMatchSnapshot();
        })
    });

});