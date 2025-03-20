import { ProductsHeader } from "@/modules/products/components/ProductsHeader";
import { Metadata } from "next";

export default function ProductsManagementLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <ProductsHeader/>
            {children}
        </>
    );
}

export const metadata: Metadata = {
    title: 'Gestion de productos',
    description: 'Controla toda la información relaciona con tus productos',
}

