import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/slices/authSlice';
import { useRouter } from 'next/navigation'; 
import { Input } from '@/ui/Input';
import { Button } from '@/ui/Button';
import { Container } from '@/ui/Container';
import { Title } from '@/ui//Typo';
import * as SC from './styles';
import { Label } from '@/ui/Label';
import { useLocalStorage } from '@/app/hooks/useLocal';
import { useForm } from 'react-hook-form';

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])/;

const Register = () => {
    const dispatch = useDispatch();
    const router = useRouter(); // Получаем объект роутера
    const { get, set } = useLocalStorage();
    const [newUser, setNewUser] = useState(null); // Состояние для нового пользователя

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const { username, password, email, isAdmin } = data;
        const user = { id: Date.now(), username, password, email, isAdmin };
        setNewUser(user); // Сохраняем нового пользователя в состоянии
    };

    useEffect(() => {
        if (newUser) { // Проверяем, есть ли новый пользователь
            const users = get('users') || [];
            users.push(newUser);
            set('users', users);

            dispatch(login({ id: newUser.id, username: newUser.username, email: newUser.email, isAdmin: newUser.isAdmin }));
            router.push('/'); // Переход на главную страницу
        }
    }, [newUser, dispatch, router, get, set]);

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
                                    message: "Пароль должен содержать хотя бы одну заглавную букву и один спецсимвол",
                                },
                            })}
                        />
                    </Label>
                    <Label>
                        <Input
                            type="checkbox"
                            {...register("isAdmin")}
                        />
                        Сделать меня администратором
                    </Label>
                    <Button type="submit">Зарегистрироваться</Button>
                </SC.FormRegistration>
            </SC.FormWrapper>
        </Container>
    );
};

export default Register;