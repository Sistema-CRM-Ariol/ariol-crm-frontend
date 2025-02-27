"use client"
import { toast } from "sonner"
import { useMutation } from "@tanstack/react-query"

import { queryClient } from "@/lib/query-client"
import { deleteCompany } from "../actions/delete-company"



export const useDeleteCompany = (id: string) => {


    const { mutate, isPending } = useMutation({
        mutationFn: deleteCompany,
        onSuccess(data) {
            toast.success(data.message)
            queryClient.invalidateQueries({ queryKey: ['companies'] })
        },
        onError(error) {
            toast.error('Ocurrio un error', {description: error.message})
        },
        
        
    })

    const handleDelete = () => {
        mutate(id)
    }

    return {
        isPending,
        handleDelete
    }

}