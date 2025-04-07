import { JSX } from 'react';

import { cn } from '@heroui/theme';
import { TradeDownIcon, TradeUpIcon } from 'hugeicons-react';

type Props = {
    label: string;
    data: {
        value: number | string;
        growthRate: number;
    };
    icon: JSX.Element;
    iconColor?: string;
};

export const OverviewCard = ({ icon, data, label, iconColor }: Props) => {

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
}
