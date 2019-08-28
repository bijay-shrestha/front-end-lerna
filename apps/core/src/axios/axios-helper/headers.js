export default {
    DEFAULT_HEADER: () => {
        return {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'ABCDEFGHIJKL'
            },
        }
    },
    FILE_HEADER: () => {
        return {
            responseType: 'arraybuffer',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        };
    }
}