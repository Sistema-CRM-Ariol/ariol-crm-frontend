"use client"
import Link from 'next/link';
import { useState } from 'react'

import { heroUIStyles } from '@/lib/heroui-styles';

import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { ViewOffIcon, ViewIcon } from 'hugeicons-react';
import { useLoginUser } from '../hooks/useLoginUser';

export const LoginForm = () => {
    
    const { handleSubmit, isLoading } = useLoginUser();
    
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <form onSubmit={handleSubmit} className='auth-form'>
            <div>
                <h1>Inicia Sesión</h1>
                <p>Ingresa tus credenciales para acceder al sistema</p>
            </div>

            <Input
                label="Correo electronico"
                name="email"
                placeholder='Ingresa tu correo electronico'
                classNames={heroUIStyles.input}
            />

            <Input
                name="password"
                label="Contraseña"
                placeholder='Ingresa su contraseña'
                classNames={heroUIStyles.input}
                type={showPassword ? "text" : "password"}
                endContent={
                    showPassword
                        ? (
                            <Button
                                size='sm'
                                isIconOnly
                                radius='full'
                                variant='light'
                                onPress={handleShowPassword}
                                startContent={<ViewIcon size={20} />}
                            />
                        )
                        : (
                            <Button
                                size='sm'
                                isIconOnly
                                radius='full'
                                variant='light'
                                onPress={handleShowPassword}
                                startContent={<ViewOffIcon size={20} />}
                            />
                        )
                }
            />

            <Button
                fullWidth
                type='submit'
                color='primary'
                isLoading={isLoading}
            >
                Iniciar Sesión
            </Button>

            <Link href='/auth/reset-password'>
                <span className='text-primary font-medium text-center text-sm'>¿Olvidaste tu contraseña?</span>
            </Link>
        </form>
    )
}
