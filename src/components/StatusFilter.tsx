"use client"
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { Button } from '@heroui/button'
import { ArrowDown01Icon } from 'hugeicons-react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/dropdown'

export const StatusFilter = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const handleChange = (selected: any) => {
        const params = new URLSearchParams(searchParams.toString())

        if (selected === 'all') {
            params.delete('isActive')
        } else {
            params.set('isActive', selected)
        }

        const queryString = params.toString()
        router.push(queryString ? `${pathname}?${queryString}` : pathname)
    }

    return (
        <Dropdown>
            <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ArrowDown01Icon size={16} />} variant="bordered">
                    Filtro de estado
                </Button>
            </DropdownTrigger>
            <DropdownMenu onAction={handleChange} disallowEmptySelection aria-label="Filtro de estado">
                <DropdownItem key="all" className="capitalize">
                    Todos
                </DropdownItem>
                <DropdownItem key="true" className="capitalize">
                    Activo
                </DropdownItem>
                <DropdownItem key="false" className="capitalize">
                    Desactivados
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
