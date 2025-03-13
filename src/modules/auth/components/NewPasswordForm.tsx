"use client"
import Link from 'next/link'
import { useState } from 'react';

import { heroUIStyles } from '@/lib/heroui-styles'

import { Input } from '@heroui/input'
import { Button } from '@heroui/button'
import { addToast } from '@heroui/toast'

export const NewPasswordForm = () => {

    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const onPress = () => {
        
        if( password.trim() !== passwordConfirmation.trim() ){
            addToast({
                title: "Las contraseñas no coinciden",
                color: "danger"
            })
        }


    }

    return (
        <form className='auth-form'>
            <div>
                <h1>Cambio de contraseña</h1>
                <p>Ingresa tu nueva contraseña</p>
            </div>

            <Input
                name='password'
                type='password'
                label="Nueva contraseña"
                placeholder='Ingresa una nueva contraseña'
                classNames={heroUIStyles.input}
                onChange={e => setPassword(e.target.value) }
            />

            <Input
                name='passwordConfirmation'
                type='password'
                label="Confirma la contraseña"
                placeholder='Ingresa la nueva contraseña'
                classNames={heroUIStyles.input}
                onChange={e => setPasswordConfirmation(e.target.value) }
            />

            <Button
                fullWidth
                color='primary'
                onPress={onPress}
            >
                Cambiar contraseña
            </Button>

            <Link href='/auth/login'>
                <span className='text-primary font-medium text-center text-sm'>
                    Regresar a incio de sesión
                </span>
            </Link>
        </form>
    )
}
