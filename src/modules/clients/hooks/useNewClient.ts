"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation";
import { useMutation } from '@tanstack/react-query';

import { queryClient } from "@/lib/query-client";
import { createClient } from "../actions/create-client";
import { CreateClientOptions } from "../interfaces/create-client-options";

import { addToast } from "@heroui/toast";

export const useNewClient = () => {

    const router = useRouter();

    const [emails, setEmails] = useState<string[]>([""])
    const [phones, setPhones] = useState<string[]>([""])

    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: createClient,
        onSuccess: (data) => {
            addToast({
                color: 'success',
                title: data.message,
            })

            queryClient.invalidateQueries({
                queryKey: ['clients']
            })

            router.push('/contacts/clients')
        },
        onError: (error) => {
            addToast({
                color: 'danger',
                title: error.message,
            })
        }
    })

    const handleEmailChange = (index: number, value: string) => {
        const newEmails = [...emails]
        newEmails[index] = value
        setEmails(newEmails)
    }

    const addEmailInput = () => {
        setEmails([...emails, ""])
    }

    const handlePhoneChange = (index: number, value: string) => {
        const newPhones = [...phones]
        newPhones[index] = value
        setPhones(newPhones)
    }

    const addPhoneInput = () => {
        setPhones([...phones, ""])
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const formData = new FormData(e.currentTarget)

        const client = {
            ...Object.fromEntries(formData.entries()),
            emails,
            phones
        }

        mutate(client as  CreateClientOptions);

        if( isSuccess ){
            e.currentTarget.reset();
        }
    }

    return {
        emails,
        phones,
        handleEmailChange,
        addEmailInput,
        handlePhoneChange,
        addPhoneInput,
        handleSubmit,
        isPending
    }
}
