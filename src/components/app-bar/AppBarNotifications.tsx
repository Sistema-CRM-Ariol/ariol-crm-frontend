import React from 'react'
import { Button } from '@heroui/button'
import { Notification02Icon } from 'hugeicons-react'
import { Badge } from '@heroui/badge'

export const AppBarNotifications = () => {
    return (
        <div className='relative'>
            <Badge
                style={{
                    bottom: '-14px',
                    right: '-4px',
                    translate: '-40% 30%',
                    position: 'absolute',
                }}
                content={2} color='primary' variant='flat'>
                <Button
                    radius='full'
                    isIconOnly
                    variant='light'
                    startContent={<Notification02Icon size={20} />}
                />
            </Badge>
        </div>
    )
}
