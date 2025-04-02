"use client"
import { useWarehouses } from '../hooks/useWarehouses'
import { heroUIStyles } from "@/lib/heroui-styles"

import { Chip } from '@heroui/chip';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table"


import { formatDate } from "@/lib/helpers";
import { PaginationButtons } from '@/components/PaginationButtons';
import { WarehousesTableHeader } from './WarehousesTableHeader';
export const WarehousesTable = () => {

    const { isLoading, meta, warehouses } = useWarehouses()
    return (
        <section className='animated-section'>
            <div className="container">
                <Table
                    isStriped
                    isCompact
                    classNames={heroUIStyles.table}
                    aria-label="Tabla para la gestion de almacenes"
                    topContent={<WarehousesTableHeader/>}
                    bottomContent={
                        <PaginationButtons totalPages={meta?.lastPage} page={meta?.page} />
                    }
                >
                    <TableHeader>
                        <TableColumn>Nombre</TableColumn>
                        <TableColumn>Dirección</TableColumn>
                        <TableColumn>Estado</TableColumn>
                        <TableColumn>F. Creación</TableColumn>
                        <TableColumn>Ultima Actualización</TableColumn>
                        <TableColumn>Acciones</TableColumn>
                    </TableHeader>
                    <TableBody
                        isLoading={isLoading}
                        loadingContent={"Cargando..."}
                        emptyContent={"No hay almacenes para mostrar"}
                    >
                        {
                            warehouses.map(warehouse => (

                                <TableRow key={warehouse.id} className='text-gray-600 font-medium'>
                                    <TableCell>
                                        {warehouse.name}
                                    </TableCell>

                                    <TableCell>
                                        {warehouse.address}
                                    </TableCell>

                                    <TableCell>
                                        <Chip
                                            size='sm'
                                            variant='dot'
                                            classNames={heroUIStyles.chip}
                                            color={warehouse.isActive ? "success" : "danger"}
                                        >
                                            {warehouse.isActive ? "Activo" : "Desactivado"}
                                        </Chip>
                                    </TableCell>


                                    <TableCell>
                                        {formatDate(warehouse.createdAt)}
                                    </TableCell>


                                    <TableCell>
                                        {formatDate(warehouse.updatedAt)}
                                    </TableCell>
                                    <TableCell>
                                        Acciones
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>

        </section>
    )
}
