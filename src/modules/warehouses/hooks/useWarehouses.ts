"use client"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

import { useQuery } from "@tanstack/react-query"
import { getAllWarehouses } from "../actions/get-all-warehouses"



export const useWarehouses = () => {
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
        queryKey: ['warehouses', page, limit, search, isActive],
        queryFn: () => getAllWarehouses({ page, limit, search, isActive }),
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
        warehouses: data?.warehouses ?? [],
    }
}