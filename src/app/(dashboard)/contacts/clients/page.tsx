
import { ClientsOverview } from "@/modules/clients/components/ClientsOverview";
import { ClientTable } from "@/modules/clients/components/ClientTable";
import { Metadata } from "next";

export default function ClientsPage() {
    return (
        <>
            <ClientsOverview/>
            <ClientTable/>
        </>
    );
}


export const metadata: Metadata = {
    title: "Ariol CRM - Clientes",
    description: "Gestiona tus clientes de forma eficiente y eficaz."
}

