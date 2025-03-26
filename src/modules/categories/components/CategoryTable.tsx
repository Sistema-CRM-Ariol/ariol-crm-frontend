"use client"

import { heroUIStyles } from '@/lib/heroui-styles';
import { useCategories } from '../hooks/useCategories';

import { PaginationButtons } from '@/components/PaginationButtons';

import { Chip } from '@heroui/chip';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@heroui/table';
import { formatDate } from '@/lib/helpers';
import { CategoryTableHeader } from './CategoryTableHeader';

export const CategoryTable = () => {

    const { categories, isLoading, meta } = useCategories()
    

    return (
        <section className='animated-section'>
            <div className="container">
                <Table
                    isStriped
                    isCompact
                    classNames={heroUIStyles.table}
                    aria-label="Tabla para la gestion de productos"
                    topContent={
                        <CategoryTableHeader />
                    }
                    bottomContent={
                        <PaginationButtons totalPages={meta?.lastPage} page={meta?.page} />
                    }
                >
                    <TableHeader>
                        <TableColumn>Nombre</TableColumn>
                        <TableColumn>Estado</TableColumn>
                        <TableColumn>F. Creación</TableColumn>
                        <TableColumn>Ultima Actualización</TableColumn>
                        <TableColumn>Acciones</TableColumn>
                    </TableHeader>
                    <TableBody
                        isLoading={isLoading}
                        loadingContent={"Cargando..."}
                        emptyContent={"No hay categorias para mostrar"}
                    >
                        {
                            categories.map(category => (
                                <TableRow key={category.id} className='text-gray-600 font-medium'>
                                    <TableCell>{category.name}</TableCell>
                                    <TableCell>
                                        <Chip
                                            size='sm'
                                            variant='dot'
                                            classNames={heroUIStyles.chip}
                                            color={category.isActive ? "success" : "danger"}
                                        >
                                            {category.isActive ? "Activo" : "Desactivado"}
                                        </Chip>
                                    </TableCell>
                                    <TableCell>{formatDate(category.createdAt)}</TableCell>
                                    <TableCell>{formatDate(category.updatedAt)}</TableCell>
                                    <TableCell className='flex'>
                                        Acciones
                                        {/* <ChangeClientStatus
                                        id={client.id}
                                        status={client.isActive}
                                    /> */}
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
