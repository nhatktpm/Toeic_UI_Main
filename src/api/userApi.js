import axiosClient from "./axiosClient";

const userApi = {
    getAll(params) {
        const url = '/user';
        return axiosClient.get(url, { params });

    },
    get(id) {
        const url = `/user/${id}`;
        return axiosClient.get(url); 
    },    
    confirm(data) {
        const url = `/auth/confirm-email`;
        return axiosClient.post(url,data); 
    },
    login(data) {
        const url = '/auth/login';
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = '/user/';
        return axiosClient.put(url, data);
    },
    remove(id) {
        const url = `/user/${id}`;
        return axiosClient.delete(url);
    }
};

export default userApi;