import { Configuration01Icon, Configuration02Icon, CustomerService01Icon, DashboardBrowsingIcon, GroupItemsIcon, Home01Icon, WarehouseIcon } from "hugeicons-react";

// SIDE MENU OPTIONS
export const sideMenuAplications = [
    {
        name: 'Dashboard',
        icon: <Home01Icon size={22}/>,
        href: '/'
    },
    {
        name: 'Clientes',
        icon: <CustomerService01Icon size={22}/>,
        href: '/contacts/clients'
    },
    {
        name: 'Inventarios',
        icon: <GroupItemsIcon size={22}/>,
        href: '/inventory'
    },
]

export const sideMenuOthers = [
    {
        name: 'Configuración',
        icon: <Configuration02Icon size={22}/>,
        href: '/settings'
    },

]

