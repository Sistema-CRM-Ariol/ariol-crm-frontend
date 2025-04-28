// components/InventoryTable.tsx
"use client"
import Image from "next/image";
import NotImage from "@/assets/images/not-image.jpg";


import { standardFormat } from "@/lib/helpers";
import { heroUIStyles } from "@/lib/heroui-styles";

import { InventoryTableHeader } from "./InventoryTableHeader";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table";
import { useRealTimeInventories } from "../hooks/useRealTimeInventories";
import { InventoryItem } from "../interfaces/inventory-item.interface";

interface Props {
    initialData: InventoryItem[];
}

export const InventoryTable = ({ initialData }: Props) => {

    const { inventories } = useRealTimeInventories(initialData);
    
    return (
        <section className="pt-8">
            <div className="container">
                <Table
                    isStriped
                    isCompact
                    classNames={heroUIStyles.table}
                    aria-label="Tabla para la gestión de inventarios"
                    topContent={<InventoryTableHeader />}
                >
                    <TableHeader>
                        <TableColumn>Código</TableColumn>
                        <TableColumn>Imagen</TableColumn>
                        <TableColumn>Nombre</TableColumn>
                        <TableColumn>Precio</TableColumn>
                        <TableColumn>Stock</TableColumn>
                        <TableColumn>Acciones</TableColumn>
                    </TableHeader>
                    <TableBody
                        loadingContent={"Cargando..."}
                        emptyContent={"No hay inventarios para mostrar"}
                    >
                        {inventories.map((item) => (
                            <TableRow key={item.id} className="text-gray-600 font-medium">
                                <TableCell width={100}>
                                    {item.product.serialNumber}
                                </TableCell>
                                <TableCell width={100}>
                                    <Image
                                        src={item.product.image ?? NotImage}
                                        alt={item.product.name}
                                        width={50}
                                        height={50}
                                    />
                                </TableCell>
                                <TableCell width={250}>
                                    {item.product.name}
                                </TableCell>
                                <TableCell>
                                    { standardFormat(item.product.priceSale) } Bs
                                </TableCell>
                                <TableCell>
                                    {item.quantity} u.
                                </TableCell>
                                <TableCell>
                                    {/* Aquí puedes agregar botones para editar o eliminar */}
                                    Editar | Eliminar
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </section>
    );
};
