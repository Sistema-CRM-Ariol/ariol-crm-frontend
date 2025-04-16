"use client"
import { heroUIStyles } from "@/lib/heroui-styles"

import { Chip } from '@heroui/chip';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table"
import { ExpenseSummary } from "../interfaces/expense-summary.interface";
import { formatDate } from '../../../lib/helpers/index';
import { ExpensesTableHeader } from "./ExpensesTableHeader";

export const ExpensesTable = () => {
    // ARREGLO DE EXPENSES ON 5 ITEMS
    const expenses: ExpenseSummary[] = [
        {
            id: "123-1231zsdasd-123d2daadf",
            code: "OR-001-0002",
            client: "Mattias Duarte",
            createdAt: formatDate(new Date()),
            currency: "USD",
            total: 100,
            status: "PENDING",
            productsQuantity: 2
        },
        {
            id: "123-1231zsdasd-123dasdvadf",
            code: "OR-001-0002",
            client: "Mattias Duarte",
            createdAt: formatDate(new Date()),
            currency: "USD",
            total: 100,
            status: "COMPLETE",
            productsQuantity: 2
        },
        {
            id: "123-1231zsdasd-123dasdahdf",
            code: "OR-001-0002",
            client: "Mattias Duarte",
            createdAt: formatDate(new Date()),
            currency: "USD",
            total: 100,
            status: "CANCEL",
            productsQuantity: 2
        },
        {
            id: "123-1231zsdasd-123das2aadf",
            code: "OR-001-0002",
            client: "Mattias Duarte",
            createdAt: formatDate(new Date()),
            currency: "USD",
            total: 100,
            status: "QUOTATION",
            productsQuantity: 2
        },
        {
            id: "123-1231zsdasd-123dagdaadf",
            code: "OR-001-0002",
            client: "Mattias Duarte",
            createdAt: formatDate(new Date()),
            currency: "USD",
            total: 100,
            status: "PENDING",
            productsQuantity: 2
        },

    ];

    return (
        <section className='animated-section'>
            <div className="container">
                <Table
                    isStriped
                    isCompact
                    classNames={heroUIStyles.table}
                    aria-label="Tabla para la gestion de salidas"
                    topContent={
                        <ExpensesTableHeader />
                    }
                // bottomContent={
                //     <PaginationButtons totalPages={meta?.lastPage} page={meta?.page} />
                // }
                >
                    <TableHeader>
                        <TableColumn>Nro</TableColumn>
                        <TableColumn>Cliente</TableColumn>
                        <TableColumn>Estado</TableColumn>
                        <TableColumn>Divisa</TableColumn>
                        <TableColumn>Precio Total</TableColumn>
                        <TableColumn>Productos</TableColumn>
                        <TableColumn>Fecha de Salida</TableColumn>
                        <TableColumn>Acciones</TableColumn>
                    </TableHeader>
                    <TableBody
                        // isLoading={isLoading}
                        // loadingContent={"Cargando..."}
                        emptyContent={"No hay salidas para mostrar"}
                    >
                        {
                            expenses.map((expense) => (
                                <TableRow key={expense.id} className='text-gray-600 font-medium'>

                                    <TableCell>
                                        {expense.code}
                                    </TableCell>

                                    <TableCell width={250}>
                                        {expense.client}
                                    </TableCell>

                                    <TableCell>
                                        <Chip
                                            size='sm'
                                            variant='bordered'
                                            classNames={heroUIStyles.chipFlat}
                                            color={
                                                expense.status === "COMPLETE" ? "success" :
                                                    expense.status === "PENDING" ? "warning" :
                                                        expense.status === "CANCEL" ? "danger" :
                                                            "secondary"
                                            }
                                        >
                                            {
                                                expense.status === "COMPLETE" ? "Completado" :
                                                    expense.status === "PENDING" ? "Pendiente" :
                                                        expense.status === "CANCEL" ? "Cancelado" :
                                                            "Cotización"
                                            }
                                        </Chip>
                                    </TableCell>

                                    <TableCell>
                                        {expense.currency}
                                    </TableCell>

                                    <TableCell>
                                        {expense.total}
                                    </TableCell>

                                    <TableCell>
                                        {expense.productsQuantity}
                                    </TableCell>

                                    <TableCell>
                                        {expense.createdAt}
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
