"use client"
import { heroUIStyles } from "@/lib/heroui-styles"
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table"
import Image from "next/image"
import NotImage from '@/assets/images/not-image.jpg';
import { InventoryTableHeader } from "./InventoryTableHeader";

export const InventoryTable = () => {



    return (
        <section className="pt-8">
            <div className="container">
                <Table
                    isStriped
                    isCompact
                    classNames={heroUIStyles.table}
                    aria-label="Tabla para la gestion de productos"
                    topContent={
                        <InventoryTableHeader />
                    }
                // bottomContent={
                //     <PaginationButtons totalPages={meta?.lastPage} page={meta?.page} />
                // }
                >
                    <TableHeader>
                        <TableColumn>Codigo</TableColumn>
                        <TableColumn>Imagen</TableColumn>
                        <TableColumn>Nombre</TableColumn>
                        <TableColumn>Precio</TableColumn>
                        <TableColumn>Stock</TableColumn>
                        <TableColumn>Acciones</TableColumn>
                    </TableHeader>
                    <TableBody
                        // isLoading={isLoading}
                        loadingContent={"Cargando..."}
                        emptyContent={"No hay productos para mostrar"}
                    >

                        <TableRow key={2} className='text-gray-600 font-medium'>

                            <TableCell width={100}>
                                SN-001-001
                            </TableCell>

                            <TableCell width={100}>
                                <Image
                                    src={NotImage}
                                    alt={"product.name"}
                                    width={50}
                                    height={50}
                                />
                            </TableCell>

                            <TableCell width={250}>
                                Name
                            </TableCell>

                            <TableCell>
                                stock
                            </TableCell>

                            <TableCell>
                                stock
                            </TableCell>


                            <TableCell>
                                Acciones
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </section>
    )
}
