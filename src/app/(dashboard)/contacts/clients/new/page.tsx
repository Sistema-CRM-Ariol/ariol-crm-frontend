import { Suspense } from "react";
import { Metadata } from "next";

import { LoadingView } from "@/components/LoadingView";
import { NewClientForm } from "@/modules/clients/components/new-client-form/NewClientForm";

export default function NewClientPage() {

    return (
        <Suspense fallback={<LoadingView/>}>
            <NewClientForm />
        </Suspense>
    );
}

export const metadata: Metadata = {
    title: "Ariol CRM - Nuevo Cliente",
    description: "Crea un nuevo cliente en Ariol CRM."
}