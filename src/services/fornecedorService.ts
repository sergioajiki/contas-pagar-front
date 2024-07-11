import api from './api';
import { Fornecedor } from '../models/Fornecedor';

export const getFornecedor = async () => {
  const response = await api.get('/fornecedor');
  return response.data;
};

export const getFornecedorById = async (id: number) => {
  const response = await api.get(`/fornecedor/${id}`);
  return response.data;
};

export const createFornecedor = async (provider: Fornecedor) => {
  const response = await api.post('/fornecedor', provider);
  return response.data;
};

export const updateFornecedor = async (id: number, provider: Fornecedor) => {
  const response = await api.put(`/fornecedor/${id}`, provider);
  return response.data;
};

export const deleteFornecedor = async (id: number) => {
    await api.delete(`/fornecedor/${id}`);
};