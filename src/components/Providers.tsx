"use client"
import { queryClient } from '@/lib/query-client';
import { QueryClientProvider } from "@tanstack/react-query";

export default function Providers({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <QueryClientProvider client={ queryClient }>
                { children }
            </QueryClientProvider>
        </>
    );
}