import fetch from 'isomorphic-fetch';

//Request to the server to get the result
export const triggerRequest = (url = 'www.infotrack.com.au', keywords = 'online title search', successCallback, errorCallback) => {

    return fetch(`/home/getsearchresult?url=${url}&keywords=${keywords}`)
        .then((response) => {
            return response.json();
        })
        .then((result) => {

            if (successCallback)
                successCallback(result);
            else
                return result;

        })
        .catch((error) => {

            if (errorCallback)
                errorCallback(error);
            else
                return `Error in the request: /home/getsearchresult?url=${url}&keywords=${keywords}`;
        });
}