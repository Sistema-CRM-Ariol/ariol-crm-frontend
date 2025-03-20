"use client"
import { useState } from "react"
import { toast } from "sonner";

import { useRouter } from 'next/navigation';
import { loginUser } from "../actions/login-user";


export const useLoginUser = () => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        setIsLoading(true);

        const form = e.target as HTMLFormElement;

        const email = form.elements.namedItem('email') as HTMLInputElement;
        const password = form.elements.namedItem('password') as HTMLInputElement;

        const { data, error } = await loginUser(email.value, password.value);

        if (error) {
            email.value = "";
            password.value = "";
            
            toast.error(error);
            setIsLoading(false);
            return;
        }

        toast.success(`Bienvenido ${ data?.user.name }`);
        
        setIsLoading(false);

        router.push('/admin/dashboard');
    }


    return {
        isLoading,
        handleSubmit,
    }

}