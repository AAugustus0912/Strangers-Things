import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



const Login = () => {

    const Field = React.forwardRef(({label, type}, ref) => {
        return (
          <div>
            <label>{label}</label>
            <input ref={ref} type={type} />
          </div>
        );
    });
    
    const Form = ({onSubmit}) => {
        const username = React.useRef();
        const password = React.useRef();
        const handleSubmit = e => {
            e.preventDefault();
            const data = {
                username: username.current.value,
                password: password.current.value
            };
            onSubmit(data);
        };
        return (
          <form onSubmit={handleSubmit} >
            <Field ref={username} label="Username:" type="text" />
            <Field ref={password} label="Password:" type="password" />
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        );
    };
    
    const handleSubmit = data => {
        const json = JSON.stringify(data, null, 4);
        console.clear();
        console.log(json);
    };
    return (
      <div>
        <Form onSubmit={handleSubmit} />
      </div>
    );
};

export default Login;
