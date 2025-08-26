import {get} from "../untils/request"
export const getListFeedback = async () => {
    const result = await get(`feedbacks`);
    return result;
};
