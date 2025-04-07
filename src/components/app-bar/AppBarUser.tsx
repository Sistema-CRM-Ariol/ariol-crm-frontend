"use client"
import { User } from '@heroui/user'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/dropdown'

export const AppBarUser = () => {

    const user = {
        name: "Tony",
        lastname: "Reichert",
        email: "tony.reichert@example.com",
        avatar: undefined
    }

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
                    className="transition-transform"
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
