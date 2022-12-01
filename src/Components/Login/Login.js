import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import "./Login.css";


async function generateRequestToken() {
    try {
        const response = await axios({
            method: "get",
            url: `${process.env.API_URL}authentication/token/new?api_key=${process.env.API_KEY}`,
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
                url: `${process.env.API_URL}authentication/token/validate_with_login?api_key=${process.env.API_KEY}`,
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
                    url: `${process.env.API_URL}authentication/session/new?api_key=${process.env.API_KEY}`,
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
            <form onSubmit={formik.handleSubmit}>
                <label
                    style={{ color: 'red', fontSize: 20 }}
                    className='label-username'
                    htmlFor="username">Username
                </label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                /> 
                {formik.touched.username && formik.errors.username ? (
                    <div style={{ color: 'red' }}>{formik.errors.username}</div>
                ) : null}
                <br />
                <label htmlFor="password">
                    Password
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                ) : null}
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default Login;