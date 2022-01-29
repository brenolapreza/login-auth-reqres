import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth';

import './style.css';

export const Form = () => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const { authenticate, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    authenticate(email, password);
    // console.log(authenticate(email));

    setUser(true);
    navigate('/');
  }

  return (
    <div>
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <input
          type="email"
          value={`eve.holt@reqres.in` || email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="text"
          value={`cityslicka` || password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="senha"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
