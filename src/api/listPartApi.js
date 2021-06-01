import axiosClient from "./axiosClient";

const listPartApi = {
    getAll(params) {
        const url = '/admin/part';
        return axiosClient.get(url, { params });

    },
    get(id) {
        const url = `/admin/part/${id}`;
        return axiosClient.get(url);
    },
    update(id, data) {
        const url = `admin/part/${id}`;
        return axiosClient.put(url, data);
    }
};

export default listPartApi;