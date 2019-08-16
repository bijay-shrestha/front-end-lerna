import CFLabel from "../CFLabel";

describe('CFLabel Component Tests', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CFLabel/>);
    });

    test('if CFLabel Component is defined', () => {
        expect(wrapper.find('CFLabel')).toBeDefined();
    });

});