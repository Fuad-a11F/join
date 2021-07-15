import {Button, CenterSection, Text, Flex, Input, Label} from '../Login/sideCenter'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {login} from  '../../api'
import { useHistory } from 'react-router';

let schema = yup.object().shape({
    email: yup.string().email('Некорректная почта').required('Обязательное поле'),
    password: yup.string().min(8, 'Пароль должен содержать минимум 8 символов').required('Обязательное поле'),
})


export default  function SideCenterL({setUser})  {
    let history = useHistory()
    function Login(data) {
        login(data, setUser)    
        history.push('/main')
    }

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    return  (
        <CenterSection>
            <form action="" onSubmit={handleSubmit(Login)}>
                <Text>Sign in</Text>
                
                <Flex>
                    <Input {...register("email")} placeholder='Email'></Input>
                    <Label color="orange"/>
                </Flex>
                <p>{errors.email?.message}</p>
                <Flex>
                    <Input {...register('password')} placeholder='Password'></Input>
                    <Label color="red"/>
                </Flex>
                <p>{errors.password?.message}</p>
                <Button type='submit'>Sign in</Button>
            </form>
        </CenterSection>
    )
}