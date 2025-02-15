import React from 'react'


interface Props {
    title: string
    subtitle: string
}

export const TitlePage = ({ title, subtitle }: Props) => {
    return (
        <div className="flex flex-col">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-gray-500">{subtitle}</p>
        </div>
    )
}
