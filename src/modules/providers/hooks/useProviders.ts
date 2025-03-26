"use client"
import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation"

import { getAllProviders } from "../actions/get-all-providers"



export const useProviders = () => {
    const queryParams = useSearchParams()
    const pageParams = queryParams.get('page')
    const limitParams = queryParams.get('limit')
    const searchParams = queryParams.get('search')
    const isActiveParams = queryParams.get('isActive')

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [search, setSearch] = useState('')
    const [isActive, setIsActive] = useState<string | undefined>(undefined)

    const { data, isLoading } = useQuery({
        queryKey: ['providers', page, limit, search, isActive],
        queryFn: () => getAllProviders({ page, limit, search, isActive }),
        staleTime: 1000 * 60 * 60 * 24
    })



    useEffect(() => {
        if (pageParams) {
            setPage(Number(pageParams))
        }

        if (limitParams) {
            setLimit(Number(limitParams))
        }

        setSearch(searchParams ?? '')

        setIsActive(isActiveParams ?? undefined)

    }, [pageParams, limitParams, searchParams, isActiveParams])


    return {
        isLoading,
        meta: data?.meta,
        providers: data?.providers ?? [],
    }

}