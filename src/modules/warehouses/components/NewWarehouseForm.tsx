"use client"
import { Input } from '@heroui/input'
import { Button } from '@heroui/button'

import { heroUIStyles } from '@/lib/heroui-styles'
import { useCreateWarehouse } from '../hooks/useCreateWarehouse'

export const NewWarehouseForm = () => {

    const { handleSubmit, isPending } = useCreateWarehouse();

    return (
        <section className='pt-8 container'>
            <div className='form'>
                <div className="form__header">
                    <h2>Formulario de registro</h2>
                    <p>Completa los campos para agregar un nuevo almacén</p>
                </div>

                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <Input
                        label='Nombre del almacén'
                        name='name'
                        classNames={heroUIStyles.input}
                        placeholder='Ej: Almacén de la empresa'
                    />

                    <Input
                        label="Dirección"
                        name="address"
                        placeholder='Ej: Calle 1, Ciudad, País'
                        classNames={heroUIStyles.input}
                    />

                    <Button
                        color='primary'
                        type='submit'
                        isLoading={isPending}
                        isDisabled={isPending}
                        className='max-w-max'
                    >
                            Registrar almacén
                    </Button>
                </form>
            </div>
        </section>
    )
}
