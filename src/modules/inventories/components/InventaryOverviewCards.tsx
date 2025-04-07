
import { OverviewCard } from '@/components/overview-card/OverviewCard'
import { Dollar02Icon, PackageIcon } from 'hugeicons-react'

export const InventaryOverviewCards = () => {
    return (
        <section className='pt-8'>
            <div className="overview-card-container">

                <OverviewCard
                    label="Total productos"
                    data={{
                        growthRate: 10,
                        value: "52u.",
                    }}
                    icon={<PackageIcon size={35} />}
                    iconColor='bg-green-500'
                />

                <OverviewCard
                    label="Nuevas ventas"
                    data={{
                        growthRate: 10,
                        value: "25k",
                    }}
                    icon={<Dollar02Icon size={35} />}
                    iconColor='bg-indigo-500'
                />
            </div>
        </section>
    )
}
