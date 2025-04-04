"use server"
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

import { isAxiosError } from "axios";
import apiClient from "@/lib/apiClient";
import { LoginUserResponse } from "../interfaces/login-user-response.interface";


export const loginUser = async (email: string, password: string) => {
    
    const cookiesStore = await cookies();

    try {
        const { data } = await apiClient.post<LoginUserResponse>('/auth/login', { email, password });
        
        cookiesStore.set('ARIOL_USER', JSON.stringify(data.user))
        cookiesStore.set('ARIOL_TOKEN', data.token);
        
        revalidatePath('/auth', 'layout');


        return {
            data,
            error: null
        }


    } catch (error) {
        
        if( isAxiosError(error) ){
            return {
                data: null,
                error: error.response?.data.message
            }
        }

        console.log(error)
        return {
            data: null,
            error: "Revise los logs del sistema"
        }

    }


}