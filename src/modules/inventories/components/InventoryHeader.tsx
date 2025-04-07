import { TitlePage } from '@/components/TitlePage'
import React from 'react'

export const InventoryHeader = () => {
    return (
        <header className="header">
            <div className="header--container">
                <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
                    <TitlePage
                        title="Inventarios"
                        subtitle="Gestiona los inventarios disponibles en tu empresa"
                    />
                </div>
            </div>

        </header>
    )
}
