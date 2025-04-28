import { Button } from '@heroui/button'
import { Add01Icon, Delete01Icon, MinusSignIcon } from 'hugeicons-react'
import React from 'react'

export const DispatchSummary = () => {
    return (
        <div className="sticky top-4 bg-white px-8 pt-4 pb-6 rounded-lg border border-gray-300">
            <h2>Resumen de salida</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                <div className='flex flex-col gap-2'>
                    <span className='text-sm text-gray-500'>Código de salida</span>
                    <span className='text-lg font-semibold'>OR-001-0002</span>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='text-sm text-gray-500'>Fecha de salida</span>
                    <span className='text-lg font-semibold'>12/12/2023</span>
                </div>
            </div>

            <div>

                <ul>
                    <li className='flex items-center justify-between'>
                        <div>
                            <h3>Producto 1</h3>
                            <p>Precio unitario: </p>
                            <p>Subtotal: </p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Button
                                isIconOnly
                                variant='flat'
                                size='sm'
                                radius='full'
                                startContent={<MinusSignIcon size={18} />}
                            />
                            <p>8u.</p>
                            <Button
                                isIconOnly
                                variant='flat'
                                size='sm'
                                radius='full'
                                startContent={<Add01Icon size={18} />}
                            />

                            <Button
                                isIconOnly
                                variant='flat'
                                size='sm'
                                radius='full'
                                startContent={<Delete01Icon size={18} />}
                            />
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}
