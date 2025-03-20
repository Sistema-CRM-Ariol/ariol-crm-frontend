export interface ProductSummary {
    name: string;
    slug: string;
    brand: {
        name: string;
    };
    category: {
        name: string;
    };
    provider: {
        name: string;
    };
    id: string;
    image: null | string;
    serialNumber: string;
    isActive: boolean;
    createdAt: Date;
}