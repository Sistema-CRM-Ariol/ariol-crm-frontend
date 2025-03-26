"use client"
import { heroUIStyles } from '@/lib/heroui-styles';

import { useCompanies } from '../hooks/useCompanies';
import { PaginationButtons } from '@/components/PaginationButtons';

import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table"
import { formatDate } from '@/lib/helpers';
import { CompanyTableHeader } from './CompanyTableHeader';
import { DeleteCompanyModal } from './DeleteCompanyModal';

export const CompanyTable = () => {

    const { companies, meta, isLoading } = useCompanies();

    return (
        <section className='animated-section'>
            <div className="container">

                <Table
                    isStriped
                    classNames={heroUIStyles.table}
                    aria-label="Tabla para la gestion de empresas"
                    topContent={<CompanyTableHeader />}
                    bottomContent={
                        <PaginationButtons totalPages={meta?.lastPage} page={meta?.page} />
                    }
                >
                    <TableHeader>
                        <TableColumn>Nombre</TableColumn>
                        <TableColumn>Dirección</TableColumn>
                        <TableColumn>Descripcion</TableColumn>
                        <TableColumn>F. Creación</TableColumn>
                        <TableColumn>Acciones</TableColumn>
                    </TableHeader>
                    <TableBody
                        isLoading={isLoading}
                        loadingContent={"Cargando..."}
                        emptyContent={"No se encontradron clientes"}
                    >
                        {
                            companies.map(company => (

                                <TableRow key={company.id} className='text-gray-600 font-medium'>
                                    <TableCell>{company.name}</TableCell>
                                    <TableCell>{company.direction}</TableCell>
                                    <TableCell width={250}>
                                        <span className='line-clamp-1'>{company.description}</span>
                                    </TableCell>
                                    <TableCell>{formatDate(company.createdAt)}</TableCell>
                                    <TableCell>
                                        
                                        <DeleteCompanyModal company={company} />
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
