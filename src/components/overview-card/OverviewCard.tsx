import { cn } from '@heroui/theme';
import { ArrowDown01Icon, ArrowUp01Icon, TradeDownIcon, TradeUpIcon } from 'hugeicons-react';
import { JSX } from 'react';
import React, { SVGProps } from 'react'

interface Props {
    icon: React.ReactNode
    title: string
    value: string
}
type PropsType = {
    label: string;
    data: {
        value: number | string;
        growthRate: number;
    };
    // Icon: JSX.Element;
    icon: JSX.Element;
    iconColor?: string;
};
export const OverviewCard = ({ icon, data, label, iconColor }: PropsType) => {

    const isDecreasing = data.growthRate < 0;


    return (
        <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark border border-gray-300">
            <div
                className={cn(
                    "text-white rounded-full p-3 max-w-max",
                    iconColor ? iconColor : "bg-primary-500"
                )}
            >
                {icon}
            </div>

            <div className="mt-6 flex items-end justify-between">
                <dl>
                    <dt className="mb-1.5 text-2xl font-bold">
                        {data.value}
                    </dt>

                    <dd className="text-sm font-medium">{label}</dd>
                </dl>

                <dl
                    className={cn(
                        "text-sm font-medium",
                        isDecreasing ? "text-red-500" : "text-green-500",
                    )}
                >
                    <dt className="flex items-center gap-1.5">
                        {data.growthRate}%
                        {isDecreasing ? (
                            <TradeDownIcon aria-hidden />
                        ) : (
                            <TradeUpIcon aria-hidden />
                        )}
                    </dt>

                    <dd className="sr-only">
                        {label} {isDecreasing ? "Decreased" : "Increased"} by{" "}
                        {data.growthRate}%
                    </dd>
                </dl>
            </div>
        </div>
    );

    // return (
    //     <div className='overview-card'>
    //         <div className='flex items-center gap-2'>
    //             { icon }
    //             <h3 className='font-bold'>{ title }</h3>
    //         </div>
    //         <p className='text-gray-700'>{ value }</p>
    //     </div>

    // )
}
