"use server"
import { isAxiosError } from "axios";
import { revalidatePath } from "next/cache";

import apiClient from "@/lib/apiClient";

export const deleteClient = async (id: number | string) => {
    try {
        
        const { data } = await apiClient.delete<{message: string}>(`/clients/${ id }`);

        revalidatePath('/admin/clients');

        return {
            error: null,
            message: data.message, 
        };

    } catch (error) {
        
        console.log(error);

        if( isAxiosError(error) ){
            return {
                error: true,
                message: error.response?.data.message 
            }
        }

        throw error;
    }
}