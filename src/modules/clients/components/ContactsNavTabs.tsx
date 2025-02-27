"use client"
import { useRouter } from 'next/navigation'
import { Tab, Tabs } from '@heroui/tabs'
import { Building03Icon, UserGroupIcon } from 'hugeicons-react'

export const ContactsNavTabs = () => {

    const router = useRouter()

    return (
        <Tabs
            color="primary"
            classNames={{ 
                base: "border-b border-gray-300",
                cursor: "h-[3.5px] w-[100%] bottom-[-5px] rounded-full",
                tab: "px-10 font-semibold"
            }}
            aria-label="Options"
            variant="underlined"
            onSelectionChange={e => router.push(`/contacts/${ e }`)}
        >
            <Tab
                key="clients"
                title={
                    <div className="flex items-center space-x-2">
                        <UserGroupIcon size={20}/>
                        <span>Clientes</span>
                    </div>
                }
            />
            <Tab
                key="companies"
                title={
                    <div className="flex items-center space-x-2">
                        <Building03Icon size={20}/>
                        <span>Empresas</span>
                    </div>
                }
            />
        </Tabs>
    )
}
