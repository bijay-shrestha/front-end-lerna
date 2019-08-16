import CFControl from "../CFControl";


describe('CFControl Component Tests', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CFControl/>);
    });

    test('if CFControl Component is defined', () => {
        expect(wrapper.find('CFControl')).toBeDefined();
    });

});