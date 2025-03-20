"use client"

import { addToast } from "@heroui/toast"
import { useMutation } from "@tanstack/react-query"


import { queryClient } from "@/lib/query-client"
import { changeClientStatus } from "../actions/change-client-status"


export const useChangeClientStatus = () => {

    const { mutate, isPending } = useMutation({
        mutationFn: changeClientStatus,
        onSuccess: (data) => {
            
            addToast({
                title: 'Se modifico el cliente',
                description: data.message,
                color: "success"
            })

            queryClient.invalidateQueries({
                queryKey: ['clients']
            })


        },
        onError: (error) => {
            console.log(error)
            addToast({
                title: 'Ocurrio un error',
                description: error.message,
                color: "danger"
            })
        }
    })


    const handleDeactivateClient = (id: string, status: boolean) => {
        mutate({id, status})
    }

    return {
        handleDeactivateClient,
        isPending
    }

}
