import { Suspense } from "react";

import { LoadingView } from "@/components/LoadingView";

import { InventoryTable } from "@/modules/inventories/components/InventoryTable";
import { InventoryHeader } from "@/modules/inventories/components/InventoryHeader";
import { InventaryOverviewCards } from "@/modules/inventories/components/InventaryOverviewCards";
import { getAllItemFromInventories } from "@/modules/inventories/actions/get-all-inventories";

export default async function InventoriesPage() {
    const data = await getAllItemFromInventories({});

    return (
        <>
            <InventoryHeader />
            <InventaryOverviewCards />
            <Suspense fallback={<LoadingView />}>
                <InventoryTable initialData={ data.inventory }/>
            </Suspense>
        </>
    );
}