type role = 'client' | 'agency';

export interface User {
  email: string;
  username: string;
  property: string;
  role: role;
  debt: number;
  id: string
}

