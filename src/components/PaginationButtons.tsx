"use client"
import { useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Pagination } from '@heroui/pagination';


interface Props {
    page?: number;
    totalPages?: number;
}

export const PaginationButtons = ({ page, totalPages }: Props) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);

    const handleChangePage = (newPage: number) => {
        setIsLoading(true);

        const updatedSearchParams = new URLSearchParams(searchParams.toString());
        updatedSearchParams.set('page', newPage.toString());

        const newPath = `${pathname}?${updatedSearchParams.toString()}`;

        router.push(newPath);

        setIsLoading(false);
    };

    return (
        <div className="py-2 px-2 flex justify-between items-center">
            <Pagination
                showControls
                color="primary"
                isDisabled={isLoading}
                page={page}
                total={totalPages || 1}
                variant="light"
                onChange={handleChangePage}
            />
        </div>
    );
}
