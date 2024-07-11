import api from './api';
import { Lancamento } from '../models/Lancamento';

export const getLancamento = async () => {
  const response = await api.get('/lancamento');
  return response.data;
};

export const getLancamentoById = async (id: number) => {
  const response = await api.get(`/lancamento/${id}`);
  return response.data;
};

export const createLancamento = async (lancamento: Lancamento) => {
  const response = await api.post('/lancamento', lancamento);
  return response.data;
};

export const updateLancamento = async (id: number,lancamento: Lancamento) => {
  const response = await api.put(`/lancamento/${id}`, lancamento);
  return response.data;
};

export const deleteLancamento = async (id: number) => {
  await api.delete(`/lancamento/${id}`);
};