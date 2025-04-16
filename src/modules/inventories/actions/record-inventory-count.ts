"use server"

import apiClient from "@/lib/apiClient"
import { InventoryItem } from "../interfaces/inventory-item.interface";
import { handleServerActionError } from "@/lib/helpers";



interface RecordInventoryCountOptions {
    warehouseId: string;
    productId: string;
    quantity: number;
}

export const recordInventoryCount = async (options: RecordInventoryCountOptions) => {
    try {
        
        const { data } = await apiClient.post<{ message: string, inventory: InventoryItem }>('/inventories', options)

        return data;


    } catch (error) {
        throw handleServerActionError(error);
    }
}
