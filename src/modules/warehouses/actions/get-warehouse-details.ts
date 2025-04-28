"use server"

import apiClient from "@/lib/apiClient";
import { handleServerActionError } from "@/lib/helpers";
import { GetWarehouseDetailsResponse } from "../interfaces/get-warehouse-details-response.interface";


export const getWarehouseDetails = async (id: string) => {
    try {
        
        const { data } = await apiClient.get<GetWarehouseDetailsResponse>('/warehouses/' + id)

        return data;

    } catch (error) {
        throw handleServerActionError(error);
    }
}