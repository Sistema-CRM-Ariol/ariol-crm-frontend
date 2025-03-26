"use server"
import apiClient from "@/lib/apiClient";

import { handleServerActionError } from "@/lib/helpers";
import { FilteredPaginationOptions } from "@/interfaces/filtered-pagination-options.interface";
import { type GetAllBrandsResponse } from "../interfaces/get-all-brands-response.interface";


export const getAllBrands = async ({ limit, page, isActive, search }: FilteredPaginationOptions) => {
    try {
        const { data } = await apiClient.get<GetAllBrandsResponse>('/brands', {
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