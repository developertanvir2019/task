import React, { useState } from 'react';
import styles from '../../styles/login.module.scss'
import { loginUser } from '../../redux/LoginFormSlice';
import { useDispatch, useSelector } from 'react-redux';

const LoginForm = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.login.isLoading);
    const error = useSelector((state) => state.login.error);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            loginUser({ email, password })
        );
    };

    return (
        <div className={styles['login-form']}>
            <h1>Login</h1>
            {error && <p>{error.message}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    <p>Your Email</p>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label htmlFor="password">
                    <p>Your password</p>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
