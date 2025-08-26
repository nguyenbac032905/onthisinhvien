import { get } from "../untils/request";

export const getListTopic = async (schoolId,keyword) => {
    if(schoolId) {
        const result = await get(`topics?schoolId=${schoolId}&name_like=${keyword}`);
        return result;
    }
     else{
        const result = await get(`topics?name_like=${keyword}`);
        return result;
    }
};

export const getFullTopic = async () => {
    const result = await get(`topics`);
    return result;
};

export const getTopic = async (id) => {
    const result = await get(`topics?id=${id}`);
    return result;
};