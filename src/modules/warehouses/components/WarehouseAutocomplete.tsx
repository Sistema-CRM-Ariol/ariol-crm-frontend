"use client"
import React, { useState } from 'react'
import { useWarehouseAutocomplete } from '../hooks/useWarehouseAutocomplete';
import { heroUIStyles } from '@/lib/heroui-styles';
import { Autocomplete, AutocompleteItem } from '@heroui/autocomplete';



interface Props {
    onSelect: (id: string | undefined) => void;
}


export const WarehouseAutocomplete = ({ onSelect }: Props) => {

    const [inputValue, setInputValue] = useState('');
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const { warehouses, isLoading } = useWarehouseAutocomplete(inputValue);

    return (
        <Autocomplete
            label="Buscar Almacén"
            isRequired
            isLoading={isLoading}
            labelPlacement='outside'
            inputProps={{
                classNames: { ...heroUIStyles.input, innerWrapper: "pr-4" }
            }}
            classNames={heroUIStyles.autocomplete}
            placeholder="Escribe el nombre del almacén"
            onInputChange={(value: string) => setInputValue(value)}
            onSelectionChange={(id) => {
                setSelectedId(id as string); // Guarda el ID seleccionado
                if (onSelect) {
                    onSelect(id as string); // Envía el ID al formulario si es necesario
                }
            }}
            shouldCloseOnBlur={false}
            selectedKey={selectedId} // Mantener la selección
        >
            {warehouses.map((warehouse) => (
                <AutocompleteItem key={warehouse.id}>
                    {warehouse.name}
                </AutocompleteItem>
            ))}
        </Autocomplete>
    );
}
