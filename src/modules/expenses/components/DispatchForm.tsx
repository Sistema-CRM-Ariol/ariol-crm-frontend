import React from 'react'
import { Input } from '@heroui/input'
import { heroUIStyles } from '@/lib/heroui-styles'

export const DispatchForm = () => {
    return (
        <form>
            <div className="bg-white px-8 pt-4 pb-6 rounded-lg border border-gray-300">
                
                <h2>Detalles</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                    <Input
                        label="Código de salida"
                        placeholder="Código"
                        isRequired
                        variant='bordered'
                        classNames={heroUIStyles.input}
                        labelPlacement='outside'
                        className='col-span-2'
                    />
                    <Input
                        label="Nombre del producto o servicio"
                        placeholder="Nombre del producto o servicio"
                        isRequired
                        variant='bordered'
                        classNames={heroUIStyles.input}
                        labelPlacement='outside'
                    />

                    <Input
                        label="Descripción"
                        placeholder="Descripción del producto o servicio"
                        isRequired
                        variant='bordered'
                        classNames={heroUIStyles.input}
                        labelPlacement='outside'
                    />
                </div>
            
            </div>
        </form>
    )
}
