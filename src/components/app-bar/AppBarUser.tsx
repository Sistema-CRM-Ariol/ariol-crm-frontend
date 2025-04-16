"use client"
import { User } from '@heroui/user'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/dropdown'
import { User as IUser } from '@/modules/auth/interfaces/user.interface'

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
                <User
                    as="button"
                    avatarProps={{
                        size: "sm",
                        src: user.avatar ? user.avatar : undefined,
                    }}
                    classNames={{
                        wrapper: "items-end"
                    }}
                    className="transition-transform flex-row-reverse items-center"
                    description={user.email}
                    name={`${user.name}`}
                    
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
