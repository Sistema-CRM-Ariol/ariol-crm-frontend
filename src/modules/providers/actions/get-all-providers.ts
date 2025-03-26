"use server"
import apiClient from "@/lib/apiClient";

import { handleServerActionError } from "@/lib/helpers";
import { GetAllProvidersResponse } from "../interfaces/get-all-providers-response.interface";
import { FilteredPaginationOptions } from "@/interfaces/filtered-pagination-options.interface";


export const getAllProviders = async ({ limit, page, isActive, search }: FilteredPaginationOptions) => {
    try {
        const { data } = await apiClient.get<GetAllProvidersResponse>('/providers', {
            params: {
                page,
                limit,
                search,
                isActive
            }
        })

        return data;

    } catch (error) {
        throw handleServerActionError(error);
    }
}