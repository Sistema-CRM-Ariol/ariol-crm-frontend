"use server"

import apiClient from "@/lib/apiClient";
import { handleServerActionError } from "@/lib/helpers";
import { FilteredPaginationOptions } from "@/interfaces/filtered-pagination-options.interface";
import type { GerAllCategoriesResponse } from "../interfaces/get-all-categories-response.interface";

export const getAllCategories = async ({ limit, page, isActive, search }: FilteredPaginationOptions) => {
    try {
        const { data } = await apiClient.get<GerAllCategoriesResponse>('/categories', {
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