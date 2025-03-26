"use client"
import Image from "next/image";

import { heroUIStyles } from "@/lib/heroui-styles"
import { useProducts } from "../hooks/useProducts"
import NotImage from "@/assets/images/not-image.jpg";

import { Chip } from '@heroui/chip';
import { PaginationButtons } from "@/components/PaginationButtons"
import { ProductTableHeader } from "./ProductTableHeader";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table"


export const ProductTable = () => {

    const { isLoading, meta, products } = useProducts()

    return (
        <section className='animated-section'>
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
                                        <Chip
                                            size='sm'
                                            variant='dot'
                                            classNames={heroUIStyles.chip}
                                            color={product.isActive ? "success" : "danger"}
                                        >
                                            {product.isActive ? "Activo" : "Desactivado"}
                                        </Chip>
                                    </TableCell>
                                    
                                    <TableCell>
                                        {product.category.name}
                                    </TableCell>
                                    
                                    <TableCell>
                                        {product.brand.name}
                                    </TableCell>
                                    
                                    <TableCell>
                                        {product.provider.name}
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
