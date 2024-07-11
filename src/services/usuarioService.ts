import api from './api';
import { Usuario } from '../models/Usuario';

export const getUsuario = async () => {
    const response = await api.get('/usuario');
    return response.data;
};

export const getUsuarioById = async (id: number) => {
    const response = await api.get(`/usuario/${id}`);
    return response.data;
};

export const createUsuario = async (usuario: Usuario) => {
    const response = await api.post('/usuario', usuario);
    return response.data;
};

export const updateUsuario = async (id: number, usuario: Usuario) => {
    const response = await api.put(`/usuario/${id}`, usuario);
    return response.data;
};

export const deleteUsuario = async (id: number) => {
    await api.delete(`/usuario/${id}`);
};
