export interface Client {
    _id?: string;
    id?: number
    firstName: string;
    lastName: string;
    email: string;
    businessType: string;
    propertyName: string;
    address: string;
    createdAt?: string;
    IstAirportMaxFourPaxCost: number,
    IstAirportMaxSixPaxCost: number,
    IstAirportMaxTenPaxCost: number,
    SawAirportMaxFourPaxCost: number,
    SawAirportMaxSixPaxCost: number,
    SawAirportMaxTenPaxCost: number, 
    status?: string; 
};

