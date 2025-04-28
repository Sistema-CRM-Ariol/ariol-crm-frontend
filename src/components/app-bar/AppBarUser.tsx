"use client"
import { useEffect, useState } from 'react';

import { User } from '@/modules/auth/interfaces/user.interface'
import { getUser } from '@/modules/auth/actions/get-user';

import {Avatar } from "@heroui/avatar";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/dropdown'

export const AppBarUser = () => {
    
    const [user, setUser] = useState<User>({} as User);

    const fetchUser = async () => {
        const userData = await getUser();
        setUser(userData);
    }

    useEffect(() => {
        fetchUser();
    }, []);

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
