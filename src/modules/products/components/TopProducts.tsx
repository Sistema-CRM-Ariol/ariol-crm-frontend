"use client"
import React from 'react'
import Image from 'next/image';

import NotImage from '@/assets/images/not-image.jpg';

import { useProducts } from '../hooks/useProducts';
import { heroUIStyles } from '@/lib/heroui-styles'
import { Table, TableBody, TableColumn, TableHeader, TableRow, TableCell } from '@heroui/table';

export const TopProducts = () => {
    const { products, isLoading } = useProducts();

    return (
        <Table
            isStriped
            isCompact
            classNames={heroUIStyles.table}
            aria-label="Tabla para la gestion de productos"
            topContent={<h2>Productos mas vendidos</h2>}
        >
            <TableHeader>
                <TableColumn>Nro Serie</TableColumn>
                <TableColumn>Imagen</TableColumn>
                <TableColumn>Nombre</TableColumn>
                <TableColumn>Categoria</TableColumn>
                <TableColumn>Marca</TableColumn>
            </TableHeader>
            <TableBody
                isLoading={isLoading}
                loadingContent={"Cargando..."}
                emptyContent={"No hay productos para mostrar"}
            >
                {
                    products.map((product) => (
                        <TableRow key={product.id} className='text-gray-600 font-medium'>

                            <TableCell>
                                {product.serialNumber}
                            </TableCell>

                            <TableCell>
                                <Image
                                    src={NotImage}
                                    alt={product.name}
                                    width={50}
                                    height={50}
                                />
                            </TableCell>

                            <TableCell width={250}>
                                {product.name}
                            </TableCell>

                            <TableCell>
                                {product.category.name}
                            </TableCell>

                            <TableCell>
                                {product.brand.name}
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
