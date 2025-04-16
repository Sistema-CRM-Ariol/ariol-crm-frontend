"use server"

import apiClient from "@/lib/apiClient"
import { GetAllItemsFromInventoriesOptions } from "../interfaces/get-all-items-from-inventories-options.interface"
import { GetAllItemsFromInventoriesResponse } from "../interfaces/get-all-items-from-inventories-response.interface"
import { handleServerActionError } from "@/lib/helpers"




export const getAllItemFromInventories = async (options: GetAllItemsFromInventoriesOptions) => {
    try {
        
        const { data } = await apiClient.get<GetAllItemsFromInventoriesResponse>('/inventories', {
            params: options
        })

        return data;

    } catch (error) {
        throw handleServerActionError(error);
    }

}