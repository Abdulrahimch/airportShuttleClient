import axios from 'axios';
import { PaymentApiData, Payment } from '../../interface/AgencyPayment';

export const postPayment = async(inputs: Payment): Promise<PaymentApiData> => {
    return await axios.post('/agency-payment/', inputs)
            .then((res) => res.data)
            .catch(() => ({
                error: {message: 'Unable to connect to server. Please try again'}
            }));
};

export const getClientPayments = async (id: String): Promise<PaymentApiData> => {
    return await axios.get(`/agency-payment/${id}`)
            .then((res) => res.data)
            .catch(() => ({
                error: {message: 'Unable to connect to server. Please try again'}
            }));
};

interface Status {
    status: String;
    clientId: String;
}

export const updatePayment = async (inputs: Status, id: string) => {
    return await axios.patch(`/agency-payment/${id}`, inputs)
            .then((res) => res.data)
            .catch(() => ({
                error: {message: 'Unable to connect to server. Please try again'}
            }));
};

export const getmyPayments = async () => {
    return await axios.get('/agency-payment')
        .then((res) => res.data)
        .catch((error) => error.response.data);
};   