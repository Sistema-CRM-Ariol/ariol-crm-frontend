import Link from 'next/link';

import { SearchClientInput } from './SearchClientInput';
import { StatusFilter } from '@/components/StatusFilter';

import { Download01Icon, PlusSignIcon } from 'hugeicons-react'
import { Button } from '@heroui/button';


export const ClientTableHeader = () => {

    return (
        <div className='clients-table__header'>

            <h2 className='text-xl'>Listado de clientes</h2>

            <div className='flex flex-col lg:flex-row justify-between items-center'>
                <SearchClientInput />

                <div className="flex gap-3">
                    <StatusFilter />

                    <Link href='/contacts/clients/new'>
                        <Button
                            endContent={<PlusSignIcon size={18} />}
                            size="md"
                            color='primary'
                        >
                            Agregar Cliente
                        </Button>
                    </Link>



                    <Link href='/contacts/clients/general-report' target='_blank'>
                        <Button
                            endContent={<Download01Icon size={18} />}
                            size="md"
                            className='bg-indigo-500 text-white'
                        >
                            Descargar reporte
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
