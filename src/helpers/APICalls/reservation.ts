import axios from 'axios';
import { GetReservationPaymentApiData } from '../../interface/agencyReservation';
import { FormValues, ReservationApiData, GetReservationApiData } from '../../interface/Reservation';

export const postReservation = async (inputs: FormValues): Promise<ReservationApiData> => {
    return await axios.post('/reservation/', inputs)
        .then((res) => res.data)
        .catch((error) => ({
            error: { message: 'error! please try again later' }
        })
    );
};

export const updateReservation = async (id: string, inputs: FormValues): Promise<ReservationApiData> => {
    return await axios.patch(`/reservation/${id}`, inputs)
        .then((res) => res.data)
        .catch((error) => ({
            error: { message: 'error! please try again later' }
        })
    );
};

export const getReservations = async (): Promise<GetReservationApiData> => {
    return await axios.get('/reservation/')
        .then((res) => res.data)
        .catch(() => ({
            error: { message: 'error! please try again later' }
        })
    );
};

export const deleteReservation = async (id: string): Promise<ReservationApiData> => {
    return await axios.delete(`/reservation/${id}`)
        .then((res) => res.data)
        .catch(() => ({
            error: { message: 'error! please try again later' }
        })
    );
};
// get Client reservations and payments stat.
export const getMyDetailsStat = async (id: string | undefined, from: Date, to: Date): Promise<GetReservationPaymentApiData> => {
    return await axios.get(`/reservation/stat/${id}`, {
        params: {
            from,
            to
        }
    })
    .then((res) => res.data)
    .catch((error) => error.response.data);
};
