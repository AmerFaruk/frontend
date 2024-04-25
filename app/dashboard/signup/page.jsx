"use client";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { Button } from "primereact/button";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { authService } from "@/services";
import { Toast } from "primereact/toast";
import PrimeReact from "primereact/api";
import './Signup.css';

const RegisterPage = () => {
    const toast = useRef(null);
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState({
        name: '',
        surname: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState({
        name: '  ',
        surname: '   ',
        username: '   ',
        email: '   ',
        password: '   ',
        confirmPassword: '   ',
    });

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
        validateInput(e);
    };

    const onSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        authService.register(input)
            .then((res) => {

                window.location.href = "/dashboard/login"
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

    const validateInput = e => {
        let { name, value } = e.target;
        setError(prev => {
            const stateObj = { ...prev, [name]: "" };

            switch (name) {
                case "name":
                    if (!value) {
                        stateObj[name] = "Please enter Name.";
                    }
                    break;
                case "surname":
                    if (!value) {
                        stateObj[name] = "Please enter Surname.";
                    }
                    break;
                case "email":
                    if (!value) {
                        stateObj[name] = "Please enter Email.";
                    } else if (!(/\S+@\S+\.\S+/.test(input.email))) {
                        stateObj[name] = "Email is invalid.";
                    }
                    break;
                case "username":
                    if (!value) {
                        stateObj[name] = "Please enter Username.";
                    }
                    break;

                case "password":
                    if (!value) {
                        stateObj[name] = "Please enter Password.";
                    } else if (input.confirmPassword && value !== input.confirmPassword) {
                        stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
                    } else {
                        stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
                    }
                    break;

                case "confirmPassword":
                    if (!value) {
                        stateObj[name] = "Please enter Confirm Password.";
                    } else if (input.password && value !== input.password) {
                        stateObj[name] = "Password and Confirm Password does not match.";
                    }
                    break;

                default:
                    break;
            }

            return stateObj;
        });
    }
    return (
        <div className="signupPage">
            <Toast ref={toast} />
            <div className="signup-container">
                <h2 className="h2">SIGN UP</h2>
                <p className="p-agreement">By continuing, you agree to our User Agreement and acknowledge
                    that you understand the Privacy Policy.</p>
                <form>
                {error.name && <span className={"text-red-500"}>{error.name}</span>}
                    <div className="submit-container">
                        <InputText
                            type={"text"}
                            name={"name"}
                            value={input.name}
                            onChange={onInputChange}
                            onBlur={validateInput}
                            placeholder="Enter your name here"
                            className={'inputBox'}
                        />

                    </div>
                    {error.surname && <span className={"text-red-500"}>{error.surname}</span>}
                    <div className="submit-container">
                        <input
                            type={"text"}
                            name={"surname"}
                            value={input.surname}
                            onChange={onInputChange}
                            onBlur={validateInput}
                            placeholder="Enter your surname here"
                            className={'inputBox'}
                        />

                    </div>
                    {error.email && <span className={"text-red-500"}>{error.email}</span>}
                    <div className="submit-container">
                        <input

                            name={"email"}
                            value={input.email}
                            onChange={onInputChange}
                            onBlur={validateInput}
                            placeholder="Enter your email here"
                            className={'inputBox'}
                        />

                    </div>
                    {error.username && <span className={"text-red-500"}>{error.username}</span>}
                    <div className="submit-container">
                        <input
                            name={"username"}
                            value={input.username}
                            onChange={onInputChange}
                            onBlur={validateInput}
                            placeholder="Enter your username here"
                            className={'inputBox'}
                        />

                    </div>
                    {error.password && <span className={"text-red-500"}>{error.password}</span>}
                    <div className="submit-container">
                    <Password
                            name={"password"}
                            value={input.password}
                            onChange={onInputChange}
                            toggleMask feedback={false}
                            onBlur={validateInput}
                            placeholder="Confirm Password" className="password-field" />
                            

                    </div>
                    {error.confirmPassword && <span className={"text-red-500"}>{error.confirmPassword}</span>}
                    <div className="submit-container">
                        <Password
                            name={"confirmPassword"}
                            value={input.confirmPassword}
                            onChange={onInputChange}
                            toggleMask feedback={false}
                            onBlur={validateInput}
                            placeholder="Confirm Password" className="password-field" />
                            

                    </div>
                    
                    <Button type={"submit"}  label="Register"
                                    disabled={loading || error.username || error.password|| error.confirmPassword || error.name|| error.surname || error.email}
                                    onClick={onSubmit}
                                    className="loginButton"/>
                </form>

            </div>
        </div>
    );
}

export default RegisterPage;