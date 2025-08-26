import { get } from "../untils/request";

export const getListQuestion = async (id) => {
    const result = await get(`questions?topicId=${id}`);
    return result;
};