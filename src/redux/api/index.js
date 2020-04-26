import axios from 'axios';

const baseURL = 'https://mfwkweb-api.clarovideo.net/services';
//'http://www.omdbapi.com/?apikey=7be47e0c';

export const apiCall = (url,data,headers, metod)=>axios({
    metod,
    url: baseURL + url,
    data,
    headers
});
