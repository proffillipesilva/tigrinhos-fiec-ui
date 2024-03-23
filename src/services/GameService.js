import axiosInstance from "../utils/axios";

const getGameById = async (id) => {
    const res = await axiosInstance.get('/games/' + id)
    return res.data;
}

const getAllGames = async () => {
    const res = await axiosInstance.get('/games');
    return res.data;
}


export default {
    getGameById,
    getAllGames
}