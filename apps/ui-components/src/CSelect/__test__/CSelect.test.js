import CSelect from '../CSelect';

describe('CSelect tests', () => {
    let sWrapper, mWrapper, mockFunction;

    describe('Select Component tests', () => {

        beforeEach(() => {
            sWrapper = shallow(<CSelect/>);
        });

        test('if CSelect component is defined',()=>{
           expect(sWrapper).toBeDefined();
        });
    });

});