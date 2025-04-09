import { Suspense } from 'react';

import { LoadingView } from '@/components/LoadingView';
import { NewCompanyForm } from '@/modules/companies/components/NewCompanyForm';

import { CompanyTable } from '@/modules/companies/components/CompanyTable';

export default function CompaniesPage() {
    return (
        <>
            <NewCompanyForm/>
            <Suspense fallback={<LoadingView/>}>
                <CompanyTable/>
            </Suspense>
        </>
    );
}