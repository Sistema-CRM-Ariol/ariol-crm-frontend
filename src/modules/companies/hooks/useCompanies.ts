"use client"
import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { PaginationMeta } from "@/interfaces/pagination"
import { useSearchParams } from "next/navigation"
import { getAllCompanies } from "../actions/get-all-companies"
import { CompanySummary } from "../interfaces/company-summary.interface"

export const useCompanies = () => {

    const queryParams = useSearchParams()

    const pageParams = queryParams.get('page')
    const limitParams = queryParams.get('limit')
    const searchParams = queryParams.get('search')


    const [meta, setMeta] = useState<PaginationMeta>()
    const [companies, setCompanies] = useState<CompanySummary[]>([])

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [search, setSearch] = useState('')



    const { data, isLoading } = useQuery({
        queryKey: ['companies', page, limit, search],
        queryFn: () => getAllCompanies({ page, limit, search }), // <-- Envía un objeto
        staleTime: 1000 * 60 * 60 * 24,
    })

    useEffect(() => {
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
            setCompanies(data.companies);
            return;
        }

        setCompanies([]);
    }, [data])

    return {
        companies,
        page,
        limit,
        search,
        isLoading,
        meta
    }
}