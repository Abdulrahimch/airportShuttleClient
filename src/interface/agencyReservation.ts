import { Payment } from './AgencyPayment';

export interface Reservation {
    id: number;
    from: number;
    to: number;
    property: string;
    pax: number;
    flightNo: string;
    driverNote: string;
    selectedDate: Date;
    timezone: number;
    date: string;
    time: string;
    cost?: number;
    status?: string;
    client: {
        propertyName: string;
    }
}

export interface GetReservationApiDataSuccess {
    reservations: [Reservation];
};

export interface GetReservationApiData {
    error?:  string; 
    success?: GetReservationApiDataSuccess
};

export interface GetStatApiDataSuccess {
    unconfirmedReservationsNumber: number;
    owedUsersNumber: number
};

export interface GetStatApiData {
    error?:  string; 
    success?: GetStatApiDataSuccess
};

export interface GetStatInfoApiDataSuccess {
    unconfirmedReservations: Reservation[];
    owedUsers: Reservation[]
};

export interface GetStatInfoApiData {
    error?:  string; 
    success?: GetStatInfoApiDataSuccess
}

export interface GetReservationPaymentApiData {
    error? : string;
    success?: {  
        reservations: any[],
        payments: Payment[]
    } 
};
