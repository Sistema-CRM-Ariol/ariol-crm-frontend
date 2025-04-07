"use client"
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { Button } from '@heroui/button'
import { ArrowDown01Icon } from 'hugeicons-react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/dropdown'
import { useWarehouses } from '../hooks/useWarehouses'

export const WarehouseFilter = () => {
    const { warehouses } = useWarehouses();
    
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const handleChange = (selected: any) => {
        const params = new URLSearchParams(searchParams.toString())

        if (selected === 'all') {
            params.delete('warehouse')
        } else {
            params.set('warehouse', selected)
        }

        const queryString = params.toString()
        router.push(queryString ? `${pathname}?${queryString}` : pathname)
    }

    return (
        <Dropdown>
            <DropdownTrigger className="border border-gray-300 hidden sm:flex">
                <Button endContent={<ArrowDown01Icon size={16} />} variant="bordered">
                    Almacén
                </Button>
            </DropdownTrigger>
            <DropdownMenu items={warehouses} onAction={handleChange} disallowEmptySelection aria-label="Filtro de estado">
                {(warehouse) => (

                    <DropdownItem key={ warehouse.id } className="capitalize">
                        { warehouse.name }
                    </DropdownItem>
                )}
            </DropdownMenu>
        </Dropdown>
    )
}
