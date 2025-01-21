import React, { useEffect } from 'react';
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

const USERNAME_REGEX = /^[A-Z][a-zA-Z0-9]{2,}$/; // Первая буква заглавная, минимум 3 символа
const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])/; // Одна заглавная буква и один спецсимвол

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const { username, password } = data;

    // Используем useEffect для доступа к localStorage
    useEffect(() => {
      const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
      const user = savedUsers.find((u) => u.username === username && u.password === password);

      if (user) {
        dispatch(login({ username: user.username, email: user.email, id: user.id, isAdmin: user.isAdmin }));
        router.push('/'); 
      } else {
        alert('Неправильное имя пользователя или пароль');
      }
    }, [username, password]);
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
                  message: "Пароль должен содержать хотя бы одну заглавную букву и один спецсимвол"
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