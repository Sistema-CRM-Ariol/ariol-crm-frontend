"use server"

import apiClient from "@/lib/apiClient"
import { handleServerActionError } from "@/lib/helpers"

import { PaginatedResponse } from "@/interfaces/pagination"
import { ClientSummary } from "../interfaces/client-summary.interface"



interface GetAllCliensOptions {
    page: number;
    limit: number;
    search?: string;
    isActive?: string;
}


type GetAllClientsResponse = PaginatedResponse<ClientSummary, 'clients'>

export const getAllClients = async ({ limit, page, search, isActive}: GetAllCliensOptions) => {
    try {
        const { data } = await apiClient.get<GetAllClientsResponse>('/clients', {
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