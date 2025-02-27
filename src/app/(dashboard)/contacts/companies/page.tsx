import { CompanyTable } from '@/modules/companies/components/CompanyTable';
import { NewCompanyForm } from '@/modules/companies/components/NewCompanyForm';

export default function CompaniesPage() {
    return (
        <>
            <NewCompanyForm/>
            <CompanyTable/>
        </>
    );
}