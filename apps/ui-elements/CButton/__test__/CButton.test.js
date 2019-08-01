import CButton from '../CButton';

describe('CButton Component', () => {
    let wrapper, wrapper1;
    beforeEach(() => {
        wrapper = shallow(<CButton id="c-button"/>)
        wrapper1 = mount(<CButton id="c-button"/>)
    });
    afterEach(() => {
        wrapper1.unmount()
    })
    it('should be defined', () => {
        expect(wrapper).toBeDefined();
    });

    it('should have only one button', () => {
        expect(wrapper.find('#c-button')).toHaveLength(1);
    });

    it('should have show name of button when props name is given', () => {
        wrapper.setProps({name: 'Submit'});
        expect(wrapper.find('#c-button').text()).toBe('Submit')
    })

    it('should show default name of button when props name is not given', () => {
        expect(wrapper.find('#c-button').text()).toBe('Save');
    });

    it('should have type button when props type is not given', () => {
        expect(wrapper.find('#c-button').prop('type')).toBe('button');
    });


});