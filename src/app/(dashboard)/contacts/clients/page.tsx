import { Suspense } from "react";
import { Metadata } from "next";

import { LoadingView } from "@/components/LoadingView";
import { ClientTable } from "@/modules/clients/components/ClientTable";
import { ClientsOverview } from "@/modules/clients/components/ClientsOverview";

export default function ClientsPage() {
    return (
        <>
            <ClientsOverview/>
            <Suspense fallback={<LoadingView/>}>
                <ClientTable/>
            </Suspense>
        </>
    );
}


export const metadata: Metadata = {
    title: "Ariol CRM - Clientes",
    description: "Gestiona tus clientes de forma eficiente y eficaz."
}

