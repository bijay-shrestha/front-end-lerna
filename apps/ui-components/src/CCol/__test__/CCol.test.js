import CCol from "../CCol";

describe('CCol Component Tests', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CCol/>);
    });

    test('if CCol Component is defined', () => {
        expect(wrapper.find('CCol')).toBeDefined();
    });

});