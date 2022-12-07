import React, {Dispatch, useState} from 'react';
import {
    AdditionalInfo,
    ErrorMessage,
    LoginButton, LoginError, LoginHeader,
    LoginInput, LoginSubtitle, LoginTitle,
    LoginWrapper,
    PasswordInput
} from "./Login.styles";
import {useForm} from 'react-hook-form'

const Login = (): JSX.Element => {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const {handleSubmit, register, formState: {
        errors
    }, reset} = useForm(
        {
            mode: 'onBlur'
        }
    )

    console.log({login, password})
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, setter: Dispatch<string>) => {
        setter(e.target.value)
    }
    const onSubmit = (data: any) => {
        console.log(JSON.stringify(data))
        reset()
    }

    return (
        <LoginWrapper onSubmit={handleSubmit(onSubmit)}>
            <LoginHeader>
                <LoginTitle>Log in to Platform </LoginTitle>
                <LoginSubtitle>Enter your account details below</LoginSubtitle>
            </LoginHeader>
            <LoginInput {...register('email', {
                    required: 'should be field',
                    minLength: {
                        value: 5,
                        message: 'minimum 5 symbols'
                    },
                    pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                        message: 'email typo error'
                    }

            })} onChange={(e) => onInputChange(e, setLogin)} inputMode='email' placeholder='Email Address'/>
            <ErrorMessage>
                {errors?.email && <p>{errors?.email?.message || 'some error in email input'}</p>}
            </ErrorMessage>
            <PasswordInput {...register('password', {
                required: 'should be field',
                minLength: {
                    value: 8,
                    message: 'at least 8 characters'
                },
                pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                    message: 'must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number'
                }
            })} onChange={(e) => onInputChange(e, setPassword)} placeholder='Password'/>
            <ErrorMessage>
                {errors?.password && <p>{errors?.password?.message || 'some error in email input'}</p>}
            </ErrorMessage>
            <LoginButton>Login</LoginButton>
            <AdditionalInfo><span>If you dont remember password <br /> please contact to administrator</span></AdditionalInfo>
        </LoginWrapper>
    );
};

export default Login;
