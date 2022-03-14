import axios from './axiosConfig';
import { AuthApiData } from '../../interface/AuthApiData';

const loginWithCookies = async (): Promise<AuthApiData> => {
  return await axios.get(`/auth/user`)
    .then((res) => res.data)
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' }
  }));
};

export default loginWithCookies;