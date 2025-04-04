import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/slices/authSlice';
import { useRouter } from 'next/navigation';
import { Container } from '@/ui/Container';
import { Input } from '@/ui/Input';
import { Button } from '@/ui/Button';
import { Title } from '@/ui/Typo';
import { useForm } from 'react-hook-form';
import { Label } from '@/ui/Label';
import { FormWrapper } from '../Register/styles';
import * as SC from './styles';
import axios from 'axios';

const USERNAME_REGEX = /^[A-Z][a-zA-Z0-9]{2,}$/;
const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])/;

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/auth/login', data);
      const { token } = response.data;
      if (!token) {
        throw new Error('Токен не получен от сервера');
      }
      const userData = JSON.parse(atob(token.split('.')[1]));
      dispatch(login({ username: userData.username, email: userData.email, id: userData.id, isAdmin: userData.isAdmin }));
      router.push('/');
    } catch (error) {
      alert('Ошибка входа: ' + (error.response?.data?.error || error.message));
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Вход</Title>
        <SC.FormLogin onSubmit={handleSubmit(onSubmit)}>
          <Label>
            <Input
              name="username"
              type="text"
              placeholder="Имя пользователя"
              errorMessage={errors.username?.message}
              {...register("username", {
                required: "Имя пользователя обязательно",
                pattern: {
                  value: USERNAME_REGEX,
                  message: "Имя пользователя должно начинаться с заглавной буквы и быть не меньше 3 символов"
                }
              })}
            />
          </Label>
          <Label>
            <Input
              name="password"
              type="password"
              placeholder="Пароль"
              errorMessage={errors.password?.message}
              {...register("password", {
                required: "Пароль обязателен",
                pattern: {
                  value: PASSWORD_REGEX,
                  message: "Пароль должен содержать хотя бы одну букву и один спецсимвол"
                }
              })}
            />
          </Label>
          <Button type="submit">Войти</Button>
        </SC.FormLogin>
      </FormWrapper>
    </Container>
  );
};

export default Login;