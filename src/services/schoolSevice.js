import {get} from "../untils/request"
export const getListSchool = async (keyword) => {
    const result = await get(`schools?name_like=${keyword}`);
    return result;
};

export const getAllSchool = async () => {
    const result = await get(`schools`);
    return result;
};

