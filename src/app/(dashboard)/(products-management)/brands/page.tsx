import { Suspense } from 'react';

import { BrandTable } from '../../../../modules/brands/components/BrandTable';

export default function BrandsPage() {
    return (
        <>
            <Suspense>
                <BrandTable/>
            </Suspense>
        </>
    );
}