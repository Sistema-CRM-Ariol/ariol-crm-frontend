"use client"

import { heroUIStyles } from '@/lib/heroui-styles'
import { useCompanies } from '@/modules/companies/hooks/useCompanies'

import { Select, SelectItem } from '@heroui/select'
import { Building02Icon } from 'hugeicons-react'


export const SelectCompany = () => {

    const { companies } = useCompanies()

    return (
        <Select
            items={companies}
            label="Empresa"
            name='companyId'
            placeholder="Selecciona la empresa"
            scrollShadowProps={{
                isEnabled: false
            }}
            labelPlacement='outside'
            classNames={heroUIStyles.select}
            startContent={<Building02Icon size={20}/>}
        >
            {(item) => (
                <SelectItem key={item.id} className="capitalize">
                    {item.name}
                </SelectItem>
            )}
        </Select>
    )
}
