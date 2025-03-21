"use client"

import { heroUIStyles } from "@/lib/heroui-styles"
import { useProducts } from "../hooks/useProducts"

import { Chip } from '@heroui/chip';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table"

import { PaginationButtons } from "@/components/PaginationButtons"
import { ProductTableHeader } from "./ProductTableHeader";


export const ProductTable = () => {

    const { isLoading, meta, products } = useProducts()

    return (
        <section className='pt-8'>
            <div className="container">
                <Table
                    isStriped
                    isCompact
                    classNames={heroUIStyles.table}
                    aria-label="Tabla para la gestion de productos"
                    topContent={
                        <ProductTableHeader />
                    }
                    bottomContent={
                        <PaginationButtons totalPages={meta?.lastPage} page={meta?.page} />
                    }
                >
                    <TableHeader>
                        <TableColumn>Nro Serie</TableColumn>
                        <TableColumn>Imagen</TableColumn>
                        <TableColumn>Nombre</TableColumn>
                        <TableColumn>Estado</TableColumn>
                        <TableColumn>Categoria</TableColumn>
                        <TableColumn>Marca</TableColumn>
                        <TableColumn>Proveedor</TableColumn>
                        <TableColumn>Acciones</TableColumn>
                    </TableHeader>
                    <TableBody
                        isLoading={isLoading}
                        loadingContent={"Cargando..."}
                        emptyContent={"No hay productos para mostrar"}
                    >
                        {
                            products.map(product => (
                                <TableRow key={product.id} className='text-gray-600 font-medium'>
                                    <TableCell>{product.serialNumber}</TableCell>
                                    <TableCell>{product.image}</TableCell>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>
                                        <Chip
                                            size='sm'
                                            variant='dot'
                                            classNames={heroUIStyles.chip}
                                            color={product.isActive ? "success" : "danger"}
                                        >
                                            {product.isActive ? "Activo" : "Desactivado"}
                                        </Chip>
                                    </TableCell>
                                    <TableCell>{product.category.name}</TableCell>
                                    <TableCell>{product.brand.name}</TableCell>
                                    <TableCell>{product.provider.name}</TableCell>
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
