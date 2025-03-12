"use client"
import { queryClient } from '@/lib/query-client';
import { ToastProvider } from '@heroui/toast';
import { QueryClientProvider } from "@tanstack/react-query";

export default function Providers({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <ToastProvider
                placement='top-center'
                
            />
            <QueryClientProvider client={ queryClient }>
                { children }
            </QueryClientProvider>
        </>
    );
}