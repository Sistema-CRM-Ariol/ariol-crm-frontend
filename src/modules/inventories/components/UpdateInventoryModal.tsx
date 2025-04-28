import React from 'react'
import { Button } from '@heroui/button'
import { Edit02Icon } from 'hugeicons-react'

export const UpdateInventoryModal = () => {
    return (
        <Button
            isIconOnly
            startContent={ <Edit02Icon size={18}/> }
            size='sm'
            radius='md'
            variant='light'
            color='primary'
        />
    )
}
