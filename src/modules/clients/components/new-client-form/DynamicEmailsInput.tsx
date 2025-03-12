"use client"
import { useState } from 'react'
import { Input } from '@heroui/input'
import { Button } from '@heroui/button'
import { heroUIStyles } from '@/lib/heroui-styles'
import { Mail01Icon } from 'hugeicons-react'


interface Props {
    emails: string[]
    onEmailChange: (index: number, value: string) => void
    onAddEmail: () => void
  }
  

export const DynamicEmailsInput = ({ emails, onAddEmail, onEmailChange }: Props) => {

    return (
        <div>
            <label htmlFor="emails" className='text-sm font-semibold'>Correos electronicos</label>
            {emails.map((email, index) => (
                <Input
                    key={`email-${index}`}
                    startContent={ <Mail01Icon size={20}/> }
                    classNames={heroUIStyles.input}
                    placeholder="Ingresa un email"
                    value={email}
                    onChange={(e) => onEmailChange(index, e.target.value)}
                    labelPlacement="outside"
                    className='mb-2'
                />
            ))}
            <Button type="button" size='sm' variant='light' onPress={onAddEmail} color="primary">
                Agregar Email
            </Button>
        </div>
    )
}
