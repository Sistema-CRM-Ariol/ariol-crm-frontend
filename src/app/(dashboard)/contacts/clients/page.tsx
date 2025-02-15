import { ClientsHeader } from "@/modules/clients/components/ClientsHeader";
import { ClientTable } from "@/modules/clients/components/ClientTable";

export default function ClientsPage() {
    return (
        <>
            <ClientsHeader/>
            <ClientTable/>
        </>
    );
}