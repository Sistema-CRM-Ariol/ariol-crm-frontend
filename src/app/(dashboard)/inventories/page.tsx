import { Suspense } from "react";

import { LoadingView } from "@/components/LoadingView";

import { InventoryTable } from "@/modules/inventories/components/InventoryTable";
import { InventoryHeader } from "@/modules/inventories/components/InventoryHeader";
import { InventaryOverviewCards } from "@/modules/inventories/components/InventaryOverviewCards";

export default function InventoriesPage() {
    return (
        <>
            <InventoryHeader />
            <InventaryOverviewCards />
            <Suspense fallback={<LoadingView />}>
                <InventoryTable />
            </Suspense>
        </>
    );
}