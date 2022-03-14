export interface Payment {
    id?: number;
    clientId: string;
    type: string;
    note: string;
    paid: number;
    currency: string;
    exchangeRate: number;
    paidInTL: number;
    property?: string | undefined;
    email?: string | undefined;
    date?: string;
    createdAt?: Date | string;
    status?: string;
    client?: {
        property: string;
        email: string;
    },
    
};

export interface PaymentApiDataSuccess {
    payment: [Payment]
};

export interface PaymentApiData {
    error?: { message: string };
    success?: PaymentApiDataSuccess
};
