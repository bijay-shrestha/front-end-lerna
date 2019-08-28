import axios from 'axios';
import {ApiError} from "@cogent/commons";

axios.defaults.baseURL = "";

axios.interceptors.request.use(
    requestConfig => {
        // requestConfig.headers.Authorization = token;
        // requestConfig.headers.Origin = "url Of Other Domain";
        console.log("Request Interceptor", requestConfig);
        return requestConfig;
    }, error => {
        return ApiError.errorHandler(error);
    }
);

axios.interceptors.response.use(
    response => {
        // TO STORE THE JWT TOKEN FROM RESPONSE
        // let jwtToken = response.headers.Authorization;
        console.log("Response Interceptor", response);
        return response;
    }, error => {
        return ApiError.errorHandler(error);
    }
);

export default Interceptor;