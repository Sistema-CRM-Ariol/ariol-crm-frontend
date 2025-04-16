import { TitlePage } from '@/components/TitlePage'

export const ExpensesHeader = () => {
    return (
        <header className='pt-8'>
            <div className="container">
                <TitlePage
                    title='Salidas'
                    subtitle='Gestiona todas las ventas, cotizaciones o salidas de tus inventarios'
                />
            </div>
        </header>
    )
}
