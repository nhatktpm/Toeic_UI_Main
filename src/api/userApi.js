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
    add(data) {
        const url = '/user';
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