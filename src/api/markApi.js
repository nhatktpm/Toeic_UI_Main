import axiosClient from "./axiosClient";

const markAPI = {
    getAll(id) {
        const url = `/admin/question-1/${id}`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/admin/question-1/detail/${id}`;
        return axiosClient.get(url, id);

    },
    add(id,data) {
        const url = `/user/mark/${id}`;
        return axiosClient.post(url, data);
    }
};

export default markAPI;