"use server"

import apiClient from "@/lib/apiClient"
import { CreateClientOptions } from "../interfaces/create-client-options";
import { ClientSummary } from "../interfaces/client-summary.interface";
import { handleServerActionError } from "@/lib/helpers";
import { revalidatePath } from "next/cache";


type CreateClientResponse = {
    client: ClientSummary;
    message: string
}

export const createClient = async (client: CreateClientOptions) => {
    
    try {
        const { data } = await apiClient.post<CreateClientResponse>('/clients', client);
        
        revalidatePath('/contacts/clients');

        return data
        
    } catch (error) {
        // const errorMessage = handleServerActionError(error)
        throw handleServerActionError(error)
    }
} 