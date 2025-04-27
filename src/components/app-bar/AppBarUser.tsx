"use client"
import { User as IUser } from '@/modules/auth/interfaces/user.interface'

import {Avatar } from "@heroui/avatar";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/dropdown'

interface Props {
    user: IUser
}

export const AppBarUser = ({ user }: Props) => {

    return (
        <Dropdown 
            classNames={{
                content: "border border-gray-300 radius-sm !shadow-lg"
            }}
            placement="bottom-start"
            showArrow
        >
            <DropdownTrigger>
                <Avatar
                    isBordered
                    color='secondary'
                    size='sm'
                    className='cursor-pointer'
                    radius='md'
                    name={user.name}
                    src={user.avatar ?? undefined}
                />
                
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem key="settings">
                    My Settings
                </DropdownItem>
                <DropdownItem key="logout" color="danger">
                    Cerrar Sesion
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
