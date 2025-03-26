import { WarehouseHeader } from "@/modules/warehouses/components/WarehouseHeader";
import { WarehousesTable } from "@/modules/warehouses/components/WarehousesTable";

export default function WarehousesPage() {
    return (
        <>
            <WarehouseHeader/>
            <WarehousesTable/>
        </>
    );
}