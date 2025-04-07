import { ChartIncreaseIcon, CheckListIcon, Home01Icon, PackageIcon, Settings01Icon, UserGroupIcon, UserIcon, UserListIcon, WarehouseIcon } from "hugeicons-react";

// SIDE MENU OPTIONS
export const sideMenuAplications = [
    {
        name: 'Dashboard',
        icon: <Home01Icon size={22}/>,
        href: '/home'
    },
    {
        name: 'Clientes',
        icon: <UserListIcon size={22}/>,
        href: '/contacts/clients'
    },
    {
        name: 'Productos',
        icon: <PackageIcon size={22}/>,
        href: '/catalog/products'
    },
    {
        name: 'Almacenes',
        icon: <WarehouseIcon size={22}/>,
        href: '/warehouses'
    },
    {
        name: 'Inventarios',
        icon: <CheckListIcon size={22}/>,
        href: '/inventories'
    },
    {
        name: 'Salidas',
        icon: <ChartIncreaseIcon size={22}/>,
        href: '/sales'
    },
]

export const sideMenuOthers = [
    {
        name: 'Usuarios',
        icon: <UserGroupIcon size={22}/>,
        href: '/users'
    },
    {
        name: 'Perfil',
        icon: <UserIcon size={22}/>,
        href: '/profile'
    },
    {
        name: 'Configuración',
        icon: <Settings01Icon size={22}/>,
        href: '/settings'
    },

]

