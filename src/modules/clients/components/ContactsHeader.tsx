import Link from 'next/link'
import { Button } from '@heroui/button'
import { TitlePage } from '@/components/TitlePage'
import { ContactsNavTabs } from './ContactsNavTabs'

export const ContactsHeader = () => {
    return (
        <header className="contacts__header">
            <div className="contacts__header--container">
                <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
                    <TitlePage
                        title="Contactos"
                        subtitle="Gestiona tus contactos y toda su información"
                    />
                    <div className='flex gap-4'>
                        <Link href='/contacts/clients/new'>
                            <Button color='primary'>+ Agregar cliente</Button>
                        </Link>

                        <Link href='/contacts/clients/new'>
                            <Button color='primary'>+ Agregar empresa</Button>
                        </Link>
                    </div>
                </div>

                <ContactsNavTabs />
            </div>

        </header>
    )
}
