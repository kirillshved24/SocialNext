import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/slices/authSlice';
import { useRouter } from 'next/navigation';
import { Input } from '@/ui/Input';
import { Button } from '@/ui/Button';
import { Container } from '@/ui/Container';
import { Title } from '@/ui/Typo';
import { Label } from '@/ui/Label';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import * as SC from './styles';

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])/;

const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/auth/register', data);
      const { token } = response.data;
      if (!token) {
        throw new Error('Токен не получен от сервера');
      }
      const userData = JSON.parse(atob(token.split('.')[1]));
      dispatch(login({ id: userData.id, username: userData.username, email: userData.email, isAdmin: userData.isAdmin }));
      router.push('/');
    } catch (error) {
      alert('Ошибка регистрации: ' + (error.response?.data?.error || error.message));
    }
  };

  return (
    <Container>
      <SC.FormWrapper>
        <Title>Регистрация</Title>
        <SC.FormRegistration onSubmit={handleSubmit(onSubmit)}>
          <Label>
            <Input
              name="username"
              type="text"
              placeholder="Имя пользователя"
              errorMessage={errors.username?.message}
              {...register("username", {
                required: "Имя пользователя обязательно",
                minLength: { value: 3, message: "Имя пользователя должно быть не меньше 3 символов" },
              })}
            />
          </Label>
          <Label>
            <Input
              name="email"
              type="email"
              placeholder="Введите ваш адрес электронной почты"
              errorMessage={errors.email?.message}
              {...register("email", {
                required: "Почта обязательна",
                pattern: {
                  value: EMAIL_REGEX,
                  message: "Введите корректный адрес электронной почты",
                },
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
                  message: "Пароль должен содержать хотя бы одну букву и один спецсимвол",
                },
              })}
            />
          </Label>
          <Button type="submit">Зарегистрироваться</Button>
        </SC.FormRegistration>
      </SC.FormWrapper>
    </Container>
  );
};

export default Register;