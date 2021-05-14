import axiosClient from "./axiosClient";

const listTopicAPI = {
    getAll(id) {
        const url = `/admin/topic-1/${id}`;
        return axiosClient.get(url);
    },
    get(params) {
        const url = `/admin/topic-1/detail/${params}`;
        return axiosClient.get(url, { params });

    },
    add(data) {
        const url = '/admin/topic-1';
        return axiosClient.post(url, data);
    },
    update(params, data) {
        const url = `/admin/topic-1/${params}`;
        return axiosClient.put(url, data);
    },
    remove(id) {
        const url = `/admin/topic-1/${id}`;
        return axiosClient.delete(url);
    },
    deleteSoft(id) {
        const url = `/admin/topic-1/${id}`;
        return axiosClient.post(url);
    },
    restore(id ) {
        const url = `/admin/topic/${id}`;
        return axiosClient.patch(url);
    },
    getStrash() {
        const url = 'admin/topic/trash';
        return axiosClient.get(url);
    }
};

export default listTopicAPI;