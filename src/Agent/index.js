
import axios from 'axios'
import config from '../config';
import confAPI from '../config/confAPI';

const instance = axios.create({
    baseURL : config.baseURL,
    headers: {
        'content-type': 'application/json',
    },
});

const Agent = {
    get: (key, parameters = {}) => {
        return instance({
            'method': 'GET',
            'url': confAPI[key].url,
            'params': parameters
        });
    },

    post: (key, data) => {
        return instance({
            'method': 'POST',
            'url': confAPI[key].url,
            'data': data,
            'headers': { 'content-type': 'application/json' }
        });
    }

}


export default Agent;