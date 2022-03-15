import axios from 'axios';
import { AuthApiData } from '../../interface/AuthApiData';

const logout = async (): Promise<AuthApiData> => {
  return await axios.get(`/auth/logout`)
    .then((res) => res.data)
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' }
  }));
};

export default logout;
