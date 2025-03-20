import { NewClientForm } from "@/modules/clients/components/new-client-form/NewClientForm";
import { Metadata } from "next";

export default function NewClientPage() {

    return (
        <>
            <NewClientForm />
        </>
    );
}

export const metadata: Metadata = {
    title: "Ariol CRM - Nuevo Cliente",
    description: "Crea un nuevo cliente en Ariol CRM."
}