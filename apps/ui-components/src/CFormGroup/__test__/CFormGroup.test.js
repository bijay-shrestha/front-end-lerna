import CFormGroup from "../CFormGroup";

describe('CFormGroup Component Tests', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CFormGroup/>);
    });

    test('if CFormGroup Component is defined', () => {
        expect(wrapper.find('CFormGroup')).toBeDefined();
    });

});