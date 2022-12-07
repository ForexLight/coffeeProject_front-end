import React, {Dispatch, useState} from 'react';
import {
    LoginButton, LoginError, LoginHeader,
    LoginInput, LoginSubtitle, LoginTitle,
    LoginWrapper,
    PasswordInput
} from "./Login.styles";

const Login = (): JSX.Element => {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')


    console.log({login, password})
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, setter: Dispatch<string>) => {
        setter(e.target.value)
    }

    return (
        <LoginWrapper>
            <LoginHeader>
                <LoginTitle>Log in to Platform </LoginTitle>
                <LoginSubtitle>Enter your account details below</LoginSubtitle>
            </LoginHeader>
            <LoginInput onChange={(e) => onInputChange(e, setLogin)} inputMode='email' placeholder='Email Address'/>
            <PasswordInput onChange={(e) => onInputChange(e, setPassword)} placeholder='Password'/>
            <LoginButton>Login</LoginButton>
            <LoginError><span>If you dont remember password <br /> please contact to administrator</span></LoginError>
        </LoginWrapper>
    );
};

export default Login;
