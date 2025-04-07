"use client"
import { Input } from '@heroui/input'
import { Button } from '@heroui/button'
import { heroUIStyles } from '@/lib/heroui-styles'
import { SmartPhone01Icon } from 'hugeicons-react'



interface Props {
    phones: string[]
    onPhoneChange: (index: number, value: string) => void
    onAddPhone: () => void
}


export const DynamicPhonesInput = ({ onAddPhone, onPhoneChange, phones}: Props) => {


    return (
        <div>
            <label className="block mb-2 font-medium text-sm">Teléfonos</label>
            {phones.map((phone, index) => (
                <Input
                    startContent={<SmartPhone01Icon size={20} />}
                    key={`phone-${index}`}
                    classNames={heroUIStyles.input}
                    placeholder="Ingresa un teléfono"
                    value={phone}
                    onChange={(e) => onPhoneChange(index, e.target.value)}
                    labelPlacement="outside"
                    className='mb-2'
                />
            ))}
            <Button type="button" size='sm' variant='light' onPress={onAddPhone} color="primary">
                Agregar Teléfono
            </Button>
        </div>
    )
}
