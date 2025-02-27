"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from '@heroui/button';
import { Download01Icon, PlusSignIcon } from 'hugeicons-react';

import { SearchClientInput } from '@/modules/clients/components/SearchClientInput';


export const CompanyTableHeader = () => {
    const router = useRouter();

    return (
        <div className='companies-table__header'>

            <h2 className='text-xl'>Listado de empresas</h2>

            <div className='flex flex-col lg:flex-row justify-between items-center'>
                <SearchClientInput />
                <div className="flex gap-3">
                    <Link href='/contacts/companies/general-report' target='_blank'>
                        <Button
                            startContent={<Download01Icon size={16} />}
                            size="md"
                            className='bg-blue-500 text-white'
                        >
                            Descargar reporte
                        </Button>
                    </Link>
                    <Button
                        color='primary'
                        startContent={<PlusSignIcon size={16} />}
                        onPress={() => router.push('/admin/contacts/companies/new')}
                    >
                        Agregar empresa
                    </Button>
                </div>
            </div>
        </div>
    )
}
