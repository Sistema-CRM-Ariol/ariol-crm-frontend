"use client"
import { Form } from '@heroui/form'
import { Input } from '@heroui/input'
import { Button } from '@heroui/button'
import { Gps01Icon, IdentificationIcon, Invoice01Icon, UserIcon } from 'hugeicons-react'

import { heroUIStyles } from '@/lib/heroui-styles'
import { useNewClient } from '../../hooks/useNewClient'

import { SelectCompany } from './SelectCompany'
import { DynamicEmailsInput } from './DynamicEmailsInput'
import { DynamicPhonesInput } from './DynamicPhonesInput'


export const NewClientForm = () => {

    const { 
        emails, 
        phones, 
        isPending, 
        handleSubmit, 
        addEmailInput, 
        addPhoneInput, 
        handlePhoneChange, 
        handleEmailChange, 
    } = useNewClient()

    return (
        <section className='pt-8'>
            <div className="container bg-white px-12 py-6 rounded-lg border border-gray-300">
                <h2 className='text-xl mb-4'>Registro de clientes</h2>

                <Form onSubmit={handleSubmit} className='grid grid-cols-2 gap-x-10 gap-y-6'>
                    <Input
                        isRequired
                        classNames={heroUIStyles.input}
                        startContent={<UserIcon size={20} />}
                        placeholder='Ingresa un nombre'
                        label="Nombre"
                        name='name'
                        labelPlacement='outside'
                    />

                    <Input
                        isRequired
                        classNames={heroUIStyles.input}
                        startContent={<IdentificationIcon size={20} />}
                        placeholder='Ingresa un Cargo'
                        label="Cargo"
                        name='position'
                        labelPlacement='outside'
                    />

                    <Input
                        isRequired
                        classNames={heroUIStyles.input}
                        startContent={<Gps01Icon size={20} />}
                        placeholder='Ingresa un departamento del pais'
                        label="Departamento"
                        name='departament'
                        labelPlacement='outside'
                    />

                    <Input
                        isRequired
                        classNames={heroUIStyles.input}
                        startContent={<Gps01Icon size={20} />}
                        placeholder='Ingresa la provincia'
                        label="Provincia"
                        name="province"
                        labelPlacement='outside'
                    />

                    <Input
                        isRequired
                        classNames={heroUIStyles.input}
                        startContent={<Gps01Icon size={20} />}
                        placeholder='Ingresa la direccion de residencia'
                        label="Dirección"
                        name="address"
                        labelPlacement='outside'
                    />

                    <Input
                        isRequired
                        classNames={heroUIStyles.input}
                        startContent={<Invoice01Icon size={20} />}
                        placeholder='Ingresa un nombre de factura'
                        label="Nombre de Factura"
                        name="invoice"
                        labelPlacement='outside'
                    />

                    <Input
                        isRequired
                        classNames={heroUIStyles.input}
                        startContent={<IdentificationIcon size={20} />}
                        placeholder='Ingresa un NIT'
                        label="NIT"
                        name="nit"
                        labelPlacement='outside'
                    />
                    <SelectCompany />

                    <DynamicEmailsInput
                        emails={emails}
                        onEmailChange={handleEmailChange}
                        onAddEmail={addEmailInput}
                    />

                    <DynamicPhonesInput
                        phones={phones}
                        onPhoneChange={handlePhoneChange}
                        onAddPhone={addPhoneInput}
                    />


                    <Button
                        color='primary'
                        className='max-w-xs'
                        type='submit'
                        isLoading={ isPending }
                        isDisabled={ isPending }
                    >
                        Registrar cliente
                    </Button>
                </Form>
            </div>
        </section>
    )
}
