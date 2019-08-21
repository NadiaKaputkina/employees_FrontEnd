import {
    act_getDataFromDatabaseEmp,
    act_getDataFromDatabasePos
} from '../actions/actionsCreator';

import store from '../store';


class APIService {
    static fetchData(url) {
        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then( resData => {
                if (url === '/employees') {
                    store.dispatch(act_getDataFromDatabaseEmp(resData));
                }
                if (url === '/positions') {
                    store.dispatch(act_getDataFromDatabasePos(resData));
                }
            })
            .catch((err) => {
                console.log('Error fetching or parsing dataEmp', err);
            });
    }

    static post(url, data) {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(resData => {
                if (url === '/employees') {
                    store.dispatch(act_getDataFromDatabaseEmp(resData));
                }
                if (url === '/positions') {
                    store.dispatch(act_getDataFromDatabasePos(resData));
                }
            })
            .catch(err => console.log('Error', err));
    }

    static put(url, data) {
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(resData => {
                if (url === '/employees') {
                    store.dispatch(act_getDataFromDatabaseEmp(resData));
                }
                if (url === '/positions') {
                    store.dispatch(act_getDataFromDatabasePos(resData));
                }
            })
            .catch(err => console.log('Error', err));
    }

    static delete(url, data) {
        fetch(url, {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(resData => {
                if (url === '/employees') {
                    store.dispatch(act_getDataFromDatabaseEmp(resData));
                }
                if (url === '/positions') {
                    store.dispatch(act_getDataFromDatabasePos(resData));
                }
            })
            .catch(err => console.log('Error', err));
    }

}

export default APIService;
