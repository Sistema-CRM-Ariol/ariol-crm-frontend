import { ProductTable } from "@/modules/products/components/ProductTable";
import { Suspense } from "react";

export default function ProductsPage() {
    return (
        <>
            <Suspense >
                <ProductTable/>
            </Suspense>
        </>
    );
}