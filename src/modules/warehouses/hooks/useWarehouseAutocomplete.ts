"use client"
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getAllWarehouses } from "../actions/get-all-warehouses";

export const useWarehouseAutocomplete = (searchTerm: string) => {
    const [debouncedSearch, setDebouncedSearch] = useState(searchTerm);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 500);
        return () => clearTimeout(handler);
    }, [searchTerm]);

    const { data, isLoading } = useQuery({
        queryKey: ['warehouses-autocomplete', debouncedSearch],
        queryFn: () => getAllWarehouses({ page: 1, limit: 20, search: debouncedSearch }),
        enabled: debouncedSearch.length > 0, // Solo ejecuta la búsqueda si hay texto
    });

    return {
        warehouses: data?.warehouses ?? [],
        isLoading,
    };
};
