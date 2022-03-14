import axios from './axiosConfig';
import { AuthApiData, GetClientsApiData } from '../../interface/AuthApiData';
import { Client } from '../../interface/Client';

export const postClient = async (inputs: Client): Promise<AuthApiData> => {
    return await axios.post('/users/', inputs)
            .then((res) => res.data)
            .catch(() => ({
                error: {message: 'Unable to connect to server. Please try again'}
            }))
};

export const getClients = async (): Promise<GetClientsApiData> => {
    return await axios.get('/users/')
            .then((res) => res.data)
            .catch(() => ({
                error: {message: 'Unable to connect to server. Please try again'}
            }))
};

export const deleteClient = async (id: string | undefined) => {
    return await axios.delete(`/users/${id}`)
        .then((res) => res.data)
        .catch(() => ({
            error: {message: 'Unable to connect to server. Please try again'}
        }));
};

export const patchClient = async (inputs: Client, id: string | undefined) => {
    return await axios.patch(`/users/${id}`, inputs)
        .then((res) => res.data)
        .catch(() => ({
            error: {message: 'Unable to connect to server. Please try again'}
        }));
};
