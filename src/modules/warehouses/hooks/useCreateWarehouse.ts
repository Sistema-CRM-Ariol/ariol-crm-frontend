"use client"
import { FormEvent } from "react"
import { useMutation } from "@tanstack/react-query"

import { addToast } from "@heroui/toast"
import { queryClient } from "@/lib/query-client"
import { createWarehouse } from "../actions/create-warehouse"

export const useCreateWarehouse = () => {

    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: createWarehouse,
        onSuccess: (data) => {

            addToast({
                color: 'success',
                title: data.message,
            })

            queryClient.invalidateQueries({
                queryKey: ['warehouses']
            })

        },
        onError: (error) => {
            addToast({
                color: 'danger',
                title: error.message,
            })
        }
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {


        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = formData.get('name') as string;
        const address = formData.get('address') as string;

        if( !name || !address ){
            addToast({
                color: 'danger',
                title: 'Todos los campos son obligatorios',
            })

            return;
        
        }

        mutate({ name, address })
    }


    return {
        handleSubmit,
        isPending,
        isSuccess
    }

}