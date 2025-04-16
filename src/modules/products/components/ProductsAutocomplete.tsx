"use client"
import React, { useState } from 'react'
import { heroUIStyles } from '@/lib/heroui-styles';
import { Autocomplete, AutocompleteItem } from '@heroui/autocomplete';
import { useProductsAutocomplete } from '../hooks/useWarehouseAutocomplete';



interface Props {
    onSelect: (id: string | undefined) => void;
}


export const ProductsAutocomplete = ({ onSelect }: Props) => {

    const [inputValue, setInputValue] = useState('');
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const { products, isLoading } = useProductsAutocomplete(inputValue);

    return (
        <Autocomplete
            label="Buscar Unidad"
            isRequired
            isLoading={isLoading}
            labelPlacement='outside'
            inputProps={{
                classNames: { ...heroUIStyles.input, innerWrapper: "pr-4" }
            }}
            classNames={heroUIStyles.autocomplete}
            placeholder="Escribe el nombre de la unidad"
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
            {products.map((products) => (
                <AutocompleteItem key={products.id}>
                    {products.name}
                </AutocompleteItem>
            ))}
        </Autocomplete>
    );
}
