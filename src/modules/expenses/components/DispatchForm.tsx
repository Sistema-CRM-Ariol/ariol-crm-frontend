import React from 'react'
import { heroUIStyles } from '@/lib/heroui-styles'

import { Input, Textarea } from '@heroui/input'
import { Divider } from '@heroui/divider'
import { Radio, RadioGroup } from '@heroui/radio'

import { ClientsAutocomplete } from '@/modules/clients/components/ClientsAutocomplete'
import { ProductsAutocomplete } from '@/modules/products/components/ProductsAutocomplete'

export const DispatchForm = () => {
    return (
        <form>
            <div className="bg-white px-8 pt-4 pb-6 rounded-lg border border-gray-300">

                <h2>Detalles</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
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



                    <Divider className='col-span-2' />

                    <div className='col-span-2'>
                        <h3>Selecciona el cliente</h3>
                        <ClientsAutocomplete />
                    </div>

                    <Divider className='col-span-2' />
                    
                    <div className='col-span-2'>
                        <h3>Selecciona los productos</h3>
                        <ProductsAutocomplete />
                    </div>

                    <Divider className='col-span-2' />

                    <div className='flex flex-col gap-4 col-span-2'>
                        <h3>Modalidad de Salida</h3>
                        <RadioGroup
                            classNames={{
                                wrapper: "flex flex-row",
                            }}
                        >
                            <Radio classNames={heroUIStyles.radio} value="VENTA">
                                Venta
                            </Radio>
                            <Radio classNames={heroUIStyles.radio} value="COTIZACION">
                                Cotizacion
                            </Radio>
                            <Radio classNames={heroUIStyles.radio} value="REPOSICION">
                                Reposicion
                            </Radio>
                            <Radio classNames={heroUIStyles.radio} value="CONSIGNACION">
                                Consignacion
                            </Radio>
                        </RadioGroup>
                    </div>
                    <Divider className='col-span-2' />

                    <div className='flex flex-col gap-4 col-span-2'>
                        <h3>Modalidad de Entrega</h3>
                        <RadioGroup
                            classNames={{
                                wrapper: "flex flex-row",
                            }}
                        >
                            <Radio classNames={heroUIStyles.radio} value="OFICINAS">
                                Oficinas
                            </Radio>
                            <Radio classNames={heroUIStyles.radio} value="SUCURSAL">
                                Sucursal
                            </Radio>
                            <Radio classNames={heroUIStyles.radio} value="TERMINAL">
                                Terminal Terrestre
                            </Radio>

                            <Radio classNames={heroUIStyles.radio} value="AEROPUERTO">
                                Aeropuerto
                            </Radio>

                            <Radio classNames={heroUIStyles.radio} value="DESTINO">
                                Destino
                            </Radio>

                            <Radio classNames={heroUIStyles.radio} value="TRANSPORTADOR">
                                Transportador
                            </Radio>
                        </RadioGroup>
                    </div>

                    <Divider className='col-span-2' />

                    <div className='flex flex-col gap-4 col-span-2'>
                        <h3>Lugar de Venta</h3>
                        <RadioGroup
                            classNames={{
                                wrapper: "flex flex-row",
                            }}
                        >
                            <Radio classNames={heroUIStyles.radio} value="VENTA">
                                Local (L.P.)
                            </Radio>
                            <Radio classNames={heroUIStyles.radio} value="COTIZACION">
                                Interior
                            </Radio>
                        </RadioGroup>
                    </div>

                    <Divider className='col-span-2' />
                    
                    <Textarea
                        label="Observaciones"
                        placeholder="Escribe las observaciones"
                        isRequired
                        variant='bordered'
                        classNames={heroUIStyles.input}
                        labelPlacement='outside'
                        className='col-span-2'
                    />
                </div>

            </div>
        </form>
    )
}
