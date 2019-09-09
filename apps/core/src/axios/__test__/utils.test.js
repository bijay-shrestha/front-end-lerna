import {convertObjectToRequestParam, createPathWithPathVariable} from "../axios-helper";

describe('Utility Test', () => {
    it('should convert object parameter passed to request parameters ', () => {
        let testObject = {
            page: 1,
            size: 10
        };
        expect(convertObjectToRequestParam('testUrl', testObject)).toEqual("testUrl?page=1&size=10");
    });

    it('should create path with pathVariable and url passed ', () => {
        expect(createPathWithPathVariable('testUrl', 'testVariable')).toEqual("testUrl/testVariable");
    });
});
