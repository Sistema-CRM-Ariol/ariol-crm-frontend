"use server"
import apiClient from "@/lib/apiClient";
import { handleServerActionError } from "@/lib/helpers";


interface ChangeClientStatusOptions {
    id: string;
    status: boolean;
}

export const changeClientStatus = async ({ id, status }: ChangeClientStatusOptions) => {
    try {
        
        const { data } = await apiClient.patch(`/clients/${id}`, {
            isActive: status
        })
    
    
        return data;
        
    } catch (error) {
        throw handleServerActionError(error)
    }

}
