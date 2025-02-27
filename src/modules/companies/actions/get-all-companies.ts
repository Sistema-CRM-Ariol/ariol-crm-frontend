"use server"
import apiClient from "@/lib/apiClient"
import { handleServerActionError } from "@/lib/helpers"
import { PaginatedResponse } from "@/interfaces/pagination"

import { CompanySummary } from "../interfaces/company-summary.interface"


interface GetAllCompaniesOptions {
    page: number;
    limit: number;
    search?: string;
}

export const getAllCompanies = async (options: GetAllCompaniesOptions): Promise<PaginatedResponse<CompanySummary, 'companies'>> => {
    try {
        const { data } = await apiClient.get<PaginatedResponse<CompanySummary, 'companies'>>('/companies', {
            params: {
                page: options.page,
                limit: options.limit,
                search: options.search
            }
        })

        return data;

    } catch (error) {
        return handleServerActionError(error);
    }
}