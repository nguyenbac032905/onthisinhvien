import { get,post } from "../untils/request";

export const getListAnswer = async (id) => {
    const result = await get(`answers?useId=${id}`);
    return result;
};

export const getAnswer = async (id) => {
    const result = await get(`answers/${id}`);
    return result;
};

export const postListAnswers = async (options) => {
    const result = await post(`answers`,options);
    return result;
};