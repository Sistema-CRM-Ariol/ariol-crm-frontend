"use server"
import apiClient from "@/lib/apiClient"
import { handleServerActionError } from "@/lib/helpers"

import { FilteredPaginationOptions } from "@/interfaces/filtered-pagination-options.interface"
import { GetAllWarehousesResponse } from "../interfaces/get-all-warehouses-response.interface"


export const getAllWarehouses = async (options: FilteredPaginationOptions) => {

    try {
        
        const { data } = await apiClient.get<GetAllWarehousesResponse>('/warehouses', {
            params: options 
        })

        return data;

    } catch (error) {
        throw handleServerActionError(error);
    }

}