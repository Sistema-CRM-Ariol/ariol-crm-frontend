"use client"
import Link from 'next/link'
import { Tab, Tabs } from '@heroui/tabs'
import { Building03Icon, UserGroupIcon } from 'hugeicons-react'
import { heroUIStyles } from '@/lib/heroui-styles'

export const ContactsNavTabs = () => {


    return (
        <Tabs
            color="primary"
            classNames={heroUIStyles.tabs}
            aria-label="Contacts options"
            variant="underlined"
        >

            <Tab
                key="clients"
                title={
                    <Link href="/contacts/clients">
                        <div className="flex items-center space-x-2">
                            <UserGroupIcon size={20} />
                            <span>Clientes</span>
                        </div>
                    </Link>
                }
            />
            <Tab
                key="companies"
                title={
                    <Link as='' href="/contacts/companies">
                        <div className="flex items-center space-x-2">
                            <Building03Icon size={20} />
                            <span>Empresas</span>
                        </div>
                    </Link>
                }
            />

        </Tabs>
    )
}
