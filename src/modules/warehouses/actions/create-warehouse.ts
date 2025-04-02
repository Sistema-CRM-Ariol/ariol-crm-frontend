"use server"

import apiClient from "@/lib/apiClient";
import { handleServerActionError } from "@/lib/helpers";

import { WarehouseSummary } from "../interfaces/warehouse-summary.interface";
import { CreateWarehouseOptions } from "../interfaces/create-warehouse-options.interface";



export const createWarehouse = async (options: CreateWarehouseOptions) => {
    
    try {
        const { data } = await apiClient.post<{message: string, warehouse: WarehouseSummary}>('/warehouses', options);
    
        return data;
        
    } catch (error) {
        throw handleServerActionError(error);
    }

}