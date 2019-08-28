import axios from "axios";
import {TryCatchHandler} from "@cogent/commons";
import {convertObjectToRequestParam, createPathWithPathVariable, Headers} from "./axios-helper";

// ********************************* START GENERIC REQUESTS ********************************//

const SERVER_DOMAIN = "";

const GET = (path, headers) => axios.get(`${SERVER_DOMAIN}${path}`, headers);

const POST = (path, data, headers) => axios.post(`${SERVER_DOMAIN}${path}`, data, headers);

const API_WRAPPER = TryCatchHandler.genericTryCatch;

const DEFAULT_HEADER = Headers.DEFAULT_HEADER();

const FILE_HEADER = Headers.FILE_HEADER();

// ********************************* END GENERIC REQUESTS **********************************//

export default {
    // ********************************* GET REQUESTS **********************************//

    getRaw: path => API_WRAPPER(axios.get(`${SERVER_DOMAIN}${path}`)),

    get: path => API_WRAPPER(GET(path, DEFAULT_HEADER)),

    getWithPathVariables: (path, pathVariable) => API_WRAPPER(GET(createPathWithPathVariable(path, pathVariable), DEFAULT_HEADER)),

    getWithRequestParams: (path, paramsObj) => API_WRAPPER(GET(convertObjectToRequestParam(path, paramsObj), DEFAULT_HEADER)),

    getWithPagination: (path, paginationObject) => API_WRAPPER(GET(convertObjectToRequestParam(path, paginationObject), DEFAULT_HEADER)),

    // ********************************* END GET REQUESTS *******************************//

    // ********************************* POST REQUESTS **********************************//

    postRaw: (path, data) => API_WRAPPER(axios.post(`${SERVER_DOMAIN}${path}`, data)),

    post: (path, data) => API_WRAPPER(POST(path, data, DEFAULT_HEADER)),

    postWithPathVariables: (path, pathVariable, data) => API_WRAPPER(POST(createPathWithPathVariable(path, pathVariable), data, DEFAULT_HEADER)),

    postWithRequestParams: (path, paramsObj, data) => API_WRAPPER(POST(convertObjectToRequestParam(path, paramsObj), data, DEFAULT_HEADER)),

    postWithPagination: (path, paginationObject, data) => API_WRAPPER(POST(convertObjectToRequestParam(path, paginationObject), data, DEFAULT_HEADER)),

    postForFile: (path, data) => API_WRAPPER(POST(path, data, FILE_HEADER)),


    // ********************************* END POST REQUESTS *******************************//

    // ********************************* PATCH REQUESTS **********************************//

    patch: (path, id) => API_WRAPPER(axios.patch(`${SERVER_DOMAIN}${createPathWithPathVariable(path, id)}`, DEFAULT_HEADER)),

    // ********************************* END PATCH REQUESTS *******************************//

    // ********************************* DELETE REQUESTS **********************************//

    del: (path) => API_WRAPPER(axios.delete(`${SERVER_DOMAIN}${path}`, DEFAULT_HEADER))

    // ********************************* END DELETE REQUESTS ******************************//
}