/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterUser } from '../api_calls/register';
import { toast } from 'react-toastify';
import { IoChevronBackCircleOutline } from 'react-icons/io5';

const Register = () => {
  const email = useRef<any>(null);
  const password = useRef<any>(null);
  const confirmPassword = useRef<any>(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (password.current.value !== confirmPassword.current.value) {
        throw new Error('Passwords Must Match');
      }

      await RegisterUser(email.current.value, password.current.value);

      navigate('/login');
      toast.success('Check Your Email to Activate Your Account!', {
        autoClose: 5000,
      });
    } catch (e) {
      console.log(e);
      toast.error(`${e}`);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse relative">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Join Our Family!</h1>
          <p className="py-6">
            Aspernatur quasi reprehenderit placeat, debitis velit maiores
            suscipit quibusdam. Nihil, porro eligendi aut excepturi magni
            asperiores odit deleniti at numquam consectetur corrupti.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 relative">
          <div className="absolute top-3 left-5 z-10 cursor-pointer flex">
            <IoChevronBackCircleOutline onClick={() => navigate('/')} />
          </div>
          <form className="card-body gap-0" onSubmit={handleSubmit}>
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
            </div>
            <div className="form-control">
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
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                ref={confirmPassword}
                placeholder=""
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover p">
                  Already a Member?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
