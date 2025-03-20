
import { TitlePage } from '@/components/TitlePage'
import { ProductsNavTabs } from './ProductsNavTabs'

export const ProductsHeader = () => {
    return (
        <header className="header">
            <div className="header--container">
                <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
                    <TitlePage
                        title="Gestion de productos"
                        subtitle="Controla toda la información relaciona con tus productos"
                    />
                </div>

                <ProductsNavTabs />
            </div>

        </header>
    )
}
