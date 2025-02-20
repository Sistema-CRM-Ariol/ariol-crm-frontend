
import { ClientsOverview } from "@/modules/clients/components/ClientsOverview";
import { ClientTable } from "@/modules/clients/components/ClientTable";

export default function ClientsPage() {
    return (
        <>
            <ClientsOverview/>
            <ClientTable/>
        </>
    );
}