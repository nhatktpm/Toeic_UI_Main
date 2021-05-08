import axiosClient from "./axiosClient";

const detailTestApi = {
    getAll(params) {
        const url = '/admin/part';
        return axiosClient.get(url, { params });

    },
    get(id) {
        const url = `/detail_test/${id}`;
        return axiosClient.get(url); 
    },
    add(data) {
        const url = '/detail_test';
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = '/detail_test/';
        return axiosClient.put(url, data);
    },
    remove(id) {
        const url = `/detail_test/${id}`;
        return axiosClient.delete(url);
    }
};

export default detailTestApi;