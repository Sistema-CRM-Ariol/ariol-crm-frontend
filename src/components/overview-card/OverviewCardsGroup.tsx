import React from 'react'
import { OverviewCard } from './OverviewCard'
import { Dollar02Icon, PackageIcon, UserGroupIcon } from 'hugeicons-react'

export const OverviewCardsGroup = () => {
    return (
        <section className='pt-8'>
            <div className="container grid grid-cols-4 gap-8">
                <OverviewCard
                    label="Total usuarios"
                    data={{
                        growthRate: 10,
                        value: "25k",
                    }}
                    icon={<UserGroupIcon size={35} />}
                    iconColor='bg-green-500'
                />

                <OverviewCard
                    label="Nuevos usuarios"
                    data={{
                        growthRate: 10,
                        value: "25k",
                    }}
                    icon={<UserGroupIcon size={35} />}
                    iconColor='bg-indigo-500'
                />

                <OverviewCard
                    label="Ingresos generados"
                    data={{
                        growthRate: 15.2,
                        value: "25k",
                    }}
                    icon={<Dollar02Icon size={35} />}
                    iconColor='bg-orange-500'
                />

                <OverviewCard
                    label="Total de productos"
                    data={{
                        growthRate: 0.2,
                        value: "22u.",
                    }}
                    icon={<PackageIcon size={35} />}
                    iconColor='bg-primary-500'
                />

            </div>
        </section>
    )
}
