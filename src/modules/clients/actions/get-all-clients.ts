"use server"

import { PaginatedResponse } from "@/interfaces/pagination"
import { ClientSummary } from "../interfaces/client-summary.interface"
import apiClient from "@/lib/apiClient"

export const getAllClients = async (options: {
    page: number;
    limit: number;
    search?: string;
}) => {
    try {
        const { data } = await apiClient.get<PaginatedResponse<ClientSummary, 'clients'>>('/clients', {
            params: {
                page: options.page,
                limit: options.limit,
                search: options.search
            }
        })

        return data;

    } catch (error) {
        throw error;
    }
}