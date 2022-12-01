import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";


async function generateRequestToken() {
    try {
        const response = await axios({
            method: "get",
            url: `${process.env.REACT_APP_APIURL}authentication/token/new?api_key=${process.env.REACT_APP_APIKEY}`,
        });
        console.log(response);
        return response.data.request_token
    } catch (error) {
        console.error(error);
        return null;
    }
}

function Login() {
    const formik = useFormik({
    initialValues: {
        username: '',
        password: ''
    },
    
    validationSchema: Yup.object({
        username: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
    }),
    
    onSubmit: (values) => {
        generateRequestToken().then((requestToken) => {
            axios({
                method: "post",
                url: `${process.env.REACT_APP_APIURL}authentication/token/validate_with_login?api_key=${process.env.REACT_APP_APIKEY}`,
                data: {
                    request_token: requestToken,
                    username: values.username,
                    password: values.password,
                },

            }) 
            .then((res) => {
                const validatedRequestToken = res.data.request_token;
                axios({
                    method: "post",
                    url: `${process.env.REACT_APP_APIURL}authentication/session/new?api_key=${process.env.REACT_APP_APIKEY}`,
                    data: {
                        request_token: validatedRequestToken,
                    },

                }) 
                .then((res) => {
                    const sessionID = res.data.session_id;
                    localStorage.setItem("sessionID", sessionID);
                    alert("Login Success! Welcome to Vidport!");
                    window.location.href = "/";
                
                }) 
                .catch((error) => {
                    console.error(error);
                });
                    
            }) 
            .catch((error) => {
                console.error(error);
            });
        });
    }, });

    useEffect(() => {
        console.log(localStorage.getItem("sessionID"));
    }, []);
    
    return (
        <>
            <div className='container bg-light'>
                <div className="text-center mt-5 mb-3">
                    <h1 className='login-title'>Login to your account</h1>
                </div>
                <div className="row justify-content-center">
                    <div className='col-lg-6 col-md-8 col-sm-10'>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-3">
                                <label
                                    className='label-login'
                                    htmlFor="username">Username
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.username}
                                    className="form-control"
                                /> 
                                {formik.touched.username && formik.errors.username ? (
                                    <div className='required'>{formik.errors.username}</div>
                                ) : null}
                            </div>
                            <div className='mb-3'>
                                <label 
                                    className='label-login'
                                    htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    className="form-control"
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div className='required'>{formik.errors.password}</div>
                                ) : null}
                            </div>
                            <button type="submit" className='btn btn-primary btn-login'>Login</button>
                        </form>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default Login;