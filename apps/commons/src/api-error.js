export default {
    errorHandler: error => {
        const {status} = error.response;
        switch (status) {
            case 400:
            case 401:
            case 403:
            case 404:
            case 409:
            case 417:
            case 500:
            case 502:
                console.log("Error Handler says:", error);
                throw error.response.data;
            default:
                console.log("Error Handler says:", error);
                let errorObj = {
                    errorMsg: error.message,
                    stack: error.stack
                };
                throw errorObj;
        }
    }

}
