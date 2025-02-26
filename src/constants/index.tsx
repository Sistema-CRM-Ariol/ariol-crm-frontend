import { CheckListIcon, Home01Icon, PackageIcon, SaleTag01Icon, Settings01Icon, UserGroupIcon, UserIcon, UserListIcon } from "hugeicons-react";

// SIDE MENU OPTIONS
export const sideMenuAplications = [
    {
        name: 'Dashboard',
        icon: <Home01Icon size={22}/>,
        href: '/'
    },
    {
        name: 'Clientes',
        icon: <UserListIcon size={22}/>,
        href: '/contacts/clients'
    },
    {
        name: 'Inventarios',
        icon: <CheckListIcon size={22}/>,
        href: '/inventory'
    },
    {
        name: 'Productos',
        icon: <PackageIcon size={22}/>,
        href: '/products'
    },
    {
        name: 'Ventas',
        icon: <SaleTag01Icon size={22}/>,
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

