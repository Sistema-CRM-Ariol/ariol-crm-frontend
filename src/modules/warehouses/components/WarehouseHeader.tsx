
import { TitlePage } from '@/components/TitlePage'

export const WarehouseHeader = () => {
    return (
        <header className="header">
            <div className="header--container">
                <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
                    <TitlePage
                        title="Almacenes"
                        subtitle="Gestiona los almacenes disponibles en tu empresa"
                    />
                </div>
            </div>

        </header>
    )
}
