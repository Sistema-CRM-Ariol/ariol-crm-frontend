import { Suspense } from 'react';
import { CategoryTable } from '@/modules/categories/components/CategoryTable';

export default function CategoriesPage() {
    return (
        <>
            <Suspense>
                <CategoryTable />
            </Suspense>
        </>
    );
}