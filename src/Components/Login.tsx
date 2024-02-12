/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../api_calls/login';
import { useAuthProvider } from '../Providers/AuthContext';
import { IoChevronBackCircleOutline } from 'react-icons/io5';

const Login = () => {
  const email = useRef<any>(null);
  const password = useRef<any>(null);
  const navigate = useNavigate();

  const { setUser } = useAuthProvider();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        throw new Error('Inputs Required');
      }

      const user = await login(email.current.value, password.current.value);

      if (user) {
        setUser(user.session);
        toast.success('Welcome Back 🍼 ');
        navigate('/user_dashboard');
      }
    } catch (e) {
      toast.error(`${e}`);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse relative">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Welcome Back!</h1>
          <p className="py-6">
            We have missed you! I hope you are ready to make some new friends
            today!
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 relative">
          <div className="absolute top-3 left-5 z-10 cursor-pointer flex">
            <IoChevronBackCircleOutline onClick={() => navigate('/')} />
          </div>
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                ref={email}
                placeholder=""
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                ref={password}
                placeholder=""
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
