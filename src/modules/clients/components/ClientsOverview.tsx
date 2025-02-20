
import { News01Icon, UserGroupIcon } from 'hugeicons-react'

export const ClientsOverview = async () => {
    return (
        <section className='pt-8'>
            <div className="container flex flex-col gap-2 lg:flex-row w-full">

                <div className='client-overview__card'>
                    <div className='flex items-center gap-2'>
                        <UserGroupIcon className='text-primary-500' />
                        <h3 className='font-bold'>Total clientes</h3>
                    </div>
                    <p className='text-gray-700'><span className='text-[2rem] font-bold'>42</span> clientes</p>
                </div>

                <div className='client-overview__card'>
                    <div className='flex items-center gap-2'>
                        <News01Icon className='text-indigo-500' />
                        <h3 className='font-bold'>Nuevos clientes</h3>
                    </div>
                    <p className='text-gray-700'><span className='text-[2rem] font-bold'>42</span> clientes</p>
                </div>

            </div>
        </section>
    )
}
