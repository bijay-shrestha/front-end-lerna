import CFLabel from "../CFLabel";

expect.addSnapshotSerializer(enzymeSerializer);

describe('CFLabel Component Tests', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CFLabel id="test" labelName="test"/>);
    });

    test('if CFLabel Component is defined', () => {
        expect(wrapper.find('CFLabel')).toBeDefined();
    });

    test('if Form.Label component is defined', () => {
        expect(wrapper.find('#label_test').length).toBe(1);
    });

    test('if Form.Label component has a label name', () => {
        expect(wrapper.find('#label_test').text()).not.toBe("");
    });

    test('if all props required for Form.Label component are defined', () => {
        let propRequired = [
            '_ref',
            'as',
            'bsPrefix',
            'column',
            'htmlFor',
            'id',
            'srOnly'
        ];
        let propsOfFormLabel = Object.keys(wrapper.find('#label_test').props());
        propRequired.forEach((propAvail, i) => (
            expect(propAvail).toContain(propsOfFormLabel[i])
        ));
    });

    test('if `sm` prop is used only with column prop', () => {
        wrapper.setProps({
            column: true,
            sm: 4
        });
        expect(wrapper.find('#label_test').prop('sm')).toBe(4);

    });

    test('if  `md` props is used only with column prop', () => {
        wrapper.setProps({
            column: true,
            md: 4
        });
        expect(wrapper.find('#label_test').prop('md')).toBe(4);
    });

    test('if `lg` prop is used only with column prop', () => {
        wrapper.setProps({
            column: true,
            lg: 4
        });
        expect(wrapper.find('#label_test').prop('lg')).toBe(4);

    });

    test('if `xl` prop is used only with column prop', () => {
        wrapper.setProps({
            column: true,
            xl: 4
        });
        expect(wrapper.find('#label_test').prop('xl')).toBe(4);

    });

    describe('Snapshot Testing', () => {
        test('if matches snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        })
    });
});