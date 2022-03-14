import { User } from './User';
import { Client } from '../interface/Client';

export interface AuthApiDataSuccess {
  message: string;
  user: User;
  token: string;
};

export interface AuthApiData {
  error?: { message: string };
  success?: AuthApiDataSuccess;
};

export interface GetClientsApiDataSuccess {
  clients: [Client]
};

export interface GetClientsApiData {
  error?: { message: string };
  success?: GetClientsApiDataSuccess;
};

