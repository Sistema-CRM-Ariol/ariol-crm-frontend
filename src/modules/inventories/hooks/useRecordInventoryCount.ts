import { useMutation } from "@tanstack/react-query"
import { recordInventoryCount } from "../actions/record-inventory-count"
import { addToast } from "@heroui/toast"


export const useRecordInventoryCount = () => {


    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: recordInventoryCount,
        onSuccess: (data) => {
            addToast({
                color: 'success',
                title: data.message,
            })
        },
        onError: (error) => {
            addToast({
                color: 'danger',
                title: error.message,
            })
        }
    })


    return {
        handleSubmit: mutate,
        isPending,
        isSuccess
    }
}