import axiosClient from "./axiosClient";

const listQuestionAPI = {
    getAll(id) {
        const url = `/admin/question-1/${id}`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/admin/question-1/detail/${id}`;
        return axiosClient.get(url, id);

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

export default listQuestionAPI;