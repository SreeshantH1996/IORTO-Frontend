import Axios from 'axios';
// import store from '@/store'

const config = {
    headers: {
        // 'Access-Control-Request-Header': '*',
        // 'Authorization': 'Bearer ' + user.token,
    },
};

export default class BaseService {

    public get(url: any) {
        this.addToken();
        return Axios.get(url, config);
    }

    public getById(url: any, id: number) {
        this.addToken();
        return Axios.get(`${url}/${id}`, config);
    }

    public post(url: any, object: any) {
        this.addToken();
        return Axios.post(url, object, config);
    }

    public put(url: any, id: number, object: any) {
        this.addToken();
        return Axios.put(`${url}/${id}`, object, config);
    }

    public patch(url: any, object: any) {
        this.addToken();
        return Axios.patch(url, object, config);
    }

    public delete(url: any, id: number) {
        this.addToken();
        return Axios.delete(`${url}/${id}`, config);
    }

    private addToken() {
        const storeUser = localStorage.getItem('user');
        if (storeUser) {
            const user = JSON.parse(storeUser);
            if (user) {
                const token = 'Token ' + user.token;
                config.headers = { 'Authorization': token };
            }
        }
    }
}

// Axios.interceptors.response.use(function (response) {
//     return response;
// }, (function (err) {
//     if (err.response.status == 401) {
//         store.commit('logout');
//     } else {
//         return err.response;
//     }
// }))
