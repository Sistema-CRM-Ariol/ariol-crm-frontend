import Link from 'next/link'
import React from 'react'
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { heroUIStyles } from '@/lib/heroui-styles';

export const ResetPasswordForm = () => {
    return (
        <form className='auth-form'>
            <div>
                <h1>Recupera tu contraseña</h1>
                <p>Ingresa tu correo electronico para restaurar tu contraseña</p>
            </div>

            <Input
                name='email'
                type='email'
                label="Correo electronico"
                placeholder='Ingresa tu correo electronico'
                classNames={heroUIStyles.input}
            />

            <Button
                fullWidth
                type='submit'
                color='primary'
            >
                Solicitar recuperación
            </Button>

            <Link href='/auth/login'>
                <span className='text-primary font-medium text-center text-sm'>
                    Regresar a incio de sesión
                </span>
            </Link>
        </form>
    )
}



