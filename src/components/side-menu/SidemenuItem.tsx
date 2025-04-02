"use client"

import { JSX } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@heroui/button'


interface Props {
    item: {
        name: string,
        icon: JSX.Element,
        href: string
    }
}

export const SidemenuItem = ({ item }: Props) => {

    const pathname = usePathname()




    return (
        <Link href={item.href} className='block'>
            <Button
                className={ 
                    pathname.includes(item.href.split('/')[1]) 
                    ? 'sidemenu__item--active' 
                    : 'sidemenu__item'
                    }
                fullWidth
                radius='md'
                color='primary'
                variant={ pathname.includes(item.href) ? 'flat' : 'light' }
                as='li'
            >
                <span>{item.icon}</span>
                {item.name}
            </Button>
        </Link>
    )
}
