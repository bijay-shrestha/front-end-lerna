import CFeedback from "../CFeedback";

describe('CFeedback Component Tests', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CFeedback/>);
    });

    test('if CFeedback Component is defined', () => {
        expect(wrapper.find('CFeedback')).toBeDefined();
    });

});