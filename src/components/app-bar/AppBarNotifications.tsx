import React from 'react'
import { Button } from '@heroui/button'
import { Notification02Icon } from 'hugeicons-react'
import { Badge } from '@heroui/badge'

export const AppBarNotifications = () => {
    return (
        <Badge content={2} color='primary'>
            <Button
                radius='full'
                isIconOnly
                variant='ghost'
                startContent={<Notification02Icon size={20} />}
            />
        </Badge>
    )
}
