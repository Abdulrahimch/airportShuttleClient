import axios from 'axios';
import { Driver, DriverApiData, GetDriversApiData } from '../../interface/Driver';

export const postDriver = async (inputs: Driver):Promise<DriverApiData> => {
    return await axios.post('/driver', inputs)
        .then((res) => res.data)
        .catch((error) => error.response.data);
};

export const updateDriver = async (inputs: Driver, id: string | undefined):Promise<DriverApiData> => {
    return await axios.patch(`/driver/${id}`, inputs)
        .then((res) => res.data)
        .catch((error) => error.response.data);
};

export const deleteDriver = async (id: string | undefined):Promise<DriverApiData> => {
    return await axios.delete(`/driver/${id}`)
        .then((res) => res.data)
        .catch((error) => error.response.data);
};

export const getDrivers = async (): Promise<GetDriversApiData> => {
    return await axios.get('/driver/all')
        .then((res) => res.data)
        .catch((error) => error.response.data);
};

