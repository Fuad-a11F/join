import styles from 'styled-components'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import React from 'react';
import axios from  'axios'


export const Text = styles.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #666666;
`
export const Button = styles.button`
    width: calc(100% + 17px);
    height: 45px;
    outline: none;
    border: none;
    background: #70EDB9;
    border-radius: 11px;
    font-size: 17px;
    font-weight: 500;
    font-size: 21px;
    color: white;
    @media(max-width:  992px)  {
        width:  268px;
        margin-left: 6px
    }
`
export const CenterSection = styles.div`
    position: relative;
    top: -72px;
    p:not(:first-child) {
        margin-top: -16px;
        color: red;
        margin-left: 6px
    }
`
export const Input = styles.input`
    width: 280px;
    height: 45px;
    outline: none;
    border: none;
    background: #F5F5F5;
    border-radius: 11px;
    margin-bottom: 20px;
    padding-left: 15px;
    font-size: 17px;
    @media(max-width:  992px)  {
        width:  250px;
        margin-left: 6px
    }
`
export const Flex = styles.span`
    display: flex
`
export const Label = styles.div`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    position: relative;
    top: 18px;
    left: 8px;
    background-color: ${props => props.color};
    @media(max-width:  992px)  {
        display: none
    }

`

let schema = yup.object().shape({
    firstName: yup.string().required('Обязательное поле'),
    email: yup.string().email('Некорректная почта').required('Обязательное поле'),
    password: yup.string().min(8, 'Пароль должен содержать минимум 8 символов').required('Обязательное поле'),
    password2: yup.string().oneOf([yup.ref("password"), null], "Пароли не совпадают").required('Обязательное поле')
})

export default  function SideCenter()  {
    function registration(data)   {
        axios.post('http://localhost:3001/api/registration', {...data})
       
    }

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    return  (
        <CenterSection>
            <form action="" onSubmit={handleSubmit(registration)}>
                <Text>Sign up</Text>

                <Flex>
                    <Input {...register('firstName')} placeholder='Name'></Input>
                    <Label color="green"/>
                </Flex>
                <p>{errors.firstName?.message}</p>
                <Flex>
                    <Input {...register('email')} placeholder='Email'></Input>
                    <Label color="orange"/>
                </Flex>
                <p>{errors.email?.message}</p>
                <Flex>
                    <Input {...register('password')} placeholder='Password'></Input>
                    <Label color="red"/>
                </Flex>
                <p>{errors.password?.message}</p>
                <Flex>
                    <Input {...register('password2')} placeholder='Confirm password'></Input>
                    <Label color="orange"/>
                </Flex>
                <p>{errors.password2?.message}</p>
                <Button type='submit'>Sign up</Button>
            </form>
        </CenterSection>
    )
}