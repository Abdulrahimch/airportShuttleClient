export interface Driver {
    id?: number;
    _id?: string;
    name: string;
    email: string;
    carNumber: string;
    createdAt?: string;
    phoneNumber?: number;
    img?: string;
};

export interface DriverApiData {
    error?: string,
    success?: { driver: Driver }
};

export interface GetDriversApiData {
    error?:  string,
    success?: { drivers: Driver []}
};