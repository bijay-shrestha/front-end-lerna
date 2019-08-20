import CFControl from "../CFControl";

expect.addSnapshotSerializer(enzymeSerializer);

describe('CFControl Component Tests', () => {

    let wrapper, mockFunction;
    beforeEach(() => {
        mockFunction = jest.fn();
        wrapper = shallow(<CFControl id="test" onChange={mockFunction}/>);
    });

    it('should be defined', () => {
        expect(wrapper.find('CFControl')).toBeDefined();
    });

    it('should have only one Form.Control component', () => {
        expect(wrapper.find('#fControl_test').length).toBe(1);
    });

    it('should have all props available', () => {
        let propsAvailable = [
            '_ref',
            'as',
            'autoComplete',
            'bsPrefix',
            'children',
            'defaultValue',
            'disabled',
            'id',
            'isInvalid',
            'isValid',
            'multiple',
            'name',
            'onChange',
            'placeholder',
            'plaintext',
            'readOnly',
            'required',
            'rows',
            'size',
            'type',
            'value',
        ];
        let propsOfFormLabel = Object.keys(wrapper.find('#fControl_test').props());
        propsAvailable.forEach((propAvail, i) => (
            expect(propAvail).toContain(propsOfFormLabel[i])
        ));
    });

    it('should call event handler function onChange', () => {
        wrapper.simulate('change');
        expect(mockFunction).toHaveBeenCalled();
    });

    describe('Snapshot Testing', () => {
        it('should match snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        })
    });

});