import CRow from "../CRow";

describe('CRow Component Tests', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CRow/>);
    });

    test('if CRow Component is defined', () => {
        expect(wrapper.find('CRow')).toBeDefined();
    });

});