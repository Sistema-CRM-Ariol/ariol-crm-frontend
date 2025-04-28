"use client"
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllClients } from "../actions/get-all-clients";


export const useClientsAutocomplete = (searchTerm: string) => {
    const [debouncedSearch, setDebouncedSearch] = useState(searchTerm);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 500);
        return () => clearTimeout(handler);
    }, [searchTerm]);

    const { data, isLoading } = useQuery({
        queryKey: ['products-autocomplete', debouncedSearch],
        queryFn: () => getAllClients({ page: 1, limit: 20, search: debouncedSearch }),
        enabled: debouncedSearch.length > 0, // Solo ejecuta la búsqueda si hay texto
    });

    return {
        products: data?.clients ?? [],
        isLoading,
    };
};
