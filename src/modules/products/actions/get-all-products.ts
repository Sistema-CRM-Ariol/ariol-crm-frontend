"use server"

import apiClient from "@/lib/apiClient";
import { handleServerActionError } from "@/lib/helpers";

import type { GerAllProductsResponse } from "../interfaces/get-all-products-response.interface";


interface GetAllProductsOptions {
    page: number;
    limit: number;
    search?: string;
    isActive?: string;
}

export const getAllProducts = async ({ limit, page, isActive, search }: GetAllProductsOptions) => {
    try {
        const { data } = await apiClient.get<GerAllProductsResponse>('/products', {
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