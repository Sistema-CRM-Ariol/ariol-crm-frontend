"use server"
import { revalidatePath } from "next/cache";

import apiClient from "@/lib/apiClient";
import { handleServerActionError } from "@/lib/helpers";

export const deleteCompany = async (id: number | string) => {
    try {
        
        const { data } = await apiClient.delete<{message: string}>(`/companies/${ id }`);

        revalidatePath('/contacts/companies');

        return {
            error: null,
            message: data.message, 
        };

    } catch (error) {
        
        return handleServerActionError(error)
    }
}