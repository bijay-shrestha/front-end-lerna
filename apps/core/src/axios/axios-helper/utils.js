import moxios from "moxios";
// METHOD TO CONVERT REQUEST PARAMETER OBJECT TO REQUIRED FORMAT E.g. /posts?page=1&size=10
export const convertObjectToRequestParam = (path, paramObject) => {
    let _stringParam = '';
    let _arrayOfKeyAndValue = Object.entries(paramObject);
    let _arrayLength = _arrayOfKeyAndValue.length - 1;
    _arrayOfKeyAndValue.forEach((value, key) => {
        _stringParam = _stringParam + value[0] + "=" + value[1];
        if (key !== _arrayLength) {
            _stringParam = _stringParam + "&";
        }
    });
    return path + "?" + _stringParam;
};

//TO ADD PATH VARIABLES IN URL
export const createPathWithPathVariable = (path, pathVariable) => {
    return (path + "/" + pathVariable);
};

export const mockRequestsAndAssert = params => {
    const {onSuccess, responseObject, methodType, url, headers, done, data, responseType} = params;
    moxios.wait(() => {
        let req = moxios.requests.mostRecent();
        console.log(moxios.requests.mostRecent());
        req.respondWith(responseObject).then(
            () => {
                expect(onSuccess).toHaveBeenCalled();
                expect(req.config.method).toEqual(methodType);
                expect(req.config.url).toEqual(url);
                headers && expect(req.config.headers).toEqual(headers);
                data && expect(req.config.data).toEqual(JSON.stringify(data));
                responseType && expect(req.config.responseType).toEqual(responseType);
                done();
            }
        );
    })
};


export const mockAndAssertForApiRejection = params => {
    const {errorResponse,promise,done} = params;
    moxios.wait(() => {
        let req = moxios.requests.mostRecent();
        req.reject(errorResponse);
        promise.catch(error => {
            expect(error).toBe(errorResponse.response.data);
            done();
        })
    })
};