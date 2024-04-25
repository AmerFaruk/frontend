"use client";
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from "react";
import { Password } from 'primereact/password';
import { Button } from 'primereact/button'
import PrimeReact from "primereact/api";
import { InputText } from "primereact/inputtext";
//import {authService} from "@/services";
import '@/app/dashboard/login/login.css'




const page = () => {
  const toast = useRef(null);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState({
    username: ' ',
    password: ' ',
  });
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };
  const validateInput = (e) => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };
      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter Username.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          }
          break;
        default:
          break;
      }

      return stateObj;
    });
  };
  const onSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    authService.login(input)
      .then((res) => {

        if (res.role === 'MERCHANT') {
          window.location.href = "/dashboard/viewProfile"
        }
        if (res.role === 'ADMIN') {
          window.location.href = "/dashboard/viewProfile"
        }
        if (res.role === 'USER') {
          window.location.href = "/dashboard/viewProfile"
        }


      })
      .catch((e) => {

        toast.current.show({
          severity: 'error',
          summary: 'Error',
          detail: e.message,
          life: 3000
        });
      });
    setLoading(false);

  };


  return (

    <div className="loginPage">
      <div className="left-container">
        <div>

          <h2 className='bold-h'>LOG IN</h2>
          <p className="p-agreement">By continuing, you agree to our User Agreement and acknowledge
            that you understand the Privacy Policy.</p>

          <form>
            {error.username && <span className={"text-red-500"}>{error.username}</span>}
            <div className="submit-container">
              <InputText
                name={'username'}
                onBlur={validateInput}
                onChange={onInputChange}
                placeholder="Username"
                className={'inputBox'}
                type='text'
              />
            </div>
            {error.password && <span className={"text-red-500"}>{error.password}</span>}
            <div className="submit-container">
              <Password
                name='password'
                placeholder="Password"
                onBlur={validateInput}
                onChange={onInputChange}
                className={'inputBox'}
                type='password'
              />
            </div>

            <Button type={"submit"} className="loginButton" onClick={onSubmit} disabled={loading || error.username || error.password} label="Log in" />
          </form>

        </div>
      </div>
      <div className="right-container">


        <h1 className="bold-h">WELCOME TO RECOMMEND AND REVIEW SYSTEM</h1>
        <p className="introduction light-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet sem a ante tincidunt, ut ultrices ante sagittis. Cras in hendrerit dolor, sed accumsan augue. Praesent porta fermentum purus, eu sagittis dolor ultricies vel. Nullam id tellus at ante consequat malesuada eget id metus    </p>
        <Link className="signupButton" href={"/dashboard/signup"}>SIGN UP</Link>

      </div>
    </div>
  );
}

export default page;