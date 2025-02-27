import React from 'react'
import { Input } from '@heroui/input';
import { heroUiClassNames } from '@/lib/heroui-classnames';
import { Button } from '@heroui/button';

export const NewCompanyForm = () => {
    return (
        <section className='pt-8'>
            <div className="bg-white px-12 py-8 border border-gray-300 rounded-lg container">
                <h2 className='mb-4'>Formulario de registro de empresas</h2>
                <form className=''>
                    <div className='mb-4 grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-6'>
                        <Input
                            isRequired
                            labelPlacement='outside'
                            label="Nombre"
                            placeholder='Nombre de la empresa'
                            classNames={heroUiClassNames.input}
                        />

                        <Input
                            labelPlacement='outside'
                            label="Descripcion"
                            placeholder='Ingresa una descripción de la empresa'
                            classNames={heroUiClassNames.input}
                        />

                        <Input
                            labelPlacement='outside'
                            label="Dirección"
                            placeholder='Ingresa una dirección fisica'
                            classNames={heroUiClassNames.input}
                        />

                    </div>
                    <Button 
                        color='primary'
                    >
                        Guardar empresa
                    </Button>
                </form>

            </div>
        </section>
    )
}
