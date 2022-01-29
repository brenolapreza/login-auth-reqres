import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Api } from '../services/Api';

export const AuthContext = createContext();

export const AuthContextComponent = ({ children }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  async function authenticate(email, password) {
    const req = await Api.post('login', { email, password });
    const { token } = await req.data;
    const payload = { token, email };

    // console.log(token);
    localStorage.setItem('login', JSON.stringify(payload));
  }

  useEffect(() => {
    const userItem = localStorage.getItem('login');

    if (userItem === null) {
      navigate('/login');
    }
  }, []);

  return (
    <div>
      <AuthContext.Provider value={{ user, setUser, authenticate }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};
