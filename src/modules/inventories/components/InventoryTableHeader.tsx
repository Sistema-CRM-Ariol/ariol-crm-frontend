import React from 'react'
import Link from 'next/link'

import { Button } from '@heroui/button'
import { Download01Icon } from 'hugeicons-react'

import { InputSearchTable } from '@/components/InputSearchTable'
import { WarehouseFilter } from '@/modules/warehouses/components/WarehouseFilter'

export const InventoryTableHeader = () => {
    return (
        <div className='table__header'>

            <h2 className='table__title'>Productos en inventario</h2>

            <div className='table__header--options'>
                <InputSearchTable placeholder='Buscar productos' />

                <div className="flex gap-4">
                    <WarehouseFilter/>
                    
                    <Link href='/contacts/clients/new'>
                        <Button
                            color='primary'
                        >
                            + Agregar producto
                        </Button>
                    </Link>



                    <Link href='/contacts/clients/general-report' target='_blank'>
                        <Button
                            startContent={<Download01Icon size={18} />}
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
