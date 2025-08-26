import { get, path } from '../untils/request';

export const getListUser= async (id) => {
    const result = await get(`users/${id}`);
    return result;
};

export const editUser= async (id,option) => {
    const result = await path(`users/${id}`,option);
    return result;
};