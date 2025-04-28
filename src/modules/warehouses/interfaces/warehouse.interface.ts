export interface Warehouse {
    id:        string;
    name:      string;
    address:   string;
    isActive:  boolean;
    createdAt: Date;
    updatedAt: Date;
    products:  WarehouseProduct[];
}

export interface WarehouseProduct {
    id:           string;
    image:        string;
    isActive:     boolean;
    name:         string;
    priceSale:    number;
    serialNumber: string;
    slug:         string;
    quantity:     number;
}
