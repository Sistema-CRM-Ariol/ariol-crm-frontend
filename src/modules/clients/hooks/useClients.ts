"use client"
import { useEffect, useState } from "react"
import { ClientSummary } from "../interfaces/client-summary.interface"
import { useQuery } from "@tanstack/react-query"
import { getAllClients } from "../actions/get-all-clients"
import { PaginationMeta } from "@/interfaces/pagination"
import { useSearchParams } from "next/navigation"

export const useClients = () => {

    const queryParams = useSearchParams()

    const pageParams = queryParams.get('page')
    const limitParams = queryParams.get('limit')
    const searchParams = queryParams.get('search')


    const [meta, setMeta] = useState<PaginationMeta>()
    const [clients, setClients] = useState<ClientSummary[]>([])

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [search, setSearch] = useState('')



    const { data, isLoading } = useQuery({
        queryKey: ['clients', page, limit, search],
        queryFn: () => getAllClients({ page, limit, search }), // <-- Envía un objeto
        staleTime: 1000 * 60 * 60 * 24,
    })

    useEffect(() => {
        console.log(pageParams)
        if (pageParams) {
            setPage(Number(pageParams))
        }
        if (limitParams) {
            setLimit(Number(limitParams))
        }

        setSearch(searchParams ?? '')

    }, [pageParams, limitParams, searchParams])

    useEffect(() => {
        if (data) {
            setMeta(data.meta);
            setClients(data.clients);
            return;
        }

        setClients([]);
    }, [data])

    return {
        clients,
        page,
        limit,
        search,
        isLoading,
        meta
    }
}