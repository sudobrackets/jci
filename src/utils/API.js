import { NetInfo } from 'react-native'
import { services } from './services';

const APP_TYPE = 1;
const PRODUCTION_BASE_URL = 'https://jcierode.in/';
const DEVELOPMENT_BASE_URL = 'https://jcierode.in/';

const URL = APP_TYPE == 1 ? PRODUCTION_BASE_URL : DEVELOPMENT_BASE_URL;

export const POST = (sub_url_key, bodyData, callback) => {
    var sub_url = services[sub_url_key];
    var base_url = URL + sub_url
    var data = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData)
    }
    console.log(base_url,data)

    return fetch(base_url, data).then((response) => {
        return response.json();
    }).then((responseData) => {
        console.log('responseData ',responseData)

        if (responseData.statusCode == 200) {
            callback('success', responseData.result);
        } else {
            callback('error', responseData.message);
        }
    }).catch((e) => {
        callback('error', e);
        console.log(e)
    })
}
export const GET = (sub_url_key, bodyData) => {
    var sub_url = services.sub_url_key;
    var base_url = URL + sub_url;
    // console.log('DELETE_METHOD', base_url, JSON.stringify(bodyData))

    var data = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    }
    console.log('GET_METHOD', base_url, JSON.stringify(data))
    return fetch(base_url, data).then(res => res.json());
}