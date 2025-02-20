import { useMutation } from "@tanstack/react-query"
import { deleteClient } from "../actions/delete-client"
import { toast } from "sonner"
import { queryClient } from "@/lib/query-client"



export const useDeleteClient = (id: string) => {


    const { mutate, isPending } = useMutation({
        mutationFn: deleteClient,
        onSuccess(data) {
            toast.success(data.message)
            queryClient.invalidateQueries({ queryKey: ['clients'] })
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