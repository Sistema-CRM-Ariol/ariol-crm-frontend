import { Suspense } from "react";
import { Metadata } from "next";

import { LoadingView } from "@/components/LoadingView";

import { WarehouseHeader } from "@/modules/warehouses/components/WarehouseHeader";
import { WarehousesTable } from "@/modules/warehouses/components/WarehousesTable";
import { NewWarehouseForm } from "@/modules/warehouses/components/NewWarehouseForm";

export default function WarehousesPage() {
    return (
        <>
            <WarehouseHeader/>
            <NewWarehouseForm/>
            <Suspense fallback={<LoadingView/>}>
                <WarehousesTable/>
            </Suspense>
        </>
    );
}

export const metadata: Metadata = {
    title: 'Almacenes - Ariol CRM',
    description: 'Gestión de almacenes',
}