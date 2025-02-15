
import Link from 'next/link'
import { Button } from '@heroui/button'
import { TitlePage } from '@/components/TitlePage'

export const ClientsHeader = () => {
    return (
        <header className="clients__header">
            <div className="clients__header--container">
                <TitlePage
                    title="Contactos"
                    subtitle="Gestiona tus contactos y toda su información"
                />

                <Link href='/contacts/clients/new'>
                    <Button
                        color='primary'
                    >
                        + Agregar cliente
                    </Button>
                </Link>
            </div>
        </header>
    )
}
