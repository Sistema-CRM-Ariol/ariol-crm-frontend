import { StatusFilter } from '@/components/StatusFilter'
import { InputSearchTable } from '@/components/InputSearchTable'


export const CategoryTableHeader = () => {
    return (
        <div className='table__header'>

            <h2 className='table__title'>Listado de categorias</h2>

            <div className='table__header--options'>
                <InputSearchTable placeholder='Buscar categorias' />

                <div className="flex gap-3">
                    <StatusFilter />
                </div>
            </div>
        </div>
    )

}
