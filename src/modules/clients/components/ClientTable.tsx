"use client"
import { PaginationButtons } from '@/components/PaginationButtons';
import { useClients } from '../hooks/useClients'
import { heroUiClassNames } from '@/lib/heroui-classnames';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table"
import { ClientTableHeader } from './ClientTableHeader';
import { DeleteClientButton } from './DeleteClientButton';

export const ClientTable = () => {

    const { clients, meta, isLoading } = useClients();

    return (
        <section className='pt-8'>
            <div className="container">

                <Table
                    isStriped
                    classNames={heroUiClassNames.table}
                    aria-label="Tabla para la gestion de clientes"
                    topContent={
                        <ClientTableHeader />
                    }
                    bottomContent={
                        <PaginationButtons totalPages={meta?.lastPage} page={meta?.page} />
                    }
                >
                    <TableHeader>
                        <TableColumn>NIT</TableColumn>
                        <TableColumn>Nombre</TableColumn>
                        <TableColumn>Cargo</TableColumn>
                        <TableColumn>Direccion</TableColumn>
                        <TableColumn>Correo</TableColumn>
                        <TableColumn>Telefono</TableColumn>
                        <TableColumn>Acciones</TableColumn>
                    </TableHeader>
                    <TableBody
                        isLoading={isLoading}
                        loadingContent={"Cargando..."}
                        emptyContent={"No se encontradron clientes"}
                    >
                        {
                            clients.map(client => (

                                <TableRow key={client.id} className='text-gray-600 font-medium'>
                                    <TableCell>{client.nit}</TableCell>
                                    <TableCell>{client.name}</TableCell>
                                    <TableCell>{client.position}</TableCell>
                                    <TableCell>{client.address}</TableCell>
                                    <TableCell>{client.emails[0] ? client.emails[0] : 'No agregados'}</TableCell>
                                    <TableCell>{client.phones[0] ? client.phones[0] : 'No agregados'}</TableCell>
                                    <TableCell className='flex'>
                                        <DeleteClientButton client={client} />
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
