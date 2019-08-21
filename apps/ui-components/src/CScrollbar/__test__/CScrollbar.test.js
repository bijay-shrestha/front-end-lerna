import CScrollbar from "../CScrollbar";

expect.addSnapshotSerializer(enzymeSerializer);

describe('CScrollbar Tests', () => {
    let sWrapper, mockFunction;

    beforeEach(() => {
        sWrapper = shallow(<CScrollbar id="test"/>);
    });

    it('should be defined', () => {
        expect(sWrapper.find('CScrollbar')).toBeDefined();
    });

    it('should contain one Scrollbar component', () => {
        expect(sWrapper.find('#scrollbar_test').length).toBe(1);
    });

    // it('should ', () => {
    //
    // });

    // describe('Snapshot Testing', () => {
    //     it('should match snapshot', () => {
    //         expect(sWrapper).toMatchSnapshot();
    //     })
    // });
});