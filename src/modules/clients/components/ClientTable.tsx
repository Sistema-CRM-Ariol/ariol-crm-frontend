"use client"
import { useClients } from '../hooks/useClients'
import { heroUIStyles } from '@/lib/heroui-styles';
import { ClientTableHeader } from './ClientTableHeader';
import { PaginationButtons } from '@/components/PaginationButtons';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table"
import { Chip } from '@heroui/chip';
import { ChangeStatusButton } from '@/components/ChangeStatusButton';
import { useChangeClientStatus } from '../hooks/useChangeClientStatus';

export const ClientTable = () => {
    const { clients, meta, isLoading } = useClients();

    return (
        <section className='animated-section'>
            <div className="container">

                <Table
                    isStriped
                    isCompact
                    classNames={heroUIStyles.table}
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
                        <TableColumn>Estado</TableColumn>
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
                        emptyContent={"No hay clientes para mostrar"}
                    >
                        {
                            clients.map(client => (
                                <TableRow key={client.id} className='text-gray-600 font-medium'>
                                    <TableCell>{client.nit}</TableCell>
                                    <TableCell>
                                        <Chip
                                            size='sm'
                                            variant='dot'
                                            classNames={heroUIStyles.chip}
                                            color={client.isActive ? "success" : "danger"}
                                        >
                                            {client.isActive ? "Activo" : "Desactivado"}
                                        </Chip>
                                    </TableCell>
                                    <TableCell>{client.name}</TableCell>
                                    <TableCell>{client.position}</TableCell>
                                    <TableCell>{client.address}</TableCell>
                                    <TableCell>{client.emails[0] ? client.emails[0] : 'No agregados'}</TableCell>
                                    <TableCell>{client.phones[0] ? client.phones[0] : 'No agregados'}</TableCell>
                                    <TableCell className='flex'>
                                        <ChangeClientStatus
                                            id={client.id}
                                            status={ client.isActive }
                                        />
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


const ChangeClientStatus = ({ id, status }: { id: string, status: boolean }) => {

    const { handleDeactivateClient, isPending } = useChangeClientStatus()

    return (
        <ChangeStatusButton
            isActive={status}
            onChangeStatus={(status) => handleDeactivateClient(id, status)}
            isPending={isPending}
            tooltipLabels={{
                activate: "Activar cliente",
                deactivate: "Desactivar cliente"
            }}
        />
    )
}