import axiosClient from "./axiosClient";

const listTopicAPI = {
    getAll(id) {
        const url = `/admin/question-1/${id}`;
        return axiosClient.get(url);
    },
    get(params) {
        const url = `/admin/question-1/detail/${params}`;
        return axiosClient.get(url, { params });

    },
    add(id,data) {
        const url = `/admin/question-1/${id}`;
        return axiosClient.post(url, data);
    },
    update(params, data) {
        const url = `/admin/question-1/${params}`;
        return axiosClient.put(url, data);
    },
    remove(id) {
        const url = `/admin/question-1/${id}`;
        return axiosClient.delete(url);
    }
};

export default listTopicAPI;