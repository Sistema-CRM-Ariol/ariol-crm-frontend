"use client"
import { useState } from 'react'

import { heroUIStyles } from '@/lib/heroui-styles';

import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { SecurityPasswordIcon,ForgotPasswordIcon, PasswordValidationIcon, EyeIcon } from 'hugeicons-react';
import Link from 'next/link';

export const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <form className='auth-form'>
            <div>
                <h1>Inicia Sesión</h1>
                <p>Ingresa tus credenciales para acceder al sistema</p>
            </div>

            <Input
                label="Correo electronico"
                placeholder='Ingresa tu correo electronico'
                classNames={heroUIStyles.input}
            />

            <Input
                label="Contraseña"
                placeholder='Ingresa su contraseña'
                classNames={heroUIStyles.input}
                type={showPassword ? "text" : "password"}
                endContent={
                    showPassword
                        ? (
                            <Button
                                isIconOnly
                                variant='light'
                                onPress={handleShowPassword}
                                startContent={<PasswordValidationIcon size={20} />}
                            />
                        )
                        : (
                            <Button
                                isIconOnly
                                variant='light'
                                onPress={handleShowPassword}
                                startContent={<EyeIcon size={20} />}
                            />
                        )
                }
            />

            <Button
                fullWidth
                type='submit'
                color='primary'
            >
                Iniciar Sesión
            </Button>

            <Link href='/auth/reset-password'>
                <span className='text-primary font-medium text-center text-sm'>¿Olvidaste tu contraseña?</span>
            </Link>
        </form>
    )
}
