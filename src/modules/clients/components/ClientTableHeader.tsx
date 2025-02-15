"use client"
import { useRouter } from 'next/navigation'

import { Download01Icon, PlusSignIcon } from 'hugeicons-react'
import { Button } from '@heroui/button';
import { SearchClientInput } from './SearchClientInput';

export const ClientTableHeader = () => {

    const router = useRouter();

    return (
        <div className='clients-table__header'>

            <h2 className='text-xl'>Listado de clientes</h2>

            <div className='flex flex-col lg:flex-row justify-between items-center'>
                <SearchClientInput />
                <div className="flex gap-3">
                    <Button
                        onPress={() => router.push('/admin/contacts/clients/new')}
                        endContent={<PlusSignIcon size={18} />}
                        size="md"
                        color='primary'
                    >
                        Agregar Cliente
                    </Button>
                    <Button
                        onPress={() => router.push('/admin/contacts/clients/new')}
                        endContent={<Download01Icon size={18} />}
                        size="md"
                        className='bg-indigo-500 text-white'
                    >
                        Descargar reporte
                    </Button>
                </div>
            </div>
        </div>
    )
}
