"use server"
import { cookies } from "next/headers"

import apiClient from "@/lib/apiClient";
import { LoginUserResponse } from "../interfaces/login-user-response.interface";


export const validateToken = async () => {
    
    const cookiesStore = await cookies();

    const token = cookiesStore.get('ARIOL_TOKEN')?.value;

    if( !token ){
        return false;
    }

    try {

        const { data } = await apiClient.get<LoginUserResponse>('/auth/verify', {
            headers: {
                Authorization: 'Bearer ' + token,
            }
        })

        return data;

    } catch (error) {
        return false;
    }

}