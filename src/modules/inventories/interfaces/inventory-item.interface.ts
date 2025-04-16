export interface InventoryItem {
    id:          string;
    quantity:    number;
    warehouseId: string;
    product:     InventoryProduct;
    createdAt:   Date;
    updatedAt:   Date;
}

export interface InventoryProduct {
    id:       string;
    name:     string;
    slug:     string;
    isActive: boolean;
    serialNumber: string;
    image: string;
    priceSale: number;
}
