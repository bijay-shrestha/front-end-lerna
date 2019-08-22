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

    it('should have all props available', () => {
        let propsAvailable = [
            'autoHeight',
            'autoHeightMax',
            'autoHeightMin',
            'autoHide',
            'autoHideDuration',
            'autoHideTimeout',
            'children',
            'hideTracksWhenNotNeeded',
            'id',
            'onScroll',
            'onScrollFrame',
            'onScrollStart',
            'onScrollStop',
            'onUpdate',
            'renderThumbHorizontal',
            'renderThumbVertical',
            'renderTrackHorizontal',
            'renderTrackVertical',
            'renderView',
            'thumbMinSize',
            'thumbSize',
            'universal',
        ];
        let propsOfScrollbar = Object.keys(sWrapper.find('#scrollbar_test').props());
        propsAvailable.forEach((propAvail, i) => (
            expect(propAvail).toContain(propsOfScrollbar[i])
        ));
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