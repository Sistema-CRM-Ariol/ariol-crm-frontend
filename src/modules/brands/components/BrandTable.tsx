"use client"
import { heroUIStyles } from "@/lib/heroui-styles"

import { Chip } from '@heroui/chip';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table"

import { PaginationButtons } from "@/components/PaginationButtons"
import { BrandTableHeader } from "./BrandTableHeader";
import { useBrands } from "../hooks/useBrands";
import { formatDate } from "@/lib/helpers";


export const BrandTable = () => {
    const { brands, isLoading, meta } = useBrands();
    return (
        <section className='animated-section'>
            <div className="container">
                <Table
                    isStriped
                    isCompact
                    classNames={heroUIStyles.table}
                    aria-label="Tabla para la gestion de productos"
                    topContent={
                        <BrandTableHeader />
                    }
                    bottomContent={
                        <PaginationButtons totalPages={meta?.lastPage} page={meta?.page} />
                    }
                >
                    <TableHeader>
                        <TableColumn>Nombre</TableColumn>
                        <TableColumn>Descripción</TableColumn>
                        <TableColumn>Estado</TableColumn>
                        <TableColumn>F. Creación</TableColumn>
                        <TableColumn>Ultima Actualización</TableColumn>
                        <TableColumn>Acciones</TableColumn>
                    </TableHeader>
                    <TableBody
                        isLoading={isLoading}
                        loadingContent={"Cargando..."}
                        emptyContent={"No hay productos para mostrar"}
                    >
                        {
                            brands.map(brand => (
                                <TableRow key={brand.id} className='text-gray-600 font-medium'>
                                    <TableCell>
                                        {brand.name}
                                    </TableCell>
                                    
                                    <TableCell>
                                        {brand.description}
                                    </TableCell>
                                    
                                    <TableCell>
                                        <Chip
                                            size='sm'
                                            variant='dot'
                                            classNames={heroUIStyles.chip}
                                            color={brand.isActive ? "success" : "danger"}
                                        >
                                            {brand.isActive ? "Activo" : "Desactivado"}
                                        </Chip>
                                    </TableCell>

                                    
                                    <TableCell>
                                        {formatDate(brand.createdAt)}
                                    </TableCell>

                                    
                                    <TableCell>
                                        {formatDate(brand.updatedAt)}
                                    </TableCell>
                                    <TableCell className='flex'>
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
