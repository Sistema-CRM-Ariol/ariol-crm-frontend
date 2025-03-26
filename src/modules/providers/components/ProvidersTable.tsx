"use client"

import { formatDate } from "@/lib/helpers";
import { heroUIStyles } from "@/lib/heroui-styles"
import { useProviders } from "../hooks/useProviders";

import { Chip } from '@heroui/chip';
import { ProvidersTableHeader } from "./ProvidersTableHeader";
import { PaginationButtons } from "@/components/PaginationButtons"
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table"


export const ProvidersTable = () => {
    const { providers, isLoading, meta } = useProviders();

    return (
        <section className='pt-8'>
            <div className="container">
                <Table
                    isStriped
                    isCompact
                    classNames={heroUIStyles.table}
                    aria-label="Tabla para la gestion de proveedores"
                    topContent={
                        <ProvidersTableHeader />
                    }
                    bottomContent={
                        <PaginationButtons totalPages={meta?.lastPage} page={meta?.page} />
                    }
                >
                    <TableHeader>
                        <TableColumn>Nombre</TableColumn>
                        <TableColumn>Teléfono 1</TableColumn>
                        <TableColumn>Teléfono 2</TableColumn>
                        <TableColumn>Dirección</TableColumn>
                        <TableColumn>Estado</TableColumn>
                        <TableColumn>F. Creación</TableColumn>
                        <TableColumn>Ultima Actualización</TableColumn>
                        <TableColumn>Acciones</TableColumn>
                    </TableHeader>
                    <TableBody
                        isLoading={isLoading}
                        loadingContent={"Cargando..."}
                        emptyContent={"No hay proveedores para mostrar"}
                    >
                        {
                            providers.map(provider => (
                                <TableRow key={provider.id} className='text-gray-600 font-medium'>
                                    <TableCell>
                                        {provider.name}
                                    </TableCell>
                                    
                                    <TableCell>
                                        {provider.phone1}
                                    </TableCell>

                                    <TableCell>
                                        {provider.phone2}
                                    </TableCell>

                                    <TableCell>
                                        {provider.direction}
                                    </TableCell>
                                    
                                    <TableCell>
                                        <Chip
                                            size='sm'
                                            variant='dot'
                                            classNames={heroUIStyles.chip}
                                            color={provider.isActive ? "success" : "danger"}
                                        >
                                            {provider.isActive ? "Activo" : "Desactivado"}
                                        </Chip>
                                    </TableCell>
                                    
                                    <TableCell>
                                        {formatDate(provider.createdAt)}
                                    </TableCell>
                                    
                                    <TableCell>
                                        {formatDate(provider.updatedAt)}
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
