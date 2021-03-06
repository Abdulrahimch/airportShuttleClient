import axios from 'axios';
import { AuthApiData } from '../../interface/AuthApiData';

const login = async (username: string, password: string): Promise<AuthApiData> => {
    const fetchData = { username, password };
    return await axios.post('/api/auth/login', fetchData)
        .then((res) => res.data)
        .catch(() => ({
            error: { message: 'Invalid Username and Password!' }
        }))
};

interface Password {
    oldPassword: string;
    newPassword: string
}

export const changePasswordApi = async (passwordInputs: Password ) => {
    return await axios.patch('/api/auth/change-password', passwordInputs)
        .then((res) => res.data)
        .catch((error) => error.response.data);
};

export default login;

  