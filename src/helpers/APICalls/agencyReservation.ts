import axios from 'axios';
import { GetReservationApiData, 
        GetReservationPaymentApiData, 
        GetStatApiData,
        GetStatInfoApiData } from '../../interface/agencyReservation';

interface Inputs {
    status?: string;
    confirmed?: boolean;
    driver?: string
}

export const updateReservation = (inputs: Inputs, id: string): Promise<GetReservationApiData> => {
    return axios.patch(`/agency-reservation/${id}`, inputs)
            .then((res) => res.data)
            .catch(error => error.response.data);
};

export const deleteReservation = async (id: string): Promise<GetReservationApiData> => {
    return await axios.delete(`/reservation/${id}`)
                    .then((res) => res.data)
                    .catch(error => error.response.data);
};

export const getClientReservation = async (id: string): Promise<GetReservationApiData> => {
    return await axios.get(`/agency-reservation/${id}`)
                    .then((res) => res.data)
                    .catch((error) => error.response.data);
};

export const getClientReservationPaymentStat = async (id: string, from: Date, to: Date): Promise<GetReservationPaymentApiData> => {
    return await axios.get(`/agency-reservation/stat/${id}`, {
        params: {
            from,
            to
        }
    })
    .then((res) => res.data)
    .catch((error) => error.response.data);
};

export const getReservations = async (from: Date, to: Date): Promise<GetReservationApiData> => {
    return await axios.get(`/agency-reservation`, {
        params: {
            from: from,
            to: to
        }
    })
    .then((res) => res.data)
    .catch((error) => error.response.data);
};

export const getStat = async (): Promise<GetStatApiData> => {
    return await axios.get(`/agency-reservation/stat/`)
    .then((res) => res.data)
    .catch((error) => error.response.data);
};

export const getstatInfo = async (): Promise<GetStatInfoApiData> => {
    return await axios.get(`/agency-reservation/statinfo/`)
    .then((res) => res.data)
    .catch((error) => error.response.data);
};