import moxios from 'moxios';
import axios from 'axios';
import Axios from '../axios-services';
import Headers from '../axios-helper/headers';
import {mockAndAssertForApiRejection, mockRequestsAndAssert} from "../axios-helper/utils";

describe('Testing Axios apis', () => {
    let onSuccess,
        defaultHeaders = Headers.DEFAULT_HEADER().headers,
        fileHeaders = Headers.FILE_HEADER(),
        deleteReqHeaders = Headers.DELETE_API_HEADER(),
        multiPartHeaders = Headers.MULTIPART_HEADER();
    beforeEach(() => {
        onSuccess = jest.fn();
        moxios.install();
    });

    afterEach(() => moxios.uninstall());

    it('should call `axios.get` with received path on getRaw method call',
        done => {
            Axios.getRaw('/test').then(onSuccess);
            let params = {
                onSuccess,
                responseObject: {
                    status: 200,
                    testName: "getRaw test"
                },
                methodType: 'get',
                url: '/test',
                headers: "",
                done
            };
            mockRequestsAndAssert(params);
        });

    it('should call axios.get with path and headers  when get method is invoked', done => {
        Axios.get('/test').then(onSuccess);
        let params = {
            onSuccess,
            responseObject: {
                status: 200,
                testName: "get test"
            },
            methodType: 'get',
            url: '/test',
            headers: defaultHeaders,
            done
        };
        mockRequestsAndAssert(params);
    });

    it('should call axios.get with path and pathVariable and headers when getWithPathVariables is invoked',
        done => {
            Axios.getWithPathVariables("/test", "testValue").then(onSuccess);
            let params = {
                onSuccess,
                responseObject: {
                    status: 200,
                    testName: "getWithPathVariable"
                },
                methodType: 'get',
                url: '/test/testValue',
                headers: defaultHeaders,
                done
            };
            mockRequestsAndAssert(params);
        }
    );

    it('should call axios.get with path and paramObj and headers when getWithRequestParams is invoked',
        done => {
            Axios.getWithRequestParams("/test", {name: 'axios', id: 5}).then(onSuccess);
            let params = {
                onSuccess,
                responseObject: {
                    status: 200,
                    testName: "getWithRequestParams"
                },
                methodType: 'get',
                url: '/test?name=axios&id=5',
                headers: defaultHeaders,
                done
            };
            mockRequestsAndAssert(params);
        }
    );

    it('should call axios.get with path and pagination values as request params and headers when ' +
        'getWithPagination is invoked', done => {
            Axios.getWithRequestParams("/test", {page: 1, size: 5}).then(onSuccess);
            let params = {
                onSuccess,
                responseObject: {
                    status: 200,
                    testName: "getWithPagination"
                },
                methodType: 'get',
                url: '/test?page=1&size=5',
                headers: defaultHeaders,
                done
            };
            mockRequestsAndAssert(params);
        }
    );

    it('should call axios.post with path when postRaw is invoked',
        done => {
            let data = {
                "name": "axios"
            };
            Axios.postRaw("/postTest", data).then(onSuccess);
            let params = {
                onSuccess,
                responseObject: {
                    status: 200,
                    testName: "postRaw"
                },
                methodType: 'post',
                url: '/postTest',
                headers: "",
                done,
                data
            };
            mockRequestsAndAssert(params);
        }
    );

    it('should call axios.post with path, data and header when post is invoked',
        done => {
            let data = {
                "name": "axios"
            };

            Axios.post("/postTest", data).then(onSuccess);
            let params = {
                onSuccess,
                responseObject: {
                    status: 200,
                    testName: "post"
                },
                methodType: 'post',
                url: '/postTest',
                headers: defaultHeaders,
                done,
                data
            };
            mockRequestsAndAssert(params);
        }
    );

    it('should call axios.post with path, pathVariable, data and header when postWithPathVariables is invoked',
        done => {
            let data = {
                "name": "axios"
            };

            Axios.postWithPathVariables("/postTest", "testVariable", data).then(onSuccess);
            let params = {
                onSuccess,
                responseObject: {
                    status: 200,
                    testName: "postWithPathVariables"
                },
                methodType: 'post',
                url: '/postTest/testVariable',
                headers: defaultHeaders,
                done,
                data
            };
            mockRequestsAndAssert(params);
        }
    );

    it('should call axios.post with path, paramsObj, data and header when postWithRequestParams is invoked',
        done => {
            let data = {
                "name": "axios"
            };

            Axios.postWithRequestParams("/postTest", {id: 3}, data).then(onSuccess);
            let params = {
                onSuccess,
                responseObject: {
                    status: 200,
                    testName: "postWithRequestParams"
                },
                methodType: 'post',
                url: '/postTest?id=3',
                headers: defaultHeaders,
                done,
                data
            };
            mockRequestsAndAssert(params);
        }
    );

    it('should call axios.post with path, paginationObject, data and header when postWithPagination is invoked',
        done => {
            let data = {
                "name": "axios"
            };

            Axios.postWithPagination("/postTest", {page: 3, size: 10}, data).then(onSuccess);
            let params = {
                onSuccess,
                responseObject: {
                    status: 200,
                    testName: "postWithPagination"
                },
                methodType: 'post',
                url: '/postTest?page=3&size=10',
                headers: defaultHeaders,
                done,
                data
            };
            mockRequestsAndAssert(params);
        }
    );

    it('should call axios.post with path, data and headerForFile when postForFile is invoked',
        done => {
            let data = {
                "name": "axios"
            };

            Axios.postForFile("/postTest", data).then(onSuccess);
            let params = {
                onSuccess,
                responseObject: {
                    status: 200,
                    testName: "post for file"
                },
                methodType: 'post',
                url: '/postTest',
                headers: fileHeaders.headers,
                done,
                data,
                responseType: fileHeaders.responseType
            };
            mockRequestsAndAssert(params);
        }
    );

    it('should call axios.post with path, reqParam with Object value and headerFormMultipart when postForMultipart is invoked',
        done => {
            let data = {
                "name": "axios"
            };

            const encodedData = encodeURIComponent(JSON.stringify(data));

            Axios.postForMultipart("/postTest", "request", data).then(onSuccess);
            let params = {
                onSuccess,
                responseObject: {
                    status: 200,
                    testName: "post for file"
                },
                methodType: 'post',
                url: '/postTest?request=' + encodedData,
                headers: multiPartHeaders.headers,
                done,
                encodedData
            };
            mockRequestsAndAssert(params);
        }
    );

    it('should call axios.patch with path, id, data and header when patch is invoked',
        done => {
            let data = {
                "name": "axios"
            };
            Axios.patch("/patchTest", 1, data).then(onSuccess);
            let params = {
                onSuccess,
                responseObject: {
                    status: 200,
                    testName: "patch test"
                },
                methodType: 'patch',
                url: '/patchTest/1',
                headers: defaultHeaders,
                done
            };
            mockRequestsAndAssert(params);
        }
    );

    it('should call axios.put with path, data and header when put is invoked',
        done => {
            let data = {
                "name": "axios"
            };
            Axios.put("/putTest", data).then(onSuccess);
            let params = {
                onSuccess,
                responseObject: {
                    status: 200,
                    testName: "put test"
                },
                methodType: 'put',
                url: '/putTest',
                headers: defaultHeaders,
                done
            };
            mockRequestsAndAssert(params);
        }
    );

    it('should call axios.put with path, reqParam with Object value and headerFormMultipart when putWithMultiPart is invoked',
        done => {
            let data = {
                "name": "axios"
            };

            const encodedData = encodeURIComponent(JSON.stringify(data));

            Axios.putWithMultiPart("/putTest", "request", data).then(onSuccess);
            let params = {
                onSuccess,
                responseObject: {
                    status: 200,
                    testName: "put for multipart"
                },
                methodType: 'put',
                url: '/putTest?request=' + encodedData,
                headers: multiPartHeaders.headers,
                done,
                encodedData
            };
            mockRequestsAndAssert(params);
        }
    );


    it('should call axios.delete with path and header when del is invoked',
        done => {
            let data = {
                id: 1,
                remarks: "DeleteTest"
            };
            Axios.del("/deleteTest", data).then(onSuccess);
            let params = {
                onSuccess,
                responseObject: {
                    status: 200
                },
                methodType: 'delete',
                url: '/deleteTest',
                headers: deleteReqHeaders,
                done,
                data
            };
            mockRequestsAndAssert(params);
        }
    );

    it('should handle rejection and return error data when getRaw request is rejected', done => {
        const errorResp = {
            response: {
                message: 'invalid data',
                data: 'invalid data',
                status: 400
            }
        };
        const promise = Axios.getRaw('/test');
        let paramsForTest = {
            errorResponse: errorResp,
            promise,
            done
        };
        mockAndAssertForApiRejection(paramsForTest);
    });

    it('should handle rejection and return error data when get request is rejected', done => {
        const errorResp = {
            response: {
                message: 'invalid data',
                status: 400,
                data: 'invalid data'
            }
        };
        const promise = Axios.get('/test');
        let paramsForTest = {
            errorResponse: errorResp,
            promise,
            done
        };
        mockAndAssertForApiRejection(paramsForTest);
    });

    it('should handle rejection and return error data when getWithPathVariables request is rejected', done => {
        const errorResp = {
            response: {
                message: 'invalid data',
                status: 400,
                data: 'invalid data'
            }
        };
        const promise = Axios.getWithPathVariables('/test', "1");
        let paramsForTest = {
            errorResponse: errorResp,
            promise,
            done
        };
        mockAndAssertForApiRejection(paramsForTest);
    });

    it('should handle rejection and return error data when getWithRequestParams request is rejected', done => {
        const errorResp = {
            response: {
                message: 'invalid data',
                status: 400,
                data: 'invalid data'
            }
        };
        const promise = Axios.getWithRequestParams('/test', {name: 'Sabu', id: '1'});
        let paramsForTest = {
            errorResponse: errorResp,
            promise,
            done
        };
        mockAndAssertForApiRejection(paramsForTest);
    });

    it('should handle rejection and return error data when getWithPagination request is rejected', done => {
        const errorResp = {
            response: {
                message: 'invalid data',
                status: 400,
                data: 'invalid data'
            }
        };
        const promise = Axios.getWithPagination('/test', {page: 1, size: 10});
        let paramsForTest = {
            errorResponse: errorResp,
            promise,
            done
        };
        mockAndAssertForApiRejection(paramsForTest);
    });

    it('should handle rejection and return error data when postRaw request is rejected', done => {
        const errorResp = {
            response: {
                message: 'invalid data',
                status: 400,
                data: 'invalid data'
            }
        };
        const promise = Axios.postRaw('/test', {name: 'test'});
        let paramsForTest = {
            errorResponse: errorResp,
            promise,
            done
        };
        mockAndAssertForApiRejection(paramsForTest);
    });

    it('should handle rejection and return error data when post request is rejected', done => {
        const errorResp = {
            response: {
                message: 'invalid data',
                status: 400,
                data: 'invalid data'
            }
        };
        const promise = Axios.post('/test', {name: 'test'});
        let paramsForTest = {
            errorResponse: errorResp,
            promise,
            done
        };
        mockAndAssertForApiRejection(paramsForTest);
    });

    it('should handle rejection and return error data when postWithPathVariables request is rejected', done => {
        const errorResp = {
            response: {
                message: 'invalid data',
                status: 400,
                data: 'invalid data'
            }
        };
        const promise = Axios.postWithPathVariables('/test', '1', {name: 'testData'});
        let paramsForTest = {
            errorResponse: errorResp,
            promise,
            done
        };
        mockAndAssertForApiRejection(paramsForTest);
    });

    it('should handle rejection and return error data when postWithRequestParams request is rejected', done => {
        const errorResp = {
            response: {
                status: 404,
                data: 'Not found'
            }
        };
        const promise = Axios.postWithRequestParams('/test', {testData: 'testingParam'},
            {name: 'testData'});
        let paramsForTest = {
            errorResponse: errorResp,
            promise,
            done
        };
        mockAndAssertForApiRejection(paramsForTest);
    });

    it('should handle rejection and return error data when postWithPagination request is rejected', done => {
        const errorResp = {
            response: {
                status: 404,
                data: 'Not found'
            }
        };
        const promise = Axios.postWithPagination('/test', {page: 1, size: 10},
            {name: 'testData'});
        let paramsForTest = {
            errorResponse: errorResp,
            promise,
            done
        };
        mockAndAssertForApiRejection(paramsForTest);
    });

    it('should handle rejection and return error data when postForFile request is rejected', done => {
        const errorResp = {
            response: {
                status: 404,
                data: 'Not found'
            }
        };
        const promise = Axios.postForFile('/test', {name: 'testData'});
        let paramsForTest = {
            errorResponse: errorResp,
            promise,
            done
        };
        mockAndAssertForApiRejection(paramsForTest);
    });

    it('should handle rejection and return error data when postForMultipart request is rejected', done => {
        const errorResp = {
            response: {
                status: 404,
                data: 'Not found'
            }
        };
        let data = {
            "name": "axios"
        };
        const promise = Axios.postForMultipart("/postTest", "request", data);
        let paramsForTest = {
            errorResponse: errorResp,
            promise,
            done
        };
        mockAndAssertForApiRejection(paramsForTest);
    });

    it('should handle rejection and return error data when patch request is rejected', done => {
        const errorResp = {
            response: {
                status: 404,
                data: 'Not found'
            }
        };
        const promise = Axios.patch('/test', 1, {test: "data test"});
        let paramsForTest = {
            errorResponse: errorResp,
            promise,
            done
        };
        mockAndAssertForApiRejection(paramsForTest);
    });

    it('should handle rejection and return error data when put request is rejected', done => {
        const errorResp = {
            response: {
                status: 500,
                data: 'Server Error'
            }
        };
        const promise = Axios.put('/test', {test: "data test"});
        let paramsForTest = {
            errorResponse: errorResp,
            promise,
            done
        };
        mockAndAssertForApiRejection(paramsForTest);
    });


    it('should handle rejection and return error data when put request is rejected', done => {
        const errorResp = {
            response: {
                status: 500,
                data: 'Server Error'
            }
        };
        let data = {
            "name": "axios"
        };

        const promise = Axios.putWithMultiPart("/putTest", "request", data);
        let paramsForTest = {
            errorResponse: errorResp,
            promise,
            done
        };
        mockAndAssertForApiRejection(paramsForTest);
    });

    it('should handle rejection and return error data when delete request is rejected', done => {
        const errorResp = {
            response: {
                status: 500,
                data: 'Server Error'
            }
        };
        const promise = Axios.del('/test', {id: 1, remarks: "DeleteTest"});
        let paramsForTest = {
            errorResponse: errorResp,
            promise,
            done
        };
        mockAndAssertForApiRejection(paramsForTest);
    });

});