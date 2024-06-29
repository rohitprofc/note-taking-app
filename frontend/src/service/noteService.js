import axios from 'axios';

const API_URL = 'http://localhost:5000/api/notes';

export const getNotes = async () => {
    return await axios.get(API_URL);
};

export const getNoteById = async (id) => {
    return await axios.get(`${API_URL}/${id}`);
};

export const createNote = async (note) => {
    return await axios.post(API_URL, note);
};

export const updateNote = async (id, note) => {
    return await axios.put(`${API_URL}/${id}`, note);
};

export const deleteNote = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};
