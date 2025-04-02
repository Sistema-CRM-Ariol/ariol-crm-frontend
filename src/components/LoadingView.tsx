"use client"
import { CircularProgress } from '@heroui/progress'

export const LoadingView = () => {
    return (
        <section className='min-h-[50vh] flex items-center justify-center'>
            <div className="container text-center">
                <CircularProgress color='primary' className='mx-auto' />
                <p>Cargando...</p>
            </div>
        </section>
    )
}
