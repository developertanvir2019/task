import React, { useState } from 'react';
import styles from '../../styles/login.module.scss'
import { signupUser } from '../../redux/signupSlice';
import { useDispatch, useSelector } from 'react-redux';

const Signup = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.signup.isLoading);
    const error = useSelector((state) => state.signup.error);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            signupUser({ name, email, password })
        );
    };

    return (
        <div className={styles['login-form']}>
            <h1>Sign Up</h1>
            {error && <p>{error.message}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <p>enter your name</p>
                    <input
                        type="text"
                        id="name"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label htmlFor="email">
                    <p>enter an Email</p>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label htmlFor="password">
                    <p>enter a password</p>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Signing up...' : 'Sign Up'}
                </button>
            </form>
        </div>
    );
};

export default Signup;
