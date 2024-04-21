import axiosInstance from "../utils/axios";

const getGameById = async (id) => {
    const res = await axiosInstance.get('/games/' + id)
    return res.data;
}

const getAllGames = async () => {
    const res = await axiosInstance.get('/games');
    return res.data;
}

const deleteGame = async (id) => {
    const res = await axiosInstance.delete('/games/' + id);
    return res.data;
}

const updateGame = async (id, game) => {
    const res = await axiosInstance.put('/games/' + id);
    return res.data;
}

const createGame = async (game) => {
    const res = await axiosInstance.post('/games');
    return res.data;
}


export default {
    getGameById,
    getAllGames,
    createGame,
    deleteGame,
    updateGame
}